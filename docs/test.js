
console.log("load plugin test");

var msg = []
msg.push("############# begin lodding plugin ##################")

$SPG$.set_menu_func("AI 插件测试", onAI_Test);
msg.push("Set menu name is: AI 插件测试, func name is: onAnalyseContent")

$SPG$.set_menu_func("AI 格式分析", onAI_AnalyseFormat);
msg.push("Set menu name is: AI 格式分析, func name is: onAnalyseContent")

$SPG$.set_message_func("Load Plug", msg)
msg.push("############# begin lodding plugin ##################")

function onAI_Test()
{
    $SPG$.set_message_func("Testing set_message_func", "OK")
    
    var hex     = $SPG$.get_hex_content_func()
    $SPG$.set_message_func("Testing get_hex_content_func, get first 4 byte", hex.slice(0, 4))
    var ascii   = $SPG$.get_ascii_content_func()
    $SPG$.set_message_func("Testing get_ascii_content, get first 4 byte", ascii.slice(0, 4))

    var content = $SPG$.get_org_file_content_func()
    $SPG$.set_message_func("Testing get_org_file_content_func, get first 4 byte", content.slice(0, 4))
    
    $SPG$.set_plugin_content_func('Hello world !!!')
    $SPG$.set_message_func("Testing set_plugin_content_func", "please push button PLUGIN, add see Hello world !!!")
    
    var plugin_content = $SPG$.get_plugin_content_func()
    $SPG$.set_message_func("Testing get_plugin_content_func", plugin_content)
    
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
