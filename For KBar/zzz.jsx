// JSSatchell 2023

// For use with KBar3 which can be found here: https://aescripts.com/kbar/
// Shamelessly inspired by Battle Axe's awesome Void scripts which can be found here: https://www.battleaxe.co/void
// Really I just missed the feature of Turbo Layers to create Solids and Adjustment Layers that were the same length as the selected layers, so I took it as a scripting challenge to build my own toolkit

// Arguments:
//   zilch = New Null Layer (a la Battle Axe's Void)
//   zone = New Solid Layer (a la Battle Axe's Volume)
//   zest = New Adjustment Layer (a la Battle Axe's Variant)

var comp = app.project.activeItem;
var layers = comp.selectedLayers;
var allLayers = comp.layers;
var button = (typeof kbar !== 'undefined') ? kbar.button : null;

if (button) {
    switch(button.argument) {
        case 'zilch':
            zilch();
        break;

        case 'zest':
            zest();
        break;

        case 'zone':
            zone();
        break;
    
        default:
            Window.alert("Argument " + button.argument + " is invalid.");
        break;

    }
} else {
    Window.alert("Please use with KBar.");
}

function zilch() {
    app.beginUndoGroup("Add zilch");

    index=1;
    for (var i=1; i <= allLayers.length; i++) {
        if (allLayers[i].name.search("z lch")>0)
            index++;
    }
    var zilchLayer = comp.layers.addShape();
    zilchLayer.name = "» z lch " + index;
    zilchLayer.guideLayer = 1;
    if (app.preferences.havePref("Label Preference Indices Section 5", "Null Label Index", PREFType.PREF_Type_MACHINE_INDEPENDENT) == 1) {
        var nullColor = app.preferences.getPrefAsLong("Label Preference Indices Section 5", "Null Label Index", PREFType.PREF_Type_MACHINE_INDEPENDENT);
    } else if (app.preferences.havePref("Label Preference Indices Section 5", "Null Label Index 2", PREFType.PREF_Type_MACHINE_INDEPENDENT) == 1) {
        nullColor = app.preferences.getPrefAsLong("Label Preference Indices Section 5", "Null Label Index 2", PREFType.PREF_Type_MACHINE_INDEPENDENT);
    } else {
        nullColor = 9;
    }
    zilchLayer.label = nullColor;
    zilchLayer.property("Opacity").setValue("50");
    
    var zilchGroup = zilchLayer.property("Contents").addProperty("ADBE Vector Group");
    zilchGroup.name = "z lch shape";
    var zilchShape = zilchGroup.property("Contents").addProperty("ADBE Vector Shape - Rect");
    zilchShape.property("Size").setValue([100,100]);
    var zilchStroke = zilchGroup.property("Contents").addProperty("ADBE Vector Graphic - Stroke");
    var strokeColor = zilchStroke.property("Color").setValue([0,200,255]);
    var strokeWidth = zilchStroke.property("Stroke Width").setValue(1);
    
    /* // For some reason this causes the layer properties to be twirled down when created, working on a fix
    var dash1 = zilchStroke.property("Dashes").addProperty("ADBE Vector Stroke Dash 1").setValue(2);
    var gap1 = zilchStroke.property("Dashes").addProperty("ADBE Vector Stroke Gap 1").setValue(2);
    var offset = zilchStroke.property("Dashes").addProperty("ADBE Vector Stroke Offset").setValue(4);
    */
    
    if(layers.length > 0) {
        var newIn;
        var minIn = zilchLayer.outPoint;
        var newOut;
        var maxOut = 0;
        var topIndx = layers.length;
        var newIndx = layers.length;
        xPosArray = [];
        yPosArray = [];
        zPosArray = [];
        zilchLayer.moveToEnd();
        
        for(var i = 0; i < layers.length; i++){
            newIn = layers[i].inPoint;
            newOut = layers[i].outPoint;
            newIndx = layers[i].index;
            t = comp.time;
            pos = layers[i].transform.position.valueAtTime(t,1);
            if(newIn < minIn) {
                minIn = newIn;
            }
            if(newOut > maxOut) {
                maxOut = newOut;
            }
            if(newIndx < zilchLayer.index) {
                zilchLayer.moveBefore(layers[i]);
            }
            xPosArray.push(pos[0]);
            yPosArray.push(pos[1]);
            zPosArray.push(pos[2]);
        }
    
        zilchLayer.inPoint = minIn;
        zilchLayer.outPoint = maxOut;
    
        avgX = arrayAverage(xPosArray);
        avgY = arrayAverage(yPosArray);
        avgZ = arrayAverage(zPosArray);
    
        zilchLayer.transform.position.setValue([avgX,avgY,avgZ]);
        for(var i = 0; i < layers.length; i++){
            if (layers[i].parent == "" || layers.length > 1) {
                layers[i].parent = zilchLayer;
            } else if (layers.length == 1) {
                zilchLayer.parent = layers[i].parent;
                layers[i].parent = zilchLayer;
            }
        }
    }
    
    app.endUndoGroup();
}

function zest() {
    app.beginUndoGroup("Add zest");

    index=1;
    for (var i=1; i <= allLayers.length; i++) {
        if (allLayers[i].name.search("zëst")>0)
            index++;
    }
    var zestLayer = comp.layers.addShape();
    zestLayer.name = "÷ zëst " + index;
    var zestGroup = zestLayer.property("Contents").addProperty("ADBE Vector Group");
    zestGroup.name = "zëst shape";
    zestLayer.adjustmentLayer = 1;
    if (app.preferences.havePref("Label Preference Indices Section 5", "Adjustment Label Index", PREFType.PREF_Type_MACHINE_INDEPENDENT) == 1) {
        var adjColor = app.preferences.getPrefAsLong("Label Preference Indices Section 5", "Adjustment Label Index", PREFType.PREF_Type_MACHINE_INDEPENDENT);
    } else if (app.preferences.havePref("Label Preference Indices Section 5", "Adjustment Label Index 2", PREFType.PREF_Type_MACHINE_INDEPENDENT) == 1) {
        adjColor = app.preferences.getPrefAsLong("Label Preference Indices Section 5", "Adjustment Label Index 2", PREFType.PREF_Type_MACHINE_INDEPENDENT);
    } else {
        adjColor = 1;
    }
    zestLayer.label = adjColor;
    
    var zestShape = zestGroup.property("Contents").addProperty("ADBE Vector Shape - Rect");
    zestShape.property("Size").setValue([comp.width,comp.height]);
    var zestFill = zestGroup.property("Contents").addProperty("ADBE Vector Graphic - Fill");
    zestFill.property("Color").setValue([0,0,0]);
    
    if(layers.length > 0) {
        var newIn;
        var minIn = zestLayer.outPoint;
        var newOut;
        var maxOut = 0;
        var topIndx = layers.length;
        var newIndx = layers.length;
        zestLayer.moveToEnd();
        
        for(var i = 0; i < layers.length; i++){
            newIn = layers[i].inPoint;
            newOut = layers[i].outPoint;
            newIndx = layers[i].index;
            if(newIn < minIn) {
                minIn = newIn;
            }
            if(newOut > maxOut) {
                maxOut = newOut;
            }
            if(newIndx < zestLayer.index) {
                zestLayer.moveBefore(layers[i]);
            }
        }
        zestLayer.inPoint = minIn;
        zestLayer.outPoint = maxOut;
    }
    
    app.endUndoGroup();
}

function zone() {
    app.beginUndoGroup("Add zone");

    index=1;
    for (var i=1; i <= allLayers.length; i++) {
        if (allLayers[i].name.search("zøne")>0)
            index++;
    }
    var zoneLayer = comp.layers.addShape();
    zoneLayer.name = "|| zøne " + index;
    var zoneGroup = zoneLayer.property("Contents").addProperty("ADBE Vector Group");
    zoneGroup.name = "zøne shape";
    if (app.preferences.havePref("Label Preference Indices Section 5", "Solid Label Index", PREFType.PREF_Type_MACHINE_INDEPENDENT) == 1) {
        var solidColor = app.preferences.getPrefAsLong("Label Preference Indices Section 5", "Solid Label Index", PREFType.PREF_Type_MACHINE_INDEPENDENT);
    } else if (app.preferences.havePref("Label Preference Indices Section 5", "Solid Label Index 2", PREFType.PREF_Type_MACHINE_INDEPENDENT) == 1) {
        solidColor = app.preferences.getPrefAsLong("Label Preference Indices Section 5", "Solid Label Index 2", PREFType.PREF_Type_MACHINE_INDEPENDENT);
    } else {
        solidColor = 11;
    }
    zoneLayer.label = solidColor;
    
    var zoneShape = zoneGroup.property("Contents").addProperty("ADBE Vector Shape - Rect");
    zoneShape.property("Size").setValue([comp.width,comp.height]);
    var zoneFill = zoneGroup.property("Contents").addProperty("ADBE Vector Graphic - Fill");
    zoneFill.property("Color").setValue([0,0,0]);
    
    if(layers.length > 0) {
        var newIn;
        var minIn = zoneLayer.outPoint;
        var newOut;
        var maxOut = 0;
        var topIndx = layers.length;
        var newIndx = layers.length;
        zoneLayer.moveToEnd();
        
        for(var i = 0; i < layers.length; i++){
            newIn = layers[i].inPoint;
            newOut = layers[i].outPoint;
            newIndx = layers[i].index;
            if(newIn < minIn) {
                minIn = newIn;
            }
            if(newOut > maxOut) {
                maxOut = newOut;
            }
            if(newIndx < zoneLayer.index) {
                zoneLayer.moveBefore(layers[i]);
            }
        }
        zoneLayer.inPoint = minIn;
        zoneLayer.outPoint = maxOut;
    }
    
    app.endUndoGroup();
}

function arrayAverage(arr){
    var sum = 0;
    if (arr.length>0) {
        for(var i=0; i<arr.length; i++) {
            sum += arr[i];
        }
    }

    var numbersCnt = arr.length;
    if (sum>0) {
        var result = (sum / numbersCnt);
    } else {
        result = 0;
    }

    return result;
}
