// JSSatchell 2023

// For use with KBar3 which can be found here: https://aescripts.com/kbar/
// Shamelessly inspired by Battle Axe's awesome Void scripts which can be found here: https://www.battleaxe.co/void
// Really I just missed the feature of Turbo Layers to create Solids and Adjustment Layers that were the same length as the selected layers, so I took it as a scripting challenge to build my own toolkit

// Arguments:
//   zilch = New Null Layer (a la Battle Axe's Void)
//   zone = New Solid Layer (a la Battle Axe's Volume)
//   zest = New Adjustment Layer (a la Battle Axe's Variant)

var comp = app.project.activeItem;
var layers = comp.selectedLayers;
var allLayers = comp.layers;
var button = (typeof kbar !== 'undefined') ? kbar.button : null;
var pseudoEffectData = {
    name: "zlch Expansion",
    matchName: "Pseudo/PEM zlch Expansion",
    binary: "RIFX\x00\x00\n\nFaFXhead\x00\x00\x00\x10\x00\x00\x00\x03\x00\x00\x00D\x00\x00\x00\x01\x01\x00\x00\x00LIST\x00\x00\t\u00E6bescbeso\x00\x00\x008\x00\x00\x00\x01\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00]\u00A8\x00\x1D\u00F8R\x00\x00\x00\x00\x00d\x00d\x00d\x00d?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00FF\u00FF\u00FF\u00FFLIST\x00\x00\x00\u00ACtdsptdot\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdpl\x00\x00\x00\x04\x00\x00\x00\x02LIST\x00\x00\x00@tdsitdix\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdmn\x00\x00\x00(ADBE Effect Parade\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00@tdsitdix\x00\x00\x00\x04\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/PEM zlch Expansion\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdsn\x00\x00\x00\x10zilch Expansion\x00LIST\x00\x00\x00dtdsptdot\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdpl\x00\x00\x00\x04\x00\x00\x00\x01LIST\x00\x00\x00@tdsitdix\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdmn\x00\x00\x00(ADBE End of path sentinel\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\bbsspcfnam\x00\x00\x000\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x03JparTparn\x00\x00\x00\x04\x00\x00\x00\x04tdmn\x00\x00\x00(Pseudo/PEM zlch Expansion-0000\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x02\x00\x00\x00\x00\x00\x00\x00\x0E\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00FF\u00FF\u00FF\u00FF\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/PEM zlch Expansion-0001\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04Square\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pdnm\x00\x00\x00\x01\x00\x00tdmn\x00\x00\x00(Pseudo/PEM zlch Expansion-0002\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\nWidth\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00C1 \x00\x00CH\x00\x00\u00C1 \x00\x00A \x00\x00\x00\x00\x00\x00\x00\x02\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/PEM zlch Expansion-0003\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\nHeight\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00C1 \x00\x00CH\x00\x00\u00C1 \x00\x00A \x00\x00\x00\x00\x00\x00\x00\x02\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x04\u00CCtdgptdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x10zilch Expansion\x00tdmn\x00\x00\x00(Pseudo/PEM zlch Expansion-0000\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00DAtdbstdsb\x00\x00\x00\x04\x00\x00\x00\x03tdsn\x00\x00\x00\x01\x00\x00tdb4\x00\x00\x00|\u00DB\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\x00\x00\x00\x02X?\x1A6\u00E2\u00EB\x1CC-?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04\x04\u00C0\u00C0\u00C0\u00FF\u00C0\u00C0\u00C0\x00\x00\x00\x00\u0080\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdpi\x00\x00\x00\x04\x00\x00\x00\x0Etdmn\x00\x00\x00(Pseudo/PEM zlch Expansion-0001\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00D4tdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x07Square\x00\x00tdb4\x00\x00\x00|\u00DB\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\x04\x00\x00]\u00A8?\x1A6\u00E2\u00EB\x1CC-?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04\x04\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/PEM zlch Expansion-0002\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00F2tdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x06Width\x00tdb4\x00\x00\x00|\u00BD\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\u00FF\x00\x00]\u00A8\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdum\x00\x00\x00\b\u00C0$\x00\x00\x00\x00\x00\x00tduM\x00\x00\x00\b@$\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/PEM zlch Expansion-0003\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00F4tdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x07Height\x00\x00tdb4\x00\x00\x00|\u00BD\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\u00FF\x00\x00]\u00A8\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdum\x00\x00\x00\b\u00C0$\x00\x00\x00\x00\x00\x00tduM\x00\x00\x00\b@$\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(ADBE Group End\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00",
};


if (button) {
    switch(button.argument) {
        case 'zilch':
            zilch();
        break;

        case 'zest':
            zest();
        break;

        case 'zone':
            zone();
        break;
    
        default:
            Window.alert("Argument " + button.argument + " is invalid.");
        break;

    }
} else {
    Window.alert("Please use with KBar.");
}

function zilch() {
    app.beginUndoGroup("Add zilch");
    index=1;
    for (var i=1; i <= allLayers.length; i++) {
        if (allLayers[i].name.search("z lch")>0)
            index++;
    }
    var zilchLayer = comp.layers.addShape();
    zilchLayer.name = "> z lch " + index + " <";
    zilchLayer.guideLayer = 1;
    if (app.preferences.havePref("Label Preference Indices Section 5", "Null Label Index", PREFType.PREF_Type_MACHINE_INDEPENDENT) == 1) {
        var nullColor = app.preferences.getPrefAsLong("Label Preference Indices Section 5", "Null Label Index", PREFType.PREF_Type_MACHINE_INDEPENDENT);
    } else if (app.preferences.havePref("Label Preference Indices Section 5", "Null Label Index 2", PREFType.PREF_Type_MACHINE_INDEPENDENT) == 1) {
        nullColor = app.preferences.getPrefAsLong("Label Preference Indices Section 5", "Null Label Index 2", PREFType.PREF_Type_MACHINE_INDEPENDENT);
    } else {
        nullColor = 9;
    }
    zilchLayer.label = nullColor;

    //zilchLayer.property("Opacity").setValue("50");

    applyPseudoEffect(pseudoEffectData, zilchLayer.property("ADBE Effect Parade"));
    zilchLayer.effect("").name = "z lch Expansion";

    var zilchGroup = zilchLayer.property("Contents").addProperty("ADBE Vector Group");
    zilchGroup.name = "z lch shape";
    //zilchGroup.property("Transform").property("Opacity").setValue(50);
    var zilchShape = zilchGroup.property("Contents").addProperty("ADBE Vector Shape - Rect");
    zilchShape.property("Size").setValue([100,100]);
    zilchShape.property("Size").expression = 'w = thisLayer.effect("z lch Expansion")("Width").value*10;\
h = thisLayer.effect("z lch Expansion")("Height").value*10;\
s = thisLayer.effect("z lch Expansion")("Square").value;\
nW = value[0]+w\
nH = value[1]+h\
if(s==1) { [nH = nW] } else { nH = value[1]+h }\
[nW,nH]';
    var zilchStroke = zilchGroup.property("Contents").addProperty("ADBE Vector Graphic - Stroke");
    var strokeColor = zilchStroke.property("Color").setValue([255,0,200]);
    zilchStroke.property("Stroke Width").setValue(2);
    zilchStroke.property("Stroke Width").expression = "// via battleaxe.co/void\
\
value / Math.max(length(toComp([0,0]), toComp([0.7071,0.7071])), 0.001)";
    
    if(layers.length > 0) {
        var newIn;
        var minIn = zilchLayer.outPoint;
        var newOut;
        var maxOut = 0;
        var topIndx = layers.length;
        var newIndx = layers.length;
        xPosArray = [];
        yPosArray = [];
        zPosArray = [];
        zilchLayer.moveToEnd();
        
        for(var i = 0; i < layers.length; i++){
            newIn = layers[i].inPoint;
            newOut = layers[i].outPoint;
            newIndx = layers[i].index;
            t = comp.time;
            pos = layers[i].transform.position.valueAtTime(t,1);
            if(newIn < minIn) {
                minIn = newIn;
            }
            if(newOut > maxOut) {
                maxOut = newOut;
            }
            if(newIndx < zilchLayer.index) {
                zilchLayer.moveBefore(layers[i]);
            }
            xPosArray.push(pos[0]);
            yPosArray.push(pos[1]);
            zPosArray.push(pos[2]);
        }
    
        zilchLayer.inPoint = minIn;
        zilchLayer.outPoint = maxOut;
    
        avgX = arrayAverage(xPosArray);
        avgY = arrayAverage(yPosArray);
        avgZ = arrayAverage(zPosArray);
    
        zilchLayer.transform.position.setValue([avgX,avgY,avgZ]);
        for(var i = 0; i < layers.length; i++){
            if (layers[i].parent == "" || layers.length > 1) {
                layers[i].parent = zilchLayer;
            } else if (layers.length == 1) {
                zilchLayer.parent = layers[i].parent;
                layers[i].parent = zilchLayer;
            }
        }
    }

    zilchStroke.property("Dashes").addProperty("ADBE Vector Stroke Dash 1").setValue(2);
    zilchStroke.property("Dashes").addProperty("ADBE Vector Stroke Gap 1").setValue(2);
    zilchStroke.property("Dashes").addProperty("ADBE Vector Stroke Offset").setValue(4);

    // Collapse properties
    app.executeCommand(2771);
    app.executeCommand(2771);
    
    app.endUndoGroup();
}

function zest() {
    app.beginUndoGroup("Add zest");

    index=1;
    for (var i=1; i <= allLayers.length; i++) {
        if (allLayers[i].name.search("zëst")>0)
            index++;
    }
    var zestLayer = comp.layers.addShape();
    zestLayer.name = "÷ zëst " + index + " ÷";
    var zestGroup = zestLayer.property("Contents").addProperty("ADBE Vector Group");
    zestGroup.name = "zëst shape";
    zestLayer.adjustmentLayer = 1;
    if (app.preferences.havePref("Label Preference Indices Section 5", "Adjustment Label Index", PREFType.PREF_Type_MACHINE_INDEPENDENT) == 1) {
        var adjColor = app.preferences.getPrefAsLong("Label Preference Indices Section 5", "Adjustment Label Index", PREFType.PREF_Type_MACHINE_INDEPENDENT);
    } else if (app.preferences.havePref("Label Preference Indices Section 5", "Adjustment Label Index 2", PREFType.PREF_Type_MACHINE_INDEPENDENT) == 1) {
        adjColor = app.preferences.getPrefAsLong("Label Preference Indices Section 5", "Adjustment Label Index 2", PREFType.PREF_Type_MACHINE_INDEPENDENT);
    } else {
        adjColor = 1;
    }
    zestLayer.label = adjColor;
    
    var zestShape = zestGroup.property("Contents").addProperty("ADBE Vector Shape - Rect");
    zestShape.property("Size").setValue([comp.width,comp.height]);
    var zestFill = zestGroup.property("Contents").addProperty("ADBE Vector Graphic - Fill");
    zestFill.property("Color").setValue([0,0,0]);
    
    if(layers.length > 0) {
        var newIn;
        var minIn = zestLayer.outPoint;
        var newOut;
        var maxOut = 0;
        var topIndx = layers.length;
        var newIndx = layers.length;
        zestLayer.moveToEnd();
        
        for(var i = 0; i < layers.length; i++){
            newIn = layers[i].inPoint;
            newOut = layers[i].outPoint;
            newIndx = layers[i].index;
            if(newIn < minIn) {
                minIn = newIn;
            }
            if(newOut > maxOut) {
                maxOut = newOut;
            }
            if(newIndx < zestLayer.index) {
                zestLayer.moveBefore(layers[i]);
            }
        }
        zestLayer.inPoint = minIn;
        zestLayer.outPoint = maxOut;
    }
    
    app.endUndoGroup();
}

function zone() {
    app.beginUndoGroup("Add zone");

    index=1;
    for (var i=1; i <= allLayers.length; i++) {
        if (allLayers[i].name.search("zøne")>0)
            index++;
    }
    var zoneLayer = comp.layers.addShape();
    zoneLayer.name = "¤ zøne " + index + " ¤";
    var zoneGroup = zoneLayer.property("Contents").addProperty("ADBE Vector Group");
    zoneGroup.name = "zøne shape";
    if (app.preferences.havePref("Label Preference Indices Section 5", "Solid Label Index", PREFType.PREF_Type_MACHINE_INDEPENDENT) == 1) {
        var solidColor = app.preferences.getPrefAsLong("Label Preference Indices Section 5", "Solid Label Index", PREFType.PREF_Type_MACHINE_INDEPENDENT);
    } else if (app.preferences.havePref("Label Preference Indices Section 5", "Solid Label Index 2", PREFType.PREF_Type_MACHINE_INDEPENDENT) == 1) {
        solidColor = app.preferences.getPrefAsLong("Label Preference Indices Section 5", "Solid Label Index 2", PREFType.PREF_Type_MACHINE_INDEPENDENT);
    } else {
        solidColor = 11;
    }
    zoneLayer.label = solidColor;
    
    var zoneShape = zoneGroup.property("Contents").addProperty("ADBE Vector Shape - Rect");
    zoneShape.property("Size").setValue([comp.width,comp.height]);
    var zoneFill = zoneGroup.property("Contents").addProperty("ADBE Vector Graphic - Fill");
    zoneFill.property("Color").setValue([0,0,0]);
    
    if(layers.length > 0) {
        var newIn;
        var minIn = zoneLayer.outPoint;
        var newOut;
        var maxOut = 0;
        var topIndx = layers.length;
        var newIndx = layers.length;
        zoneLayer.moveToEnd();
        
        for(var i = 0; i < layers.length; i++){
            newIn = layers[i].inPoint;
            newOut = layers[i].outPoint;
            newIndx = layers[i].index;
            if(newIn < minIn) {
                minIn = newIn;
            }
            if(newOut > maxOut) {
                maxOut = newOut;
            }
            if(newIndx < zoneLayer.index) {
                zoneLayer.moveBefore(layers[i]);
            }
        }
        zoneLayer.inPoint = minIn;
        zoneLayer.outPoint = maxOut;
    }
    
    app.endUndoGroup();
}

function arrayAverage(arr){
    var sum = 0;
    if (arr.length>0) {
        for(var i=0; i<arr.length; i++) {
            sum += arr[i];
        }
    }

    var numbersCnt = arr.length;
    if (sum>0) {
        var result = (sum / numbersCnt);
    } else {
        result = 0;
    }

    return result;
}

function applyPseudoEffect(pseudoEffectData, effectsProp) {
    var pseudoEffect,
        ffxFile,
        writeFile = function (pathToFile, content, encoding) {
            var fileObject = new File(pathToFile);
            fileObject.encoding = encoding || "utf-8";
            fileObject.open("w");
            fileObject.write(content);
            fileObject.close();
            return fileObject;
        },
        makePseudoEffectLive = function (ffxFile) {
            var tempComp, tempLayer;
            tempComp = app.project.items.addComp("tempComp", 100, 100, 1, 1, 24);
            tempLayer = tempComp.layers.addShape();
            tempLayer.applyPreset(ffxFile);
            tempComp.remove();
        };

    if (!effectsProp.canAddProperty(pseudoEffectData.matchName)) {
        ffxFile = writeFile(Folder.desktop.fsName + "/" + pseudoEffectData.name + ".ffx", pseudoEffectData.binary, "BINARY");
        makePseudoEffectLive(ffxFile);
    }

    pseudoEffect = effectsProp.addProperty(pseudoEffectData.matchName);
    return pseudoEffect;
}
