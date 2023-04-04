Use shape layers to replace Nulls (zilch), Solids (zone), and Adjustment Layers (zest)

Inspired by:
- Void – https://www.battleaxe.co/void
- No Solids – https://elementsupply.co/products/scripts/nosolids/
- Turbo Layers – https://aescripts.com/turbolayers/

None of the above achieved everything I wanted in one package, so I took it as a scripting challenge to create my own set of tools.

Distinct features:
- The duration of any created layer matches the combined length of the currently selected layers
- Hold Shift to create one zilch (Null) per selected layer
- Hold Alt with one layer selected to transfer all transform keyframes to the zilch layer
- Shift and Alt can be combined to transfer transform controls of each layer to their own zilch layer
- zest (Adjustment Layer) always fills comp and stays centered (effectively locked without actually being locked in timeline)
- Option for zone (Solid) to always fill comp
- zone width, height, square, roundness, and color controls

KBar arguments for zZz.jsx:
- zilch = New Null Layer
- zone = New Solid Layer
- zest = New Adjustment Layer
- Leave blank to open as a panel
