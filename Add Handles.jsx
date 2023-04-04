// JSSatchell 2023

// Adds 1 second to the beginning and end of selected layers, or number passed by user via KBar

var handle = 1;
var button = (typeof kbar !== 'undefined') ? kbar.button : null;

if (button) {
   app.beginUndoGroup("Add Handles");
   try {
      var argNum = parseFloat(button.argument);
      addHandles(argNum);
   } catch (error) {
      addHandles(handle);
   }
   app.endUndoGroup();
} else {
   app.beginUndoGroup("Add Handles");
   addHandles(handle);
   app.endUndoGroup();
}

function addHandles(addTime) {
   var comp = app.project.activeItem;
   var layers = comp.selectedLayers;
   for(var i = 0; i < layers.length; i++) {
      if (layers[i].inPoint>layers[i].outPoint) // Check for reversed layers
         addTime *= -1;

      newIn = layers[i].inPoint - addTime;
      newOut = layers[i].outPoint + addTime;

      layers[i].inPoint = newIn;
      layers[i].outPoint = newOut;
   }
}
