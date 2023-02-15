// JSSatchell 2023

// Adds 1 second to the beginning and end of selected layers

var comp = app.project.activeItem;
var layers = comp.selectedLayers;
        
app.beginUndoGroup("Add Handles");

for(var i = 0; i < layers.length; i++) {
   addTime = 1;
   newIn = layers[i].inPoint - addTime;
   newOut = layers[i].outPoint + addTime;
   layers[i].inPoint = newIn;
   layers[i].outPoint = newOut;
}

app.endUndoGroup();
