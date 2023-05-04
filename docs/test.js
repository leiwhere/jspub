
function bufToHex(buf) {
  return Array.prototype.map.call(new Uint8Array(buf), x => ('00' + x.toString(16)).slice(-2)).join('');
}

function onClickUploadSample()
{
    var  frm = $("#justdoit")
    if(frm[0] == null)
    {
        var form = $("<form id='uploadfile'><input id='justdoit' type='file' style='display:none'/></form>"); 
        $("body").append(form);
    }
    $("#justdoit")[0].click();
}

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
