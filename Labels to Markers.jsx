// JSSatchell 2023

// For use as a "Snippet" with Labels 4 which can be found here: https://aescripts.com/labels/

// This will add a marker of the selected color to all selected layers, or to the composition if no layer is selected

app.beginUndoGroup ("Add Marker");

var comp = app.project.activeItem;
var layers = comp.selectedLayers;
var m = new MarkerValue("");
m.label = Labels.index;
if (layers.length > 0) {
    for(var i = 0; i < layers.length; i++) {
        var t = layers[i].time;
        layers[i].property("Marker").setValueAtTime(t, m);
    }
} else {
    var t = comp.time;
    comp.markerProperty.setValueAtTime(t, m);
}

app.endUndoGroup ();