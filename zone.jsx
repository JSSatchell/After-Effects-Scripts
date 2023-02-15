// JSSatchell 2023

// zone is my version of creating a new Solid, or Battle Axe's Volume

// Shamelessly inspired by Battle Axe's awesome Void scripts which can be found here: https://www.battleaxe.co/void
// Really I just missed the feature of Turbo Layers to create Solids and Adjustment Layers that were the same length as the selected layers, so I took it as a scripting challenge to build my own toolkit

var comp = app.project.activeItem;
var layers = comp.selectedLayers;
var allLayers = comp.layers;

app.beginUndoGroup("Add zone");

index=1;
for (var i=1; i < allLayers.length; i++) {
    if (allLayers[i].name.search("zone")>0)
        index++;
}
var zoneLayer = comp.layers.addShape();
zoneLayer.name = " - zone " + index + " - ";
var zoneGroup = zoneLayer.property("Contents").addProperty("ADBE Vector Group");
zoneGroup.name = "zone";
var zoneShape = zoneGroup.property("Contents").addProperty("ADBE Vector Shape - Rect");
zoneShape.property("Size").setValue([comp.width,comp.height]);
var zoneFill = zoneGroup.property("Contents").addProperty("ADBE Vector Graphic - Fill");
zoneFill.property("Color").setValue([0,0,0]);
if (app.preferences.havePref("Label Preference Indices Section 5", "Solid Label Index", PREFType.PREF_Type_MACHINE_INDEPENDENT) == 1) {
    var solidColor = app.preferences.getPrefAsLong("Label Preference Indices Section 5", "Solid Label Index", PREFType.PREF_Type_MACHINE_INDEPENDENT);
} else if (app.preferences.havePref("Label Preference Indices Section 5", "Solid Label Index 2", PREFType.PREF_Type_MACHINE_INDEPENDENT) == 1) {
    solidColor = app.preferences.getPrefAsLong("Label Preference Indices Section 5", "Solid Label Index 2", PREFType.PREF_Type_MACHINE_INDEPENDENT);
} else {
    solidColor = 11;
}

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

zoneLayer.label = solidColor;

app.endUndoGroup();
