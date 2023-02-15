// JSSatchell 2023

// zilch is my version of creating a new Null, or Battle Axe's Void

// Shamelessly inspired by Battle Axe's awesome Void scripts which can be found here: https://www.battleaxe.co/void
// Really I just missed the feature of Turbo Layers to create Solids and Adjustment Layers that were the same length as the selected layers, so I took it as a scripting challenge to build my own toolkit

var comp = app.project.activeItem;
var layers = comp.selectedLayers;
var allLayers = comp.layers;

app.beginUndoGroup("Add zilch");

index=1;
for (var i=1; i < allLayers.length; i++) {
    if (allLayers[i].name.search("zilch")>0)
        index++;
}
var zilchLayer = comp.layers.addShape();
zilchLayer.guideLayer = 1;
zilchLayer.name = " - zilch " + index + " - ";
var zilchGroup = zilchLayer.property("Contents").addProperty("ADBE Vector Group");
zilchGroup.name = "zilch";
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


if (app.preferences.havePref("Label Preference Indices Section 5", "Null Label Index", PREFType.PREF_Type_MACHINE_INDEPENDENT) == 1) {
    var nullColor = app.preferences.getPrefAsLong("Label Preference Indices Section 5", "Null Label Index", PREFType.PREF_Type_MACHINE_INDEPENDENT);
} else if (app.preferences.havePref("Label Preference Indices Section 5", "Null Label Index 2", PREFType.PREF_Type_MACHINE_INDEPENDENT) == 1) {
    nullColor = app.preferences.getPrefAsLong("Label Preference Indices Section 5", "Null Label Index 2", PREFType.PREF_Type_MACHINE_INDEPENDENT);
} else {
    nullColor = 9;
}

if(layers.length > 0) {
    var newIn;
    var minIn = zilchLayer.outPoint;
    var newOut;
    var maxOut = 0;
    var topIndx = layers.length;
    var newIndx = layers.length;
    zilchLayer.moveToEnd();
    
    for(var i = 0; i < layers.length; i++){
        xPosArray = [];
        yPosArray = [];
        zPosArray = [];
        newIn = layers[i].inPoint;
        newOut = layers[i].outPoint;
        newIndx = layers[i].index;
        thisX = layers[i].property("Transform").property("ADBE Position_0");
        thisY = layers[i].property("Transform").property("ADBE Position_1");
        thisZ = layers[i].property("Transform").property("ADBE Position_2");
        if(newIn < minIn) {
            minIn = newIn;
        }
        if(newOut > maxOut) {
            maxOut = newOut;
        }
        if(newIndx < zilchLayer.index) {
            zilchLayer.moveBefore(layers[i]);
        }
        if (layers[i].parent == "") {
            layers[i].parent = zilchLayer;
        } else {
            zilchLayer.parent = layers[i].parent;
            layers[i].parent = zilchLayer;
        }
    }
    zilchLayer.inPoint = minIn;
    zilchLayer.outPoint = maxOut;
}

zilchLayer.label = nullColor;

app.endUndoGroup();
