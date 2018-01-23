/**
 * Created by shiying on 2018-01-23.
 */
function ajax(method,url,data,success){
    var xmr=null;
    try{
        xmr=new XMLHttpRequest();
    }catch (e){
        xmr=new ActiveXObject("Microsoft.XMLHTTP");
    }
    if(method=="get"&&data){
        url+="?"+data;
    }
    xmr.open(method,url,true);
    if(method=="get"){
        xmr.send();
    }else{
        xmr.setRequestHeader("content-type","application/x-www-url-urlencoded");
        xmr.send(data);
    }
    xmr.onreadystatechange=function () {
        if(xmr.readyState==4){
            if(xmr.status==200){
                success&&success(xmr.responseText);
            }
            else {
                alert("Err:"+xmr.status);
            }
        }
    }
}
