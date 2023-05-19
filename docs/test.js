
console.log("load plugin test");

var msg = []
msg.push("############# begin lodding plugin ##################")

$sec_playground.set_menu_func("AI 插件测试", onAI_Test);
msg.push("Set menu name is: 分析内容, func name is: onAnalyseContent")

$sec_playground.set_menu_func("AI 格式分析", onAI_AnalyseFormat);
msg.push("Set menu name is: 分析内容, func name is: onAnalyseContent")

msg.push("############# begin lodding plugin ##################")

function onAI_Test()
{
    $sec_playground.set_message_func("Testing set_message_func", "OK")
    var hex = $sec_playground.get_hex_content_func()
    $sec_playground.set_message_func("Testing get_hex_content_func", hex[0:10])
    alert("plugin test");
}

function onAI_AnalyseFormat()
{
    $sec_playground.set_plugin_content_func("等等我，AI在路上..........");
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
