// JSSatchell 2023

// Sets comp duration based on the length of the selected layers, or else all layers in the comp

// KBar arguments:
// - in = Adjust beginning of comp to selected layer with earliest in point
// - out = Adjust end of comp to selected layer with latest end point
// - in/out = Adjust beginning and end of comp to fist and last selected layer
// Leave blank to open panel
// Add "-i" to the end of any argument to ignore locked layers


var kButton = (typeof kbar !== 'undefined') ? kbar.button : null;

if (kButton) {
    var comp = app.project.activeItem;
    var layers = comp.selectedLayers;
    var allLayers = comp.layers;
    switch(kButton.argument) {
        case 'in':
            app.beginUndoGroup('Change comp duration');
            compLength(1, 0);
            app.endUndoGroup();
        break;

        case 'out':
            app.beginUndoGroup('Change comp duration');
            compLength(2, 0);
            app.endUndoGroup();
        break;

        case 'in/out':
            app.beginUndoGroup('Change comp duration');
            compLength(3, 0);
            app.endUndoGroup();
        break;

        case 'in-i':
            app.beginUndoGroup('Change comp duration');
            compLength(1, 1);
            app.endUndoGroup();
        break;

        case 'out-i':
            app.beginUndoGroup('Change comp duration');
            compLength(2, 1);
            app.endUndoGroup();
        break;

        case 'in/out-i':
            app.beginUndoGroup('Change comp duration');
            compLength(3, 1);
            app.endUndoGroup();
        break;

        case '':
            buildPanel();
        break;
    
        default:
            Window.alert("Argument " + kButton.argument + " is invalid.");
        break;

    }
} else {
    buildPanel();
}

function buildPanel() {
    var comp = app.project.activeItem;
    var layers = comp.selectedLayers;
    var window = new Window("palette", "Comp to Contents", undefined);
    var compInButton = window.add("button",undefined,"Comp In");
    var compOutButton = window.add("button",undefined,"Comp Out");
    var compInOutButton = window.add("button",undefined,"Comp In & Out")
    window.show();
 
    compInButton.onClick = function video() {
        app.beginUndoGroup('Change comp duration');
        compLength(1, 0);
        app.endUndoGroup();
    }
 
    compOutButton.onClick = function() {
        app.beginUndoGroup('Change comp duration');
        compLength(2, 0);
        app.endUndoGroup();
    }

    compInOutButton.onClick = function () {
        app.beginUndoGroup('Change comp duration');
        compLength(3, 0);
        app.endUndoGroup();
    }
 }

function compLength(dir, ignore) {
    var all = 0;
    var minIn = comp.duration;
    var maxOut = -10800;
    var ogStartTime = comp.displayStartTime;
    var stop = layers.length;
    if (layers.length == 0) {
        layers = allLayers;
        all=1;
        stop = layers.length+1;
    }

    // get layer in/out values
    for(var i = (all==0) ? 0 : 1 ; i < stop; i++){
        if (layers[i].locked && ignore==1){
        } else {
            newIn = layers[i].inPoint;
            newOut = layers[i].outPoint;
            if (newIn>newOut) { // Check for reversed layers
                var flip = newOut;
                newOut = newIn;
                newIn = flip;
            }
            if(newIn < minIn) {
                minIn = newIn;
            }
            if(newOut > maxOut) {
                maxOut = newOut;
            }
        }
    }
    if (dir==2) {
        comp.duration = maxOut;
        return;
    }
    comp.displayStartTime = 0;
    adj = comp.displayStartTime - minIn;
 
    // shift all layers in time
    for(var i = 1 ; i <= allLayers.length; i++){   
        var locked = (allLayers[i].locked) ? 1 : 0;
        if(locked==1)
            allLayers[i].locked = 0;
        allLayers[i].startTime += adj;
        if (locked==1)
            allLayers[i].locked=1;
    }

    // shift markers
    moveMarkers();    

    // gather values for work area shift
    crop=0;
    if ((comp.workAreaStart + adj) > comp.displayStartTime)
        newWAStart = comp.workAreaStart + adj;
    else {
        newWAStart = comp.displayStartTime;
        crop = minIn - comp.workAreaStart;
    }
    if (comp.workAreaDuration>comp.duration) {
        newWADuration = comp.duration - newWAStart;
    } else {
        newWADuration = comp.workAreaDuration-crop;
    }

    // adjust duration
    if(dir==1)
        comp.duration -= minIn;   
    else if (dir==3)
        comp.duration = maxOut-minIn;
    
    // shift work area
    comp.workAreaStart = newWAStart;
    comp.workAreaDuration = newWADuration;

    // reset start time
    comp.displayStartTime = ogStartTime;
}

function moveMarkers() {
    for(var i = 1; i <= comp.markerProperty.numKeys; i++) {
        marker = new MarkerValue(comp.markerProperty.keyValue(i).comment);
        marker.chapter = comp.markerProperty.keyValue(i).chapter;
        marker.comment = comp.markerProperty.keyValue(i).comment;
        marker.cuePointName = comp.markerProperty.keyValue(i).cuePointName;
        marker.duration = comp.markerProperty.keyValue(i).duration;
        marker.eventCuePoint = comp.markerProperty.keyValue(i).eventCuePoint;
        marker.frameTarget = comp.markerProperty.keyValue(i).frameTarget;
        marker.url = comp.markerProperty.keyValue(i).url;
        marker.label = comp.markerProperty.keyValue(i).label;
        marker.protectedRegion = comp.markerProperty.keyValue(i).protectedRegion;
        newTime = comp.markerProperty.keyTime(i) + adj;
        comp.markerProperty.removeKey(i);
        comp.markerProperty.setValueAtTime(newTime, marker);
    }
}
