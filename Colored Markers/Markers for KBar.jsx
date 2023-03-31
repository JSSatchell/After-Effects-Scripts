// JSSatchell 2023

// For use with KBar3 which can be found here: https://aescripts.com/kbar/
// Pass an argument of 1-16 to add a marker of a specific color, all other values will create a marker of the default color.

var button = (typeof kbar !== 'undefined') ? kbar.button : null;

if (button) {
    try {
        var argNum = parseInt(button.argument);
        if (argNum <= 16 && argNum >= 0) {
            addColorMarker(argNum);
        } else {
            addColorMarker(0);
        }
    } catch (error) {
        addColorMarker(0);
    }
} else {
    Window.alert("Please use with KBar.");
}

function addColorMarker(colVal) {
    var comp = app.project.activeItem;
    var layers = comp.selectedLayers;
    app.beginUndoGroup ("Add Marker");
    var m = new MarkerValue("");
    m.label = colVal;
    if (layers.length > 0) {
        for(var i = 0; i < layers.length; i++) {
            var t = layers[i].time;
            layers[i].property("Marker").setValueAtTime(t, m);
        }
    } else {
        var t = comp.time;
        comp.markerProperty.setValueAtTime(t, m);
    }
    app.endUndoGroup();
}
