Use shape layers to replace Nulls (zilch), Solids (zone), and Adjustment Layers (zest)

Inspired by:
- Void – https://www.battleaxe.co/void
- No Solids – https://elementsupply.co/products/scripts/nosolids/
- Turbo Layers – https://aescripts.com/turbolayers/

None of the above achieved everything I wanted in one package, so I took it as a scripting challenge to create my own set of tools.

Distinct features:
- The duration of any created layer matches the combined length of the currently selected layers
- zest (Adjustment Layer) always fills comp and stays centered (effectively locked without actually being locked in timeline)
- Option for zone (Solid) to always fill comp
- zone width, height, square, roundness, and color controls

WIP:
- Option to create one zilch (Null) per selected layer
- Option to transfer all transform keyframes from layer to zilch layer

zZz.jsx is the master file that will work with KBar or open a UI panel. The others are headless versions.

KBar arguments for zZz.jsx:
- zilch = New Null Layer
- zone = New Solid Layer
- zest = New Adjustment Layer
- Leave blank to open as a panel
