// JSSatchell 2023

// Adds or subtracts one from numbered layer names

// Should be used only in the composition timeline window with one or more layers selected which are named starting with a two-digit number followed by an underscore.
// If the layer name begins with a number less than 10, it must start with a leading 0 which will be retained when using the script.

// Demonstrated in this video: https://youtu.be/o37TgQ9jIYg

var window = new Window("palette", "Increment Index", undefined);
var increase = window.add("button",undefined,"Increase");
var decrease = window.add("button",undefined,"Decrease");
window.show();

increase.onClick = function() {
        var comp = app.project.activeItem;
        
        var layers = comp.selectedLayers;
        
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

decrease.onClick = function() {
        var comp = app.project.activeItem;
        
        var layers = comp.selectedLayers;
        
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