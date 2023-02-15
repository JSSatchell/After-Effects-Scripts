// JSSatchell 2023

// zest is my version of creating a new Adjustment Layer, or Battle Axe's Variant

// Shamelessly inspired by Battle Axe's awesome Void scripts which can be found here: https://www.battleaxe.co/void
// Really I just missed the feature of Turbo Layers to create Solids and Adjustment Layers that were the same length as the selected layers, so I took it as a scripting challenge to build my own toolkit

var comp = app.project.activeItem;
var layers = comp.selectedLayers;
var allLayers = comp.layers;

app.beginUndoGroup("Add zest");

index=1;
for (var i=1; i < allLayers.length; i++) {
    if (allLayers[i].name.search("zest")>0)
        index++;
}
var zestLayer = comp.layers.addShape();
zestLayer.name = " - zest " + index + " - ";
var zestGroup = zestLayer.property("Contents").addProperty("ADBE Vector Group");
zestGroup.name = "zest";
var zestShape = zestGroup.property("Contents").addProperty("ADBE Vector Shape - Rect");
zestShape.property("Size").setValue([comp.width,comp.height]);
zestLayer.adjustmentLayer = 1;
var zestFill = zestGroup.property("Contents").addProperty("ADBE Vector Graphic - Fill");
zestFill.property("Color").setValue([0,0,0]);
if (app.preferences.havePref("Label Preference Indices Section 5", "Adjustment Label Index", PREFType.PREF_Type_MACHINE_INDEPENDENT) == 1) {
    var adjColor = app.preferences.getPrefAsLong("Label Preference Indices Section 5", "Adjustment Label Index", PREFType.PREF_Type_MACHINE_INDEPENDENT);
} else if (app.preferences.havePref("Label Preference Indices Section 5", "Adjustment Label Index 2", PREFType.PREF_Type_MACHINE_INDEPENDENT) == 1) {
    adjColor = app.preferences.getPrefAsLong("Label Preference Indices Section 5", "Adjustment Label Index 2", PREFType.PREF_Type_MACHINE_INDEPENDENT);
} else {
    adjColor = 1;
}

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

zestLayer.label = adjColor;

app.endUndoGroup();