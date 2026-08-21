// JSSatchell 2026

// Crops a number of seconds from the start and end of a layer and marks the point where the new in/out points are
// Use the "handle" variable to set the number of seconds or pass a number argument via KBar

var handle = 1;
var button = (typeof kbar !== 'undefined') ? kbar.button : null;

if (button) {
   app.beginUndoGroup("Crop Handles");
   try {
      var argNum = parseFloat(button.argument);
      cropHandles(argNum);
   } catch (error) {
      cropHandles(handle);
   }
   app.endUndoGroup();
} else {
   app.beginUndoGroup("Add Handles");
   cropHandles(handle);
   app.endUndoGroup();
}

function cropHandles(atTime) {
   var comp = app.project.activeItem;
   var layers = comp.selectedLayers;
   for(var i = 0; i < layers.length; i++) {
         var newIn = layers[i].inPoint;
         var newOut = layers[i].outPoint;
         if (newIn>newOut) { // Check for reversed layers
            var flip = newOut;
            newOut = newIn;
            newIn = flip;
            atTime *= -1;
         }
         var head = newIn + atTime;
         var tail = newOut - atTime;
         var inMrk = new MarkerValue("");
         inMrk.label = 10;
         var outMrk = new MarkerValue("");
         outMrk.label = 4;
         
         layers[i].marker.setValueAtTime(head, inMrk);
         layers[i].marker.setValueAtTime(tail, outMrk);
         layers[i].inPoint = head;
         layers[i].outPoint = tail;
   }
}
