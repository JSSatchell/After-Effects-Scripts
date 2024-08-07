// JSSatchell 2024

// Creates fade controls for selected layers' video or audio
// For KBar, pass arguments of "video" or "audio"
// Demo video: https://youtu.be/byEFCpwtjYA?feature=shared

var button = (typeof kbar !== 'undefined') ? kbar.button : null;
var pseudoEffectData = {
   name: "Fade Layers",
   matchName: "Pseudo/PEM Fade Controls V",
   binary: "RIFX\x00\x00\x0E\x1CFaFXhead\x00\x00\x00\x10\x00\x00\x00\x03\x00\x00\x00D\x00\x00\x00\x01\x01\x00\x00\x00LIST\x00\x00\r\u00F8bescbeso\x00\x00\x008\x00\x00\x00\x01\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00]\u00A8\x00\x1D\u00F8R\x00\x00\x00\x00\x00d\x00d\x00d\x00d?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00FF\u00FF\u00FF\u00FFLIST\x00\x00\x00\u00ACtdsptdot\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdpl\x00\x00\x00\x04\x00\x00\x00\x02LIST\x00\x00\x00@tdsitdix\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdmn\x00\x00\x00(ADBE Effect Parade\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00@tdsitdix\x00\x00\x00\x04\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/PEM Fade Controls V\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdsn\x00\x00\x00\x0BFade Video\x00\x00LIST\x00\x00\x00dtdsptdot\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdpl\x00\x00\x00\x04\x00\x00\x00\x01LIST\x00\x00\x00@tdsitdix\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdmn\x00\x00\x00(ADBE End of path sentinel\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\fxsspcfnam\x00\x00\x000\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x05*parTparn\x00\x00\x00\x04\x00\x00\x00\x06tdmn\x00\x00\x00(Pseudo/PEM Fade Controls V-0000\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x02\x00\x00\x00\x00\x00\x00\x00\x0E\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00FF\u00FF\u00FF\u00FF\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/PEM Fade Controls V-0001\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x07Based On\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x01\x00\x03\x00\x01\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pdnm\x00\x00\x00\x15Markers|In/Out Point\x00\x00tdmn\x00\x00\x00(Pseudo/PEM Fade Controls V-0002\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x07In/Out\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x01\x00\x03\x00\x01\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pdnm\x00\x00\x00\"In & Out|In Only|Out Only|No Fade\x00tdmn\x00\x00\x00(Pseudo/PEM Fade Controls V-0003\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04Symmetrical Fade?\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pdnm\x00\x00\x00\x01\x00\x00tdmn\x00\x00\x00(Pseudo/PEM Fade Controls V-0004\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\nFade In Duration\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00D\x16\x00\x00\x00\x00\x00\x00@\u00A0\x00\x00?\x00\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/PEM Fade Controls V-0005\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\nFade Out Duration\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00D\x16\x00\x00\x00\x00\x00\x00@\u00A0\x00\x00?\x00\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x07\x02tdgptdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x0BFade Video\x00\x00tdmn\x00\x00\x00(Pseudo/PEM Fade Controls V-0000\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00DAtdbstdsb\x00\x00\x00\x04\x00\x00\x00\x03tdsn\x00\x00\x00\x01\x00\x00tdb4\x00\x00\x00|\u00DB\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\x00\x00\x00\x02X?\x1A6\u00E2\u00EB\x1CC-?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04\x04\u00C0\u00C0\u00C0\u00FF\u00C0\u00C0\u00C0\x00\x00\x00\x00\u0080\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdpi\x00\x00\x00\x04\x00\x00\x00\x0Etdmn\x00\x00\x00(Pseudo/PEM Fade Controls V-0001\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00D6tdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\tBased On\x00\x00tdb4\x00\x00\x00|\u00DB\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\u00FF\x00\x00]\u00A8?\x1A6\u00E2\u00EB\x1CC-?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04\x04\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/PEM Fade Controls V-0002\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00D4tdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x07In/Out\x00\x00tdb4\x00\x00\x00|\u00DB\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\u00FF\x00\x00]\u00A8?\x1A6\u00E2\u00EB\x1CC-?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04\x04\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/PEM Fade Controls V-0003\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00DEtdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x12Symmetrical Fade?\x00tdb4\x00\x00\x00|\u00DB\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\x04\x00\x00]\u00A8?\x1A6\u00E2\u00EB\x1CC-?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04\x04\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/PEM Fade Controls V-0004\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00FEtdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x11Fade In Duration\x00\x00tdb4\x00\x00\x00|\u00BD\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\u00FF\x00\x00]\u00A8\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(?\u00E0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdum\x00\x00\x00\b\x00\x00\x00\x00\x00\x00\x00\x00tduM\x00\x00\x00\b@\x14\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/PEM Fade Controls V-0005\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00FEtdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x12Fade Out Duration\x00tdb4\x00\x00\x00|\u00BD\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\u00FF\x00\x00]\u00A8\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(?\u00E0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdum\x00\x00\x00\b\x00\x00\x00\x00\x00\x00\x00\x00tduM\x00\x00\x00\b@\x14\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00",
};

if (button) {
    switch(button.argument) {
        case 'video':
            video();
        break;

        case 'audio':
            audio();
        break;

        case 'video&audio':
            video();
            audio();
         break;

        case '':
            buildPanel();
         break;
    
        default:
            Window.alert("Argument " + button.argument + " is invalid.");
        break;
    }
} else {
    buildPanel();
}

function buildPanel() {
   var window = new Window("palette", "Fade Layers", undefined);
   var fadeV = window.add("button",undefined,"Fade Video");
   var fadeA = window.add("button",undefined,"Fade Audio");
   window.show();

   fadeV.onClick = function() {
      video();
   }

   fadeA.onClick = function() {
      audio();
   }
}

function video() {
   var comp = app.project.activeItem;
   var layers = comp.selectedLayers;
   app.beginUndoGroup("Add Video Fade");

   for(var i = 0; i < layers.length; i++) {
         var newIn = layers[i].inPoint;
         var newOut = layers[i].outPoint;
         if (newIn>newOut) { // Check for reversed layers
            var flip = newOut;
            newOut = newIn;
            newIn = flip;
         }
         var inMrk = newIn + .5;
         var outMrk = newOut - .5;
         var inNme = new MarkerValue("In");
         var outNme = new MarkerValue("Out");
        
         layers[i].marker.setValueAtTime(inMrk, inNme);
         layers[i].marker.setValueAtTime(outMrk, outNme);
        
         var pseudoEffect = applyPseudoEffect(pseudoEffectData, layers[i].property("ADBE Effect Parade"));
         layers[i].effect("").name = "Fade Video";

         layers[i].effect("Fade Video").property("Based On").expression = 'try { inMark = thisLayer.marker.key("In"); } catch (err) { inMark = false; }\
try { outMark = thisLayer.marker.key("Out"); } catch (err) { outMark = false; }\
\
if ( !inMark && !outMark ) { 2 } else { value }';

         layers[i].effect("Fade Video")("In/Out").expression = 'ddBased = thisLayer.effect("Fade Video")("Based On").value;\
\
try { inMark = thisLayer.marker.key("In"); } catch (err) { inMark = false; }\
try { outMark = thisLayer.marker.key("Out"); } catch (err) { outMark = false; }\
\
if ( ddBased == 1 ) {\
   if ( inMark && outMark ) {\
      value\
   } else if ( value != 4 ) {\
      if ( !inMark ){\
         3\
      } else if ( !outMark ) {\
         2\
      }\
   } else { value }\
} else { value }';

/*
         // This section will allow for a symmetrical fade based on a single marker placement, but it also defaults to a symmetrical fade when one marker is removed.

         layers[i].effect("Fade Video").property("Symmetrical Fade?").expression = 'ddBased = thisLayer.effect("Fade Video")("Based On").value;\
io = thisLayer.effect("Fade Video")("In/Out").value;\
try { inMark = thisLayer.marker.key("In"); } catch (err) { inMark = false; }\
try { outMark = thisLayer.marker.key("Out"); } catch (err) { outMark = false; }\
\
if (ddBased == 1 && io == 1) {\
   if ( !inMark || !outMark ) { 1 } else { value }\
} else { value }';
*/

        layers[i].effect("Fade Video").property("Fade Out Duration").expression = 'syncFade = thisLayer.effect("Fade Video")("Symmetrical Fade?").value;\
inVal=thisLayer.effect("Fade Video")("Fade In Duration").value;\
\
if (syncFade==1) { inVal } else { value }';
        
         layers[i].property("Opacity").expression = 'ddBased = thisLayer.effect("Fade Video")("Based On").value;\
ddInOut = thisLayer.effect("Fade Video")("In/Out").value;\
inDurSet = thisLayer.effect("Fade Video")("Fade In Duration").value;\
outDurSet = thisLayer.effect("Fade Video")("Fade Out Duration").value;\
syncFade = thisLayer.effect("Fade Video")("Symmetrical Fade?").value;\
rev = 0;\
newIn = inPoint;\
newOut = outPoint;\
\
try {\
   inMark = thisLayer.marker.key("In");\
} catch (err) {\
   inMark=false;\
}\
\
try {\
   outMark = thisLayer.marker.key("Out");\
} catch (err) {\
   outMark=false;\
}\
\
 if (inPoint>outPoint) { // Check for reversed layers\
	var flip = outPoint;\
	newOut = inPoint;\
	newIn = flip;\
	rev = 1;\
 }\
\
inStart = newIn;\
outEnd = newOut;\
inDur = 0;\
outDur = 0;\
\
if (ddBased == 1) {\
   if (inMark) {\
      if (inMark.duration > 0) {\
         if (rev == 0) {\
            inStart = inMark.time;\
            inDur = (inMark.time + inMark.duration) - inStart;\
         } else {\
            inStart = inMark.time;\
            inDur = (inMark.time - inMark.duration) - inStart;\
         }\
      } else {\
         inDur = inMark.time - inStart;\
      }\
   }\
   if (outMark){\
      if (outMark.duration > 0) {\
         if (rev == 0) {\
            outEnd = outMark.time + outMark.duration;\
         } else {\
            outEnd = outMark.time - outMark.duration;\
         }\
         outDur = outEnd - outMark.time;\
      } else {\
         outDur = outEnd - outMark.time;\
      }\
   } else if ( syncFade == 1 ) {\
      outDur = inDur;\
   }\
   if ( !inMark && syncFade == 1) {\
      inDur = outDur;\
   }\
} else if (ddBased == 2) {\
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
   var comp = app.project.activeItem;
   var layers = comp.selectedLayers;
    app.beginUndoGroup("Fade Audio");    
    for(var i = 0; i < layers.length; i++) {
         var newIn = layers[i].inPoint;
         var newOut = layers[i].outPoint;
         if (newIn>newOut) { // Check for reversed layers
            var flip = newOut;
            newOut = newIn;
            newIn = flip;
         }
         var inMrk = newIn + .5;
         var outMrk = newOut - .5;
         var inNme = new MarkerValue("Audio In");
         var outNme = new MarkerValue("Audio Out");
         
         layers[i].marker.setValueAtTime(inMrk, inNme);
         layers[i].marker.setValueAtTime(outMrk, outNme);

         var pseudoEffect = applyPseudoEffect(pseudoEffectData, layers[i].property("ADBE Effect Parade"));
         app.project.activeItem.selectedLayers[0].effect("").name = "Fade Audio";

         layers[i].effect("Fade Audio").property("Based On").expression = 'try { inMark = thisLayer.marker.key("Audio In"); } catch (err) { inMark = false; }\
try { outMark = thisLayer.marker.key("Audio Out"); } catch (err) { outMark = false; }\
\
if ( !inMark && !outMark ) { 2 } else { value }';

         layers[i].effect("Fade Audio")("In/Out").expression = 'ddBased = thisLayer.effect("Fade Audio")("Based On").value;\
\
try { inMark = thisLayer.marker.key("Audio In"); } catch (err) { inMark = false; }\
try { outMark = thisLayer.marker.key("Audio Out"); } catch (err) { outMark = false; }\
\
if (ddBased == 1) {\
   if (inMark && outMark) {\
      value\
   } else if ( value != 4 ) {\
      if ( !inMark ){\
         3\
      } else if ( !outMark ) {\
         2\
      }\
   } else { value }\
} else { value }';

/*
         // This section will allow for a symmetrical fade based on a single marker placement, but it also defaults to a symmetrical fade when one marker is removed.

         layers[i].effect("Fade Audio").property("Symmetrical Fade?").expression = 'ddBased = thisLayer.effect("Fade Audio")("Based On").value;\
io = thisLayer.effect("Fade Audio")("In/Out").value;\
try { inMark = thisLayer.marker.key("Audio In"); } catch (err) { inMark = false; }\
try { outMark = thisLayer.marker.key("Audio Out"); } catch (err) { outMark = false; }\
\
if (ddBased == 1 && io == 1) {\
   if ( !inMark || !outMark ) { 1 } else { value }\
} else { value }';
*/

        layers[i].effect("Fade Audio").property("Fade Out Duration").expression = 'syncFade = thisLayer.effect("Fade Audio")("Symmetrical Fade?").value;\
inVal=thisLayer.effect("Fade Audio")("Fade In Duration").value;\
\
if (syncFade==1) { inVal } else { value }';
         
         layers[i].property("Audio Levels").expression = 'ddBased = thisLayer.effect("Fade Audio")("Based On").value;\
ddInOut = thisLayer.effect("Fade Audio")("In/Out").value;\
inDurSet = thisLayer.effect("Fade Audio")("Fade In Duration").value;\
outDurSet = thisLayer.effect("Fade Audio")("Fade Out Duration").value;\
syncFade = thisLayer.effect("Fade Audio")("Symmetrical Fade?").value;\
layerDuration = outPoint - inPoint;\
minVol = -50;\
rev = 0;\
newIn = inPoint;\
newOut = outPoint;\
\
try {\
   inMark = thisLayer.marker.key("Audio In");\
} catch (err) {\
   inMark=false;\
}\
\
try {\
   outMark = thisLayer.marker.key("Audio Out");\
} catch (err) {\
   outMark=false;\
}\
\
if (inPoint>outPoint) { // Check for reversed layers\
   var flip = outPoint;\
   newOut = inPoint;\
   newIn = flip;\
   rev = 1;\
}\
\
inStart = newIn;\
outEnd = newOut; \
inDur = 0;\
outDur = 0;\
\
if (ddBased == 1) {\
   if (inMark) {\
      if (inMark.duration > 0) {\
         if (rev == 0) {\
            inStart = inMark.time;\
            inDur = (inMark.time + inMark.duration) - inStart;\
         } else {\
            inStart = inMark.time;\
            inDur = (inMark.time - inMark.duration) - inStart;\
         }\
      } else {\
         inDur = inMark.time - inStart;\
      }\
   }\
   if (outMark){\
      if (outMark.duration > 0) {\
         if (rev == 0) {\
            outEnd = outMark.time + outMark.duration;\
         } else {\
            outEnd = outMark.time - outMark.duration;\
         }\
         outDur = outEnd - outMark.time;\
         } else {\
            outDur = outEnd - outMark.time;\
         }\
   } else if ( syncFade == 1 ) {\
      outDur = inDur;\
   }\
   if ( !inMark && syncFade == 1) {\
      inDur = outDur;\
   }\
} else if (ddBased == 2) {\
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


// applyPseudoEffect() via NT Productions: https://youtu.be/FOazhcjKFYU
// and RenderTom: https://bitbucket.org/rendertom/_snippets_/src/c52a28cb7bff72f1ca8a6f4bf3824dc62a342f8a/After%20Effects/Apply%20Pseudo%20Effect%20as%20Animation%20Preset.jsx
function applyPseudoEffect(pseudoEffectData, effectsProp){
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
       var jssFolder = new Folder(Folder.myDocuments.fsName + "/Adobe/After Effects 20" + app.buildName.substr(0,2) + "/User Presets/JSS Media");
       if (!jssFolder.exists)
           jssFolder.create();
       ffxFile = writeFile(jssFolder.fsName + "/" + pseudoEffectData.name + ".ffx", pseudoEffectData.binary, "BINARY");
       makePseudoEffectLive(ffxFile);
   }

   pseudoEffect = effectsProp.addProperty(pseudoEffectData.matchName);
   return pseudoEffect;
}
