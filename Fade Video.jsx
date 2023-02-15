// JSSatchell Media 2023

// Creates markers to fade the video in and out of selected layers
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

app.beginUndoGroup("Fade Layers");
        
for(var i = 0; i < layers.length; i++) {
     var inMrk = layers[i].inPoint + .5;
     var outMrk = layers[i].outPoint - .5;
     var inNme = new MarkerValue("In");
     var outNme = new MarkerValue("Out");
     
     layers[i].marker.setValueAtTime(inMrk, inNme);
     layers[i].marker.setValueAtTime(outMrk, outNme);
     
     ddcBasedOn = layers[i].property("ADBE Effect Parade").addProperty("Dropdown Menu Control");
     var temp = ddcBasedOn.property("Menu").setPropertyParameters(ddBased);
     temp.propertyGroup(1).name = "Based On";
     layers[i].effect("Based On").property("Menu").expression = 'try {\
   inMark = thisLayer.marker.key("In");\
   outMark = thisLayer.marker.key("Out");\
   value\
} catch (err) {\
   2\
}';
     ddcInOut = layers[i].property("ADBE Effect Parade").addProperty("Dropdown Menu Control");
     var temp2 = ddcInOut.property("Menu").setPropertyParameters(ddInOut);
     temp2.propertyGroup(1).name = "In/Out";
     layers[i].Effects.addProperty("Checkbox Control");
     layers[i].effect("Checkbox Control").name = "Symmetrical Fade?";
     layers[i].effect("Symmetrical Fade?").property("Checkbox").setValue(1);
     layers[i].Effects.addProperty("Point Control");  
     layers[i].effect("Point Control").name = "Fade In & Out Duration";
     layers[i].effect("Fade In & Out Duration").property("Point").setValue([.5,.5]);
     layers[i].effect("Fade In & Out Duration").property("Point").expression = 'syncFade = thisLayer.effect("Symmetrical Fade?")("Checkbox").value;\
inVal=value[0];\
if (syncFade==0) {\
   outVal=value[1]\
} else if (syncFade==1) {\
   outVal=inVal\
}\
[inVal,outVal]';
     
     layers[i].property("Opacity").expression = 'ddBased = thisLayer.effect("Based On")("Menu").value;\
ddInOut = thisLayer.effect("In/Out")("Menu").value;\
inDurSet = thisLayer.effect("Fade In & Out Duration")("Point").value[0];\
outDurSet = thisLayer.effect("Fade In & Out Duration")("Point").value[1];\
\
try {\
   inMark = thisLayer.marker.key("In").time - inPoint;\
   outMark = outPoint - thisLayer.marker.key("Out").time;\
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
fadeIn = linear(time, inPoint, inPoint + inDur, 0, value);\
fadeOut = linear(time, outPoint - outDur, outPoint, value, 0);\
\
if (ddInOut == 1) {\
   fadeOut = linear(time, outPoint - outDur, outPoint, 0, value);\
   fadeIn - fadeOut\
} else if (ddInOut == 2) {\
   fadeIn\
} else if (ddInOut == 3) {\
   fadeOut\
} else if (ddInOut==4) {\
   value\
}';
}

app.endUndoGroup()