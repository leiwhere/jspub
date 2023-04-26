
    
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

function onQueryScriptType()
{
    alert("click script type")
}

function onQueryHaveExpolit()
{
    alert("click Expolit")
}
