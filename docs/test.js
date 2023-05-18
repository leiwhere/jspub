
console.log("load plugin test");
console.log("set plugin menu");
$sec_playground.func_set_menu("分析内容", onAnalyseContent);

function onAnalyseContent()
{
    alert("analyse content");
}

function onQueryScriptType()
{
    alert("click script type")
}

function onQueryHaveExpolit()
{
    alert("click Expolit")
}
