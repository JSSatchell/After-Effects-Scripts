// JSSatchell 2023

// Sets comp duration to the farthest out point of selected layers, or the farthest out point of all layers if no layers are selected.

var comp = app.project.activeItem;
var layers = comp.selectedLayers;
var allLayers = comp.layers;
var maxOut = 0;

app.beginUndoGroup("Change Comp Duration");

if (layers.length == 0) {
    for (var i=1; i <= allLayers.length; i++) {
        if (allLayers[i].outPoint>maxOut) {
            maxOut = allLayers[i].outPoint;
        }
    }
} else if (layers.length > 0) {
    for (var i=0; i < layers.length; i++) {
        if (layers[i].outPoint>=maxOut) {
            maxOut = layers[i].outPoint;
        }
    }
}

comp.duration = maxOut;

app.endUndoGroup();
