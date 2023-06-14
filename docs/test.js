
console.log("load plugin test");

var msg = []
msg.push("############# begin lodding plugin ##################")

$SPG$.add_menu("AI 插件测试", onAI_Test);
msg.push("Add menu name is: AI 插件测试, func name is: onAnalyseContent")

$SPG$.add_menu("AI 格式分析", onAI_AnalyseFormat);
msg.push("Add menu name is: AI 格式分析, func name is: onAnalyseContent")

$SPG$.write_msg_console("Load Plug", msg)
msg.push("############# begin lodding plugin ##################")

function onAI_Test()
{
    $SPG$.write_msg_console("Testing write_msg_console", "OK")
    
    var hex     = $SPG$.get_simple_content_HEX()
    $SPG$.write_msg_console("Testing get_simple_content_HEX, get first 4 byte", hex.slice(0, 4))

    var content = $SPG$.get_simple_content()
    $SPG$.write_msg_console("Testing get_simple_content, get first 4 byte", content.slice(0, 4))
    
    $SPG$.add_result('Hello world !!!')
    $SPG$.write_msg_console("Testing add_result", "please push button PLUGIN, add see Hello world !!!")
    
    var plugin_content = $SPG$.get_result()
    $SPG$.write_msg_console("Testing get_result", plugin_content)
    
    alert("plugin test");
}

function onAI_AnalyseFormat()
{
    $SPG$.set_plugin_content_func("等等我，AI在路上..........");
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
