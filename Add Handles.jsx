// JSSatchell 2023

// Adds 1 second to the beginning and end of selected layers, or number passed by user via KBar

var button = (typeof kbar !== 'undefined') ? kbar.button : null;

if (button) {
   try {
      var argNum = parseInt(button.argument);
      addHandles(argNum);
   } catch (error) {
      addHandles(1);
   }
} else {
   addHandles(1);
}

function addHandles(addTime) {
   var comp = app.project.activeItem;
   var layers = comp.selectedLayers;
   app.beginUndoGroup("Add Handles");
   for(var i = 0; i < layers.length; i++) {
      newIn = layers[i].inPoint - addTime;
      newOut = layers[i].outPoint + addTime;
      layers[i].inPoint = newIn;
      layers[i].outPoint = newOut;
   }
   app.endUndoGroup();
}
