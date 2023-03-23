// JSSatchell 2023

// Instantly converts vector files to shape layers and deletes the original layer
// This simply invokes the "Create Shapes from Vector Layer" command and therefore has the same limitations

var comp = app.project.activeItem;
var layers = comp.selectedLayers;

app.beginUndoGroup("Vector to Shape");

for (var i=0; i < layers.length; i++) {
    name = layers[i].source.name;
    if(name.match(/.*\.ai/i)!=null){
         app.executeCommand(3973);
         layers[i].remove();
    }
}

app.endUndoGroup();
