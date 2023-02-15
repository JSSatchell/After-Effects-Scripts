// JSSatchell 2023

// Creates markers to fade the audio in and out of selected layers
// Effect options are created to use the markers or set a custom duration from the layer start/end point

var comp = app.project.activeItem;
var layers = comp.selectedLayers;
var ddBased = [
"Markers",
"In/Out Point"
];
var ddInOut = [
"In & Out",
"In Only",
"Out Only",
"No Fade"
];

app.beginUndoGroup("Fade Audio");
        
for(var i = 0; i < layers.length; i++) {
     var inMrk = layers[i].inPoint + 1;
     var outMrk = layers[i].outPoint - 1;
     var inNme = new MarkerValue("Audio In");
     var outNme = new MarkerValue("Audio Out");
     
     layers[i].marker.setValueAtTime(inMrk, inNme);
     layers[i].marker.setValueAtTime(outMrk, outNme);
     
     ddcBasedOn = layers[i].property("ADBE Effect Parade").addProperty("Dropdown Menu Control");
     var temp = ddcBasedOn.property("Menu").setPropertyParameters(ddBased);
     temp.propertyGroup(1).name = "Audio Fade Based On";
     layers[i].effect("Audio Fade Based On").property("Menu").expression = 'try {\
   inMark = thisLayer.marker.key("Audio In");\
   outMark = thisLayer.marker.key("Audio Out");\
   value\
} catch (err) {\
   2\
}';
     ddcInOut = layers[i].property("ADBE Effect Parade").addProperty("Dropdown Menu Control");
     var temp2 = ddcInOut.property("Menu").setPropertyParameters(ddInOut);
     temp2.propertyGroup(1).name = "Audio In/Out";
     layers[i].Effects.addProperty("Checkbox Control");
     layers[i].effect("Checkbox Control").name = "Symmetrical Audio Fade?";
     layers[i].effect("Symmetrical Audio Fade?").property("Checkbox").setValue(1);
     layers[i].Effects.addProperty("Point Control");  
     layers[i].effect("Point Control").name = "Audio Fade Duration";
     layers[i].effect("Audio Fade Duration").property("Point").setValue([.5,.5]);
     layers[i].effect("Audio Fade Duration").property("Point").expression = 'syncFade = thisLayer.effect("Symmetrical Audio Fade?")("Checkbox").value;\
inVal=value[0];\
if (syncFade==0) {\
   outVal=value[1]\
} else if (syncFade==1) {\
   outVal=inVal\
}\
[inVal,outVal]';
     
     layers[i].property("Audio Levels").expression = 'ddBased = thisLayer.effect("Audio Fade Based On")("Menu").value;\
ddInOut = thisLayer.effect("Audio In/Out")("Menu").value;\
inDurSet = thisLayer.effect("Audio Fade Duration")("Point").value[0];\
outDurSet = thisLayer.effect("Audio Fade Duration")("Point").value[1];\
layerDuration = outPoint - inPoint;\
minVol = -50;\
\
try {\
   inMark = thisLayer.marker.key("Audio In").time - inPoint;\
   outMark = outPoint - thisLayer.marker.key("Audio Out").time;\
} catch (err) {\
   inMark=0;\
   outMark=0;\
}\
\
if (ddBased == 1) {\
   inDur = inMark;\
   outDur = outMark;\
} else if (ddBased ==2) {\
   inDur = inDurSet;\
   outDur = outDurSet;\
}\
\
fadeIn = linear(time, inPoint, inPoint + inDur, minVol, value[0]);\
fadeOut = linear(time, outPoint - outDur, outPoint, value[0], minVol);\
\
if (ddInOut == 1) {\
   if (time < (layerDuration/2+inPoint)) {\
	   [fadeIn,fadeIn]\
   } else {\
	   [fadeOut,fadeOut]\
   }\
} else if (ddInOut == 2) {\
   [fadeIn,fadeIn]\
} else if (ddInOut == 3) {\
   [fadeOut,fadeOut]\
} else if (ddInOut==4) {\
   value\
}';
}

app.endUndoGroup()