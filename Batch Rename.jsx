// JSSatchell 2026

// A simple Regex replace for batch renaming items in the project panel

var items = app.project.selection;

app.beginUndoGroup("Batch Rename");

srch = prompt("Please enter a pattern to replace:","");
rpl = prompt("Please enter a replacement value:", srch);

for(var i = 0; i < items.length; i++){
    og = items[i].name;
    newName = og.replace(srch, rpl);
    items[i].name = newName;
    app.project.autoFixExpressions(og,newName);
}

app.endUndoGroup();
