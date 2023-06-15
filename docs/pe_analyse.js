console.log("load plugin pe analyse");

var msg = []
msg.push("############# begin lodding pe analyse plugin ##################")

$SPG$.add_menu("AI 指令反汇编", onAI_Diasm);
msg.push("Add menu name is: AI 插件测试, func name is: onAnalyseContent")

$SPG$.add_menu("AI 功能分析",  onAI_Funtion);
msg.push("Add menu name is: AI 格式分析, func name is: onAnalyseContent")

$SPG$.write_msg_console("Load Plug", msg)
msg.push("############# begin lodding pe analyse plugin ##################")

async function onAI_Diasm()
{
  $SPG$.write_msg_console("开始分析被选择的内容", null)

  $SPG$.add_result("HEX反汇编: 开始分析被选择的内容", "")
  var content = $SPG$.get_select_content()
  if(content == null || content.length == 0)
  {
      $SPG$.add_result("HEX反汇编: 请选择一段HEX内容...", "")
      return
  }
  
  var question = "你是反汇编专家，请帮我回答一个问题，我输入文件的内容是HEX格式，你帮我进行指令反汇编，我输入的内容是：" 
  question = question + content

  const result = await window.chatgpt_query(question)
  
  if(result.STATUS == false)
  {
    msg.push("INFO: AI 服务识别失败")
    msg.push(result.DATA)
    $SPG$.write_msg_console("AI 分析文件格式失败", msg)
    $SPG$.add_result("反汇编:", "ERROR: AI 分析失败, 请检查网络是否正常，或者AI服务KEY是否过期")
  }else{
    var obj = result.DATA;
    $SPG$.add_result("反汇编结果:", obj) 
    $SPG$.write_msg_console("AI 反汇编完成!", null)
  }
  $SPG$.add_result("############# AI 反汇编完成 #############", null) 
  $SPG$.write_msg_console("AI 分析文件格式结束!", null)
    
}

function onAI_Funtion()
{
}
