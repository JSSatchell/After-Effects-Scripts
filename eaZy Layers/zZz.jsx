/*********************************************
JSSatchell 2023

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

*********************************************/

var kButton = (typeof kbar !== 'undefined') ? kbar.button : null;

var zlchExpansion = {
    name: "zlch Expansion",
    matchName: "Pseudo/PEM zlch Expansion",
    binary: "RIFX\x00\x00\n\nFaFXhead\x00\x00\x00\x10\x00\x00\x00\x03\x00\x00\x00D\x00\x00\x00\x01\x01\x00\x00\x00LIST\x00\x00\t\u00E6bescbeso\x00\x00\x008\x00\x00\x00\x01\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00]\u00A8\x00\x1D\u00F8R\x00\x00\x00\x00\x00d\x00d\x00d\x00d?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00FF\u00FF\u00FF\u00FFLIST\x00\x00\x00\u00ACtdsptdot\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdpl\x00\x00\x00\x04\x00\x00\x00\x02LIST\x00\x00\x00@tdsitdix\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdmn\x00\x00\x00(ADBE Effect Parade\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00@tdsitdix\x00\x00\x00\x04\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/PEM zlch Expansion\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdsn\x00\x00\x00\x10zilch Expansion\x00LIST\x00\x00\x00dtdsptdot\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdpl\x00\x00\x00\x04\x00\x00\x00\x01LIST\x00\x00\x00@tdsitdix\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdmn\x00\x00\x00(ADBE End of path sentinel\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\bbsspcfnam\x00\x00\x000\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x03JparTparn\x00\x00\x00\x04\x00\x00\x00\x04tdmn\x00\x00\x00(Pseudo/PEM zlch Expansion-0000\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x02\x00\x00\x00\x00\x00\x00\x00\x0E\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00FF\u00FF\u00FF\u00FF\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/PEM zlch Expansion-0001\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04Square\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pdnm\x00\x00\x00\x01\x00\x00tdmn\x00\x00\x00(Pseudo/PEM zlch Expansion-0002\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\nWidth\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00C1 \x00\x00CH\x00\x00\u00C1 \x00\x00A \x00\x00\x00\x00\x00\x00\x00\x02\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/PEM zlch Expansion-0003\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\nHeight\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00C1 \x00\x00CH\x00\x00\u00C1 \x00\x00A \x00\x00\x00\x00\x00\x00\x00\x02\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x04\u00CCtdgptdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x10zilch Expansion\x00tdmn\x00\x00\x00(Pseudo/PEM zlch Expansion-0000\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00DAtdbstdsb\x00\x00\x00\x04\x00\x00\x00\x03tdsn\x00\x00\x00\x01\x00\x00tdb4\x00\x00\x00|\u00DB\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\x00\x00\x00\x02X?\x1A6\u00E2\u00EB\x1CC-?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04\x04\u00C0\u00C0\u00C0\u00FF\u00C0\u00C0\u00C0\x00\x00\x00\x00\u0080\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdpi\x00\x00\x00\x04\x00\x00\x00\x0Etdmn\x00\x00\x00(Pseudo/PEM zlch Expansion-0001\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00D4tdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x07Square\x00\x00tdb4\x00\x00\x00|\u00DB\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\x04\x00\x00]\u00A8?\x1A6\u00E2\u00EB\x1CC-?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04\x04\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/PEM zlch Expansion-0002\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00F2tdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x06Width\x00tdb4\x00\x00\x00|\u00BD\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\u00FF\x00\x00]\u00A8\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdum\x00\x00\x00\b\u00C0$\x00\x00\x00\x00\x00\x00tduM\x00\x00\x00\b@$\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/PEM zlch Expansion-0003\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00F4tdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x07Height\x00\x00tdb4\x00\x00\x00|\u00BD\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\u00FF\x00\x00]\u00A8\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdum\x00\x00\x00\b\u00C0$\x00\x00\x00\x00\x00\x00tduM\x00\x00\x00\b@$\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(ADBE Group End\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00",
};

var zoneControl = {
    name: "zone Controls",
    matchName: "Pseudo/PEM zone Controls",
    binary: "RIFX\x00\x00\x0F\u00F2FaFXhead\x00\x00\x00\x10\x00\x00\x00\x03\x00\x00\x00D\x00\x00\x00\x01\x01\x00\x00\x00LIST\x00\x00\x0F\u00CEbescbeso\x00\x00\x008\x00\x00\x00\x01\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00]\u00A8\x00\x1D\u00F8R\x00\x00\x00\x00\x00d\x00d\x00d\x00d?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00FF\u00FF\u00FF\u00FFLIST\x00\x00\x00\u00ACtdsptdot\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdpl\x00\x00\x00\x04\x00\x00\x00\x02LIST\x00\x00\x00@tdsitdix\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdmn\x00\x00\x00(ADBE Effect Parade\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00@tdsitdix\x00\x00\x00\x04\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/PEM zone Controls\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdsn\x00\x00\x00\x0Ezone Controls\x00LIST\x00\x00\x00dtdsptdot\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdpl\x00\x00\x00\x04\x00\x00\x00\x01LIST\x00\x00\x00@tdsitdix\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdmn\x00\x00\x00(ADBE End of path sentinel\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x0ELsspcfnam\x00\x00\x000\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x05\u00B8parTparn\x00\x00\x00\x04\x00\x00\x00\x07tdmn\x00\x00\x00(Pseudo/PEM zone Controls-0000\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x02\x00\x00\x00\x00\x00\x00\x00\x0E\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00FF\u00FF\u00FF\u00FF\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/PEM zone Controls-0001\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x05Color\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00FF\u00FF\u00FF\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/PEM zone Controls-0002\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04Comp Size\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pdnm\x00\x00\x00\x01\x00\x00tdmn\x00\x00\x00(Pseudo/PEM zone Controls-0003\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\nWidth\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00F\x1C@\x00\x00\x00\x00\x00E\u009C@\x00\x00\x00\x00\x00\x00\x02\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/PEM zone Controls-0004\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\nHeight\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00F\x1C@\x00\x00\x00\x00\x00E\u009C@\x00\x00\x00\x00\x00\x00\x02\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/PEM zone Controls-0005\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04Square\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pdnm\x00\x00\x00\x01\x00\x00tdmn\x00\x00\x00(Pseudo/PEM zone Controls-0006\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\nRoundness\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00B\u00C8\x00\x00\x00\x00\x00\x00B\u00C8\x00\x00\x00\x00\x00\x00\x00\x02\x00\x01\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\bHtdgptdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x0Ezone Controls\x00tdmn\x00\x00\x00(Pseudo/PEM zone Controls-0000\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00DAtdbstdsb\x00\x00\x00\x04\x00\x00\x00\x03tdsn\x00\x00\x00\x01\x00\x00tdb4\x00\x00\x00|\u00DB\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\x00\x00\x00\x02X?\x1A6\u00E2\u00EB\x1CC-?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04\x04\u00C0\u00C0\u00C0\u00FF\u00C0\u00C0\u00C0\x00\x00\x00\x00\u0080\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdpi\x00\x00\x00\x04\x00\x00\x00\x0Etdmn\x00\x00\x00(Pseudo/PEM zone Controls-0001\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x01\ntdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x06Color\x00tdb4\x00\x00\x00|\u00BD\u0099\x00\x04\x00\x07\x00\x01\x00\x02\u00FF\u00FF\x00\x00]\u00A8\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00`@o\u00E0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/PEM zone Controls-0002\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00D6tdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\nComp Size\x00tdb4\x00\x00\x00|\u00DB\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\x04\x00\x00]\u00A8?\x1A6\u00E2\u00EB\x1CC-?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04\x04\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/PEM zone Controls-0003\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00F2tdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x06Width\x00tdb4\x00\x00\x00|\u00BD\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\u00FF\x00\x00]\u00A8\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdum\x00\x00\x00\b\x00\x00\x00\x00\x00\x00\x00\x00tduM\x00\x00\x00\b@\u00B3\u0088\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/PEM zone Controls-0004\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00F4tdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x07Height\x00\x00tdb4\x00\x00\x00|\u00BD\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\u00FF\x00\x00]\u00A8\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdum\x00\x00\x00\b\x00\x00\x00\x00\x00\x00\x00\x00tduM\x00\x00\x00\b@\u00B3\u0088\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/PEM zone Controls-0005\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00D4tdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x07Square\x00\x00tdb4\x00\x00\x00|\u00DB\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\x04\x00\x00]\u00A8?\x1A6\u00E2\u00EB\x1CC-?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04\x04\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/PEM zone Controls-0006\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00F6tdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\nRoundness\x00tdb4\x00\x00\x00|\u00BD\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\u00FF\x00\x00]\u00A8\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdum\x00\x00\x00\b\x00\x00\x00\x00\x00\x00\x00\x00tduM\x00\x00\x00\b@Y\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(ADBE Group End\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00"
};


if (kButton) {
    var comp = app.project.activeItem;
    var layers = comp.selectedLayers;
    var allLayers = comp.layers;
    var keyState = ScriptUI.environment.keyboardState;
    switch(kButton.argument) {
        case 'zilch':
            app.beginUndoGroup("Add zilch");
            if (keyState.shiftKey && layers.length>0) {
                for (var n = 0; n < layers.length; n++) {
                    var thisLayer = [layers[n]];
                    zilch(thisLayer);
                }
            } else
                zilch(layers);
            app.endUndoGroup();
        break;

        case 'zest':
            zest();
        break;

        case 'zone':
            zone();
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

function zilch(layers) {
    var keyState = ScriptUI.environment.keyboardState;
    // Set name
    var allLayers = comp.layers;
    var index =1;
    for (var i=1; i <= allLayers.length; i++) {
        if (allLayers[i].name.search("z lch")>0)
            index++;
    }
    var zilchLayer = comp.layers.addShape();
    zilchLayer.name = "» z lch " + index + " «";
    //zilchLayer.name = "+ z lch " + index + " +"; // if the symbols above cause problems

    // Create zilch layer and set attributes
    zilchLayer.guideLayer = 1;
    if (app.preferences.havePref("Label Preference Indices Section 5", "Null Label Index", PREFType.PREF_Type_MACHINE_INDEPENDENT) == 1) {
        var nullColor = app.preferences.getPrefAsLong("Label Preference Indices Section 5", "Null Label Index", PREFType.PREF_Type_MACHINE_INDEPENDENT);
    } else if (app.preferences.havePref("Label Preference Indices Section 5", "Null Label Index 2", PREFType.PREF_Type_MACHINE_INDEPENDENT) == 1) {
        nullColor = app.preferences.getPrefAsLong("Label Preference Indices Section 5", "Null Label Index 2", PREFType.PREF_Type_MACHINE_INDEPENDENT);
    } else {
        nullColor = 9;
    }
    zilchLayer.label = nullColor;

    // Apply zilch effect
    applyPseudoEffect(zlchExpansion, zilchLayer.property("ADBE Effect Parade"));
    zilchLayer.effect("").name = "z lch";

    // Create shape & apply transform expressions
    var zilchGroup = zilchLayer.property("Contents").addProperty("ADBE Vector Group");
    zilchGroup.name = "z lch shape";
    //zilchGroup.property("Transform").property("Opacity").setValue(50);
    var zilchShape = zilchGroup.property("Contents").addProperty("ADBE Vector Shape - Rect");
    zilchShape.property("Size").setValue([100,100]);
    zilchShape.property("Size").expression = 'w = thisLayer.effect("z lch")("Width").value*10;\
h = thisLayer.effect("z lch")("Height").value*10;\
s = thisLayer.effect("z lch")("Square").value;\
nW = value[0]+w\
nH = value[1]+h\
if(s==1) { [nH = nW] } else { nH = value[1]+h }\
[nW,nH]';
    var zilchStroke = zilchGroup.property("Contents").addProperty("ADBE Vector Graphic - Stroke");
    var strokeColor = zilchStroke.property("Color").setValue([255,0,200]);
    zilchStroke.property("Stroke Width").setValue(2);
    zilchStroke.property("Stroke Width").expression = "// via https://help.battleaxe.co/freebies/buttcapper.html#maintain-stroke-width\
\
value / Math.max(length(toComp([0,0]), toComp([0.7071,0.7071])), 0.001)";

    // Adapt to selected layers
    if(layers.length > 0) {
        var newIn;
        var minIn = zilchLayer.outPoint;
        var newOut;
        var maxOut = 0;
        var newIndx = layers.length;
        xPosArray = [];
        yPosArray = [];
        zPosArray = [];
        rXArray = [];
        rYArray = [];
        rZArray = [];
        oXArray = [];
        oYArray = [];
        oZArray = [];
        oldParent = layers[0].parent;
        oldParentSet = 1;
        zilchLayer.moveToEnd();

        for(var i = 0; i < layers.length; i++){
            // Collect in & out point
            newIn = layers[i].inPoint;
            newOut = layers[i].outPoint;
            newIndx = layers[i].index;
            t = comp.time;
            if (newIn>newOut) { // Check for reversed layers
                var flip = newOut;
                newOut = newIn;
                newIn = flip;
            }
            if(newIn < minIn)
                minIn = newIn;
            if(newOut > maxOut)
                maxOut = newOut;
            if(newIndx < zilchLayer.index)
                zilchLayer.moveBefore(layers[i]);

            // Check if all layers have same parent
            if(layers[i].parent!=oldParent)
                oldParentSet=0;
            thisParent = layers[i].parent;

            // Clear parent
            layers[i].parent = null;

            // Collect transform values
            pos = layers[i].transform.position.valueAtTime(t,1);
            xPosArray.push(pos[0]);
            yPosArray.push(pos[1]);
            zPosArray.push(pos[2]);
            if (layers[i].threeDLayer) {
                zilchLayer.threeDLayer = 1;
                rXArray.push(layers[i].transform.xRotation.valueAtTime(t,1));
                rYArray.push(layers[i].transform.yRotation.valueAtTime(t,1));
                rZArray.push(layers[i].transform.zRotation.valueAtTime(t,1));
                o = layers[i].transform.orientation.valueAtTime(t,1);
                oXArray.push(o[0]);
                oYArray.push(o[1]);
                oZArray.push(o[2]);
            } else {
                rXArray.push(0);
                rYArray.push(0);
                rZArray.push(0);
                oXArray.push(0);
                oYArray.push(0);
                oZArray.push(0);
            }

            // Reset parent if included with selected layers
            if(thisParent != null) {
                for(var g = 0; g < layers.length; g++){
                    if(thisParent.name == layers[g].name)
                        layers[i].parent = thisParent;
                }
            }
            
        }
    
        // Set in & out point
        zilchLayer.inPoint = minIn;
        zilchLayer.outPoint = maxOut;
    
        // Collect average transform values
        avgX = arrayAverage(xPosArray);
        avgY = arrayAverage(yPosArray);
        avgZ = arrayAverage(zPosArray);
        oXAvg = arrayAverage(oXArray);
        oYAvg = arrayAverage(oYArray);
        oZAvg = arrayAverage(oZArray);
        rXAvg = arrayAverage(rXArray);
        rYAvg = arrayAverage(rYArray);
        rZAvg = arrayAverage(rZArray);
    
        // Set transform values
        zilchLayer.transform.position.setValue([avgX,avgY,avgZ]);
        if(zilchLayer.threeDLayer) {
            zilchLayer.transform.orientation.setValue([oXAvg,oYAvg,oZAvg]);
            zilchLayer.transform.xRotation.setValue(rXAvg);
            zilchLayer.transform.yRotation.setValue(rYAvg);
            zilchLayer.transform.zRotation.setValue(rZAvg);
        }

        // Transfer transform values from single selected layer to zilch layer if Alt key is pressed
        if (layers.length == 1 && keyState.altKey)
            transformKeys(layers[0], zilchLayer, t);

        // Parent layer to zilch unless parent layer is also selected
        for(var i = 0; i < layers.length; i++){
            if (layers[i].parent == null)
                layers[i].parent = zilchLayer;
        }

        // Set zilch parent to layer parent if all have same parent
        if (oldParentSet == 1) {
            zilchLayer.parent = oldParent;
        }
    }

    // Add stroke properties to shape (will open property drop downs)
    zilchStroke.property("Dashes").addProperty("ADBE Vector Stroke Dash 1").setValue(2);
    zilchStroke.property("Dashes").addProperty("ADBE Vector Stroke Gap 1").setValue(2);
    zilchStroke.property("Dashes").addProperty("ADBE Vector Stroke Offset").setValue(4);

    // Collapse properties
    app.executeCommand(2771);
    app.executeCommand(2771);
}

function zest() {
    var comp = app.project.activeItem;
    var layers = comp.selectedLayers;
    var allLayers = comp.layers;
    
    app.beginUndoGroup("Add zest");

    var index = 1;
    for (var i=1; i <= allLayers.length; i++) {
        if (allLayers[i].name.search("zëst")>0)
            index++;
    }
    var zestLayer = comp.layers.addShape();
    zestLayer.name = "÷ zëst " + index + " ÷";
    //zestLayer.name = "^ z st " + index +" ^";
    var zestGroup = zestLayer.property("Contents").addProperty("ADBE Vector Group");
    zestGroup.name = "z st shape";
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
    zestLayer.Effects.addProperty("Checkbox Control");
    zestLayer.effect("Checkbox Control").name = "Full Screen Lock";
    zestLayer.effect("Full Screen Lock").property("Checkbox").setValue(1);
    zestShape.property("Size").expression = 'if (effect("Full Screen Lock")("Checkbox")==1)\
	[thisComp.width,thisComp.height]\
else\
	value';
    zestLayer.transform.scale.expression = 'if (effect("Full Screen Lock")("Checkbox")==1)\
	[100,100]\
else\
	value';
    zestLayer.transform.position.expression = 'if (effect("Full Screen Lock")("Checkbox")==1)\
	[thisComp.width/2,thisComp.height/2]\
else\
	value';
    var zestFill = zestGroup.property("Contents").addProperty("ADBE Vector Graphic - Fill");
    zestFill.property("Color").setValue([0,0,0]);
    
    if(layers.length > 0) {
        var newIn;
        var minIn = zestLayer.outPoint;
        var newOut;
        var maxOut = 0;
        var newIndx = layers.length;
        zestLayer.moveToEnd();
        
        for(var i = 0; i < layers.length; i++){
            newIn = layers[i].inPoint;
            newOut = layers[i].outPoint;
            newIndx = layers[i].index;
            if (newIn>newOut) { // Check for reversed layers
                var flip = newOut;
                newOut = newIn;
                newIn = flip;
            }
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
    var comp = app.project.activeItem;
    var layers = comp.selectedLayers;
    var allLayers = comp.layers;

    app.beginUndoGroup("Add zone");

    var index = 1;
    for (var i=1; i <= allLayers.length; i++) {
        if (allLayers[i].name.search("zøne")>0)
            index++;
    }
    var zoneLayer = comp.layers.addShape();
    zoneLayer.name = "¤ zøne " + index + " ¤";
    //zoneLayer.name = "[ z ne " + index + " ]";
    var zoneGroup = zoneLayer.property("Contents").addProperty("ADBE Vector Group");
    zoneGroup.name = "z ne shape";
    if (app.preferences.havePref("Label Preference Indices Section 5", "Solid Label Index", PREFType.PREF_Type_MACHINE_INDEPENDENT) == 1) {
        var solidColor = app.preferences.getPrefAsLong("Label Preference Indices Section 5", "Solid Label Index", PREFType.PREF_Type_MACHINE_INDEPENDENT);
    } else if (app.preferences.havePref("Label Preference Indices Section 5", "Solid Label Index 2", PREFType.PREF_Type_MACHINE_INDEPENDENT) == 1) {
        solidColor = app.preferences.getPrefAsLong("Label Preference Indices Section 5", "Solid Label Index 2", PREFType.PREF_Type_MACHINE_INDEPENDENT);
    } else {
        solidColor = 11;
    }
    zoneLayer.label = solidColor;

    applyPseudoEffect(zoneControl, zoneLayer.property("ADBE Effect Parade"));
    zoneLayer.effect("").name = "zone Controls";
    
    var zoneShape = zoneGroup.property("Contents").addProperty("ADBE Vector Shape - Rect");
    zoneShape.property("Size").setValue([comp.width,comp.height]);
    zoneLayer.effect("zone Controls").property("Width").setValue(comp.width);
    zoneLayer.effect("zone Controls").property("Height").setValue(comp.height);
    zoneShape.property("Size").expression = 'f = effect("zone Controls")("Comp Size").value;\
s = effect("zone Controls")("Square").value;\
w = effect("zone Controls")("Width").value;\
h = effect("zone Controls")("Height").value;\
if (s==1)\
    h=w;\
if ( f==1 ) {\
    [thisComp.width,thisComp.height]\
} else {\
    [w,h]\
}';
    zoneShape.property("Roundness").expression = 'm = Math.min(content("z ne shape").content("Rectangle Path 1").size[0],content("z ne shape").content("Rectangle Path 1").size[1])/2;\
p = effect("zone Controls")("Roundness");\
(p/100) * m'
    zoneLayer.transform.position.expression = 'f = effect("zone Controls")("Comp Size").value\
if ( f==1 && !thisLayer.hasParent) {\
    [thisComp.width/2,thisComp.height/2]\
} else {\
    value\
}';
    var zoneFill = zoneGroup.property("Contents").addProperty("ADBE Vector Graphic - Fill");
    zoneFill.property("Color").expression = 'effect("zone Controls")("Color").value';
    
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
            if (newIn>newOut) { // Check for reversed layers
                var flip = newOut;
                newOut = newIn;
                newIn = flip;
            }
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

function buildPanel() {
    var window = new Window("palette", "zZz", undefined);
    var zilchButton = window.add("button",undefined,"zilch");
    var zestButton = window.add("button",undefined,"zest");
    var zoneButton = window.add("button",undefined,"zone");
    window.show();

    zilchButton.onClick = function() {
        var comp = app.project.activeItem;
        var layers = comp.selectedLayers;
        var allLayers = comp.layers;
        var keyState = ScriptUI.environment.keyboardState;
        app.beginUndoGroup("Add zilch");
        if (keyState.shiftKey && layers.length>0) {
            for (var n = 0; n < layers.length; n++) {
                var thisLayer = [layers[n]];
                zilch(thisLayer);
            }
        } else
            zilch(layers);
        app.endUndoGroup();
    }
    
    zestButton.onClick = function() {
        zest();
    }
    
    zoneButton.onClick = function() {
        zone();
    }
}

function arrayAverage(arr){
    var sum = 0;
    if (arr.length>0) {
        for(var i=0; i<arr.length; i++) {
            sum += arr[i];
        }
    }

    var numbersCnt = arr.length;
    if (sum!=0) {
        if (sum<0){
            sum*=-1;
            var result = (sum / numbersCnt) * -1;
        } else
            result = (sum / numbersCnt);

    } else if (sum==0) {
        result = 0;
    }
    return result;
}

// applyPseudoEffect() via NT Production: https://youtu.be/FOazhcjKFYU
// and RenderTom: https://bitbucket.org/rendertom/_snippets_/src/c52a28cb7bff72f1ca8a6f4bf3824dc62a342f8a/After%20Effects/Apply%20Pseudo%20Effect%20as%20Animation%20Preset.jsx
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

// collectKeyframes(), transferKeyframes(), & removeKeyframes() via David Torno & Fendra FX: https://fendrafx.com/tutorial/after-effects-extendscript-training-ep-15-part-1/

function collectKeyframes(propertyInput){
	if(propertyInput instanceof Property){
		var totalKeys, prop, keyIndexList, curKeyIndex, curKeyValue, inIn, outIn, ab, cb, ie, oe, sab, scb, ist, ost, rov, twoDS, threeDS;
		twoDS = PropertyValueType.TwoD_SPATIAL;
		threeDS = PropertyValueType.ThreeD_SPATIAL;
		keyIndexList = new Array();
		totalKeys = propertyInput.numKeys;
		
		//If the property has at least 1 keyframe, proceed
		if(totalKeys > 0){
			//Loop through keys
			for(var i = 1; i <= totalKeys; i++){
				//Get the current key time...
				curKeyTime = propertyInput.keyTime(i);
				//...it's index...
				curKeyIndex = i;
				//...and it's value
				curKeyValue = propertyInput.keyValue(i);
				
				//Get the key in and out interpolation types
				inIn = propertyInput.keyInInterpolationType(curKeyIndex);
				outIn = propertyInput.keyOutInterpolationType(curKeyIndex);
				
				//Get the key Temporal Continuous and Auto Bezier if the key type is BEZIER
				if(inIn == KeyframeInterpolationType.BEZIER && outIn == KeyframeInterpolationType.BEZIER){
					ab = propertyInput.keyTemporalAutoBezier(curKeyIndex);
					cb = propertyInput.keyTemporalContinuous(curKeyIndex);
				}
			
				//Get it's Temporal ease if it is not a HOLD key type
				if(inIn != KeyframeInterpolationType.HOLD || outIn != KeyframeInterpolationType.HOLD){
					ie = propertyInput.keyInTemporalEase(curKeyIndex);
					oe = propertyInput.keyOutTemporalEase(curKeyIndex);
				}
			
				//Get the key Spatial Continuous, Auto Bezier, Tangents, and Roving values if the key type is 2D or 3D SPATIAL
				if(propertyInput.propertyValueType == twoDS || propertyInput.propertyValueType == threeDS){
					sab = propertyInput.keySpatialAutoBezier(curKeyIndex);
					scb = propertyInput.keySpatialContinuous(curKeyIndex);
					ist = propertyInput.keyInSpatialTangent(curKeyIndex);
					ost = propertyInput.keyOutSpatialTangent(curKeyIndex);
					rov = propertyInput.keyRoving(curKeyIndex);
				}
				
				//Assemble that collected key data into and object array for retrieval later
				keyIndexList[keyIndexList.length] = {
					'curKeyTime':curKeyTime, 
					'curKeyIndex':curKeyIndex, 
					'curKeyValue':curKeyValue, 
					'inIn':inIn, 
					'outIn':outIn, 
					'ab':ab, 
					'cb':cb, 
					'ie':ie, 
					'oe':oe, 
					'sab':sab, 
					'scb':scb, 
					'ist':ist, 
					'ost':ost, 
					'rov':rov
					}
			}
			//Return the object array as a result
			return keyIndexList;
		}else{
			//If there were no keyframes, then just return null as a result
			return null;
		}
	}
}

function transferKeyframes(propertyInput, keysAry){
	if(propertyInput instanceof Property && keysAry instanceof Array){
		if(propertyInput.numKeys == 0){
			//Declare variables
			var keysAryLength, newKeyTime, addNewKey, newKeyIndex;
			//Get length of keyframe array
			keysAryLength = keysAry.length;
			//Start loop to create keys
			for(var k = 0; k < keysAryLength; k++){
				//Add new keyframe
				addNewKey = propertyInput.addKey(keysAry[k].curKeyTime);
				//Assign current key to variable
				newKeyIndex = addNewKey;
				//Set the base property value of the key
				propertyInput.setValueAtKey(newKeyIndex, keysAry[k].curKeyValue);
				
				//Set it's Temporal ease if it is not a HOLD key type
				if(keysAry[k].outIn != KeyframeInterpolationType.HOLD){
					propertyInput.setTemporalEaseAtKey(newKeyIndex, keysAry[k].ie, keysAry[k].oe);
				}
				//Set the key type of interpolation
				propertyInput.setInterpolationTypeAtKey(newKeyIndex, keysAry[k].inIn, keysAry[k].outIn);
				
				//Set the key Temporal Continuous and Auto Bezier if the key type is BEZIER
				if((keysAry[k].inIn == KeyframeInterpolationType.BEZIER) && (keysAry[k].outIn == KeyframeInterpolationType.BEZIER)){
					propertyInput.setTemporalContinuousAtKey(newKeyIndex, keysAry[k].cb);
					propertyInput.setTemporalAutoBezierAtKey(newKeyIndex, keysAry[k].ab);
				}
			
				//Set the key Spatial Continuous, Auto Bezier, and Tangents if the key type is 2D or 3D SPATIAL
				if((propertyInput.propertyValueType == PropertyValueType.TwoD_SPATIAL) || (propertyInput.propertyValueType == PropertyValueType.ThreeD_SPATIAL)){
					propertyInput.setSpatialContinuousAtKey(newKeyIndex, keysAry[k].scb);
					propertyInput.setSpatialAutoBezierAtKey(newKeyIndex, keysAry[k].sab);
					propertyInput.setSpatialTangentsAtKey(newKeyIndex, keysAry[k].ist, keysAry[k].ost);
				}
			}
	
			//We have to go back through and do roving keyframes after we have already created the inital keyframe. This is because the first and last keyframe can not be a roving key, so as we add new keyframes, we are technically on the last key each time in the loop and the code will ignore setting it as roving.
			if((propertyInput.propertyValueType == PropertyValueType.TwoD_SPATIAL) || (propertyInput.propertyValueType == PropertyValueType.ThreeD_SPATIAL)){
				for(var r = 0; r < keysAryLength; r++){
					propertyInput.setRovingAtKey((r+1), keysAry[r].rov);
				}
			}
			return true;
		}else{
			//OPTIONAL: If there are already keyframes on the destination property, alert the user to a choice. Just uncomment to use this
			/*	<----DELETE THIS LINE---->
			var check = confirm("OOPS!\rLooks like you already have keyframes on the property you are copying to!\r\rDelete them by clicking YES or stop the script now by clicking NO.", true);
			if(check == true){
				removeKeyframes(propertyInput);
				transferKeyframes(propertyInput, keysAry);
				return true;
			}else{
				return false;
			}
			<----AND DELETE THIS LINE---->	*/
		}
	}
}

function removeKeyframes(propertyInput){
	if(propertyInput instanceof Property){
		while(propertyInput.numKeys > 0){
			propertyInput.removeKey(1);
		}
	}
}

function transformKeys(thisLayer, newLayer, t){
    ogScale = thisLayer.transform.scale.valueAtTime(t,1);
    var scaleKeys = collectKeyframes(thisLayer.transform.scale);
    var scaleMove = transferKeyframes(newLayer.transform.scale, scaleKeys);
    if(scaleMove == true)
        removeKeyframes(thisLayer.transform.scale);
    thisLayer.transform.scale.setValue(ogScale);

    ogPos = thisLayer.transform.position.valueAtTime(t,1);
    var posKeys = collectKeyframes(thisLayer.transform.position);
    var posMove = transferKeyframes(newLayer.transform.position, posKeys);
    if(posMove == true)
        removeKeyframes(thisLayer.transform.position);
    thisLayer.transform.position.setValue(ogPos);
    
    if (!thisLayer.threeDLayer){
        ogRot = thisLayer.transform.rotation.valueAtTime(t,1);
        var rotKeys = collectKeyframes(thisLayer.transform.rotation);
        var rotMove = transferKeyframes(newLayer.transform.rotation, rotKeys);
        if(rotMove == true)
            removeKeyframes(thisLayer.transform.rotation);
        thisLayer.transform.rotation.setValue(ogRot);
    } else {
        ogOr = thisLayer.transform.orientation.valueAtTime(t,1);
        var orKeys = collectKeyframes(thisLayer.transform.orientation);
        var orMove = transferKeyframes(newLayer.transform.orientation, orKeys);
        if(orMove == true)
            removeKeyframes(thisLayer.transform.orientation);
        thisLayer.transform.orientation.setValue(ogOr);

        ogXr = thisLayer.transform.xRotation.valueAtTime(t,1);
        var xRKeys = collectKeyframes(thisLayer.transform.xRotation);
        var xRMove = transferKeyframes(newLayer.transform.xRotation, xRKeys);
        if(xRMove == true)
            removeKeyframes(thisLayer.transform.xRotation);
        thisLayer.transform.xRotation.setValue(ogXr);

        ogYr = thisLayer.transform.yRotation.valueAtTime(t,1);
        var yRKeys = collectKeyframes(thisLayer.transform.yRotation);
        var yRMove = transferKeyframes(newLayer.transform.yRotation, yRKeys);
        if(yRMove == true)
            removeKeyframes(thisLayer.transform.yRotation);
        thisLayer.transform.yRotation.setValue(ogYr);

        ogZr = thisLayer.transform.zRotation.valueAtTime(t,1);
        var zRKeys = collectKeyframes(thisLayer.transform.zRotation);
        var zRMove = transferKeyframes(newLayer.transform.zRotation, zRKeys);
        if(zRMove == true)
            removeKeyframes(thisLayer.transform.zRotation);
        thisLayer.transform.zRotation.setValue(ogZr);
    }
}
