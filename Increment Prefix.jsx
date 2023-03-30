// JSSatchell 2023

// Adds or subtracts one from numbered layer names

// KBar arguments:
//   - increment
//   - decrement

// Demonstrated in this video: https://youtu.be/o37TgQ9jIYg

var kButton = (typeof kbar !== 'undefined') ? kbar.button : null;

if (kButton) {
    switch(kButton.argument) {
        case 'increment':
            app.beginUndoGroup('Increment Prefix');
            increment();
            app.endUndoGroup();
        break;

        case 'decrement':
            app.beginUndoGroup('Decrement Prefix');
            decrement();
            app.endUndoGroup();
        break;

        case '':
            buildPanel();
        break;
    
        default:
            Window.alert("Argument " + kButton.argument + " is invalid.");
        break;
    }
} else {
    buildPanel();
}

function buildPanel() {
    var window = new Window("palette", "Increment Index", undefined);
    var increase = window.add("button",undefined,"Increase");
    var decrease = window.add("button",undefined,"Decrease");
    window.show();

    increase.onClick = function() {
        var comp = app.project.activeItem;
        var layers = comp.selectedLayers;
        app.beginUndoGroup('Increment Prefix');
        increment();
        app.endUndoGroup();
    }

    decrease.onClick = function() {
        var comp = app.project.activeItem;
        var layers = comp.selectedLayers;
        app.beginUndoGroup('Decrement Prefix');
        decrement();
        app.endUndoGroup();
    }
}

function increment() {
    for(var i = 0; i < layers.length; i++) {
        var prefix = layers[i].name.split("_")[0];
        var namePostPrefix = layers[i].name.substring(2);
        var newPrefix = parseInt(prefix, 10) + 1;
        if (newPrefix < 10) {
            layers[i].name = "0" + newPrefix + namePostPrefix;
            } else {
                layers[i].name = newPrefix + namePostPrefix;
                }
    }
}

function decrement() {
    for(var i = 0; i < layers.length; i++) {
        var prefix = layers[i].name.split("_")[0];
        var namePostPrefix = layers[i].name.substring(2);
        var newPrefix = parseInt(prefix, 10) - 1;
        if (newPrefix < 1) {
            layers[i].name = prefix + namePostPrefix;
            } else if (newPrefix < 10) {
                layers[i].name = "0" + newPrefix + namePostPrefix;
                } else {
                    layers[i].name = newPrefix + namePostPrefix;
                    }
    }
}
