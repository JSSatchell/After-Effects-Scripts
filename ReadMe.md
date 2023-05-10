This is a collection of scripts I have written or modified that make my personal workflow in After Effects a bit easier.

### eaZy Layers:
Use shape layers to replace Nulls (zilch), Solids (zone), and Adjustment Layers (zest)

Inspired by:
- Void – https://www.battleaxe.co/void
- No Solids – https://elementsupply.co/products/scripts/nosolids/
- Turbo Layers – https://aescripts.com/turbolayers/

None of the above achieved everything I wanted in one package, so I took it as a scripting challenge to create my own set of tools.

Distinct features:
- The duration of any created layer always matches the combined length of the currently selected layers
- zilch (Null)
  - Create one zilch per selected layer
  - Link the opacity of the selected layers to the opacity of the new zilch layer
  - Transfer all transform keyframes to the zilch layer
- zone (Solid)
  - Option to always fill comp
  - Width, height, square, roundness, and color controls
  - Option to place new zone at bottom of selected layers rather than top
- zest (Adjustment Laer)
  - Always fills comp and stays centered (effectively locked without actually being locked in timeline, can disable via checkbox)
  - Option to place new zest at bottom of selected layers rather than top
---

### Fade Layers:
Creates audio/video fade controls based on markers or in/out points for all selected layers

---

### Colored Markers:
Primarily for use with [Labels](https://aescripts.com/labels/), this will add a marker of the selected color to all selected layers, or to the composition if no layer is selected

Also available for KBar, with preset toolbar file included

---

### Adaptive Closed Captions:
Creates a text layer that adapts text to markers and a shape layer that maintains size relative to current text

---

### Comp Length to Contents:
Sets comp duration based on the length of the selected layers, or else all layers in the comp

Compare to the Zack Lovatt script ["Trim Comp to Contents"](https://aescripts.com/trim-to-comp-contents/)

This just gives you options for only modifying the in or out point of the comp
