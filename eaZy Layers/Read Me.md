Use shape layers to replace Nulls (zilch), Solids (zone), and Adjustment Layers (zest)

Inspired by:
- Void – https://www.battleaxe.co/void
- No Solids – https://elementsupply.co/products/scripts/nosolids/
- Turbo Layers – https://aescripts.com/turbolayers/

None of the above achieved everything I wanted in one package, so I took it as a scripting challenge to create my own set of tools.

Distinct features:
- The duration of any created layer always matches the combined length of the currently selected layers
- zilch (Null)
  - Hold `Shift` to create one zilch per selected layer
  - Hold `Ctrl` to link the opacity of the selected layers to the opacity of the new zilch layer
  - Hold `Alt` with one layer selected to transfer all transform keyframes to the zilch layer
  - `Shift`, `ALt`, and `Ctrl` can be used in any combination
- zone (Solid)
  - Option to always fill comp
  - Width, height, square, roundness, and color controls
  - Hold `Ctrl` to place new zone at bottom of selected layers rather than top
- zest (Adjustment Layer)
  - Always fills comp and stays centered (effectively locked without actually being locked in timeline, can disable via checkbox)
  - Hold `Ctrl` to place new zest at bottom of selected layers rather than top

KBar arguments:
- zilch = New Null Layer
- zone = New Solid Layer
- zest = New Adjustment Layer
- Leave blank to open as a panel
