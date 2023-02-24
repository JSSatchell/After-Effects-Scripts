// JSSatchell 2023

// For use with KBar3 which can be found here: https://aescripts.com/kbar/
// Pass arguments of "video" or "audio" to add fade controls.

var comp = app.project.activeItem;
var layers = comp.selectedLayers;
var button = (typeof kbar !== 'undefined') ? kbar.button : null;
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

if (button) {
    switch(button.argument) {
        case 'video':
            video();
        break;

        case 'audio':
            audio();
        break;
    
        default:
            Window.alert("Argument " + button.argument + " is invalid.");
        break;

    }
} else {
    Window.alert("Please use with KBar.");
}

function video() {
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
         
         layers[i].property("Opacity").expression = 'ddBased = thisLayer.effect("Based On")("Menu").value;    \
         ddInOut = thisLayer.effect("In/Out")("Menu").value; \
         inDurSet = thisLayer.effect("Fade In & Out Duration")("Point").value[0]; \
         outDurSet = thisLayer.effect("Fade In & Out Duration")("Point").value[1];   \
         \
         try {  \
            inMark = thisLayer.marker.key("In");\
         } catch (err) {\
            inMark=x;\
         }\
         \
         try {\
            outMark = thisLayer.marker.key("Out");\
         } catch (err) {\
            outMark=x;\
         }\
         \
         inStart = inPoint;\
         outEnd = outPoint;\
         \
         if (ddBased == 1) {\
            if (inMark.duration > 0) {\
               inStart = inMark.time;\
               inDur = (inMark.time + inMark.duration) - inStart;\
            } else {\
               inDur = inMark.time - inStart;\
            }\
            if (outMark.duration > 0)\
            {\
                outEnd = outMark.time + outMark.duration;\
                outDur = outEnd - outMark.time;	\
            } else {\
                outDur = outEnd - outMark.time;	\
            }\
         } else if (ddBased ==2) {\
            inDur = inDurSet;\
            outDur = outDurSet;\
         }\
         \
         fadeIn = linear(time, inStart, inStart + inDur, 0, value);\
         fadeOut = linear(time, outEnd - outDur, outEnd, value, 0);\
         \
         if (ddInOut == 1) {\
            fadeOut = linear(time, outEnd - outDur, outEnd, 0, value);\
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
}

function audio() {
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
       inMark = thisLayer.marker.key("Audio In");\
       outMark = thisLayer.marker.key("Audio Out");\
    } catch (err) {\
       inMark=0;\
       outMark=0;\
    }\
    \
    inStart = inPoint;\
    outEnd = outPoint; \
    \
    if (ddBased == 1) {\
       if (inMark.duration > 0) {\
          inStart = inMark.time;\
          inDur = inMark.time - inStart;\
       } else {\
          inDur = inMark.time - inStart;\
       }\
       if (outMark.duration > 0 ) {\
          outEnd = outMark.time + outMark.duration;\
          outDur = outEnd-outMark.time;\
       } else {\
          outDur = outEnd - outMark.time;\
       }\
    } else if (ddBased ==2) {\
       inDur = inDurSet;\
       outDur = outDurSet;\
    }\
    \
    fadeIn = linear(time, inStart, inStart + inDur, minVol, value[0]);\
    fadeOut = linear(time, outEnd - outDur, outEnd, value[0], minVol);\
    \
    if (ddInOut == 1) {\
       if (time < (layerDuration/2+inStart)) {\
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
}
