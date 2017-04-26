/**
 * Created by kaya on 4/25/2017.
 */
window.onload = initAll;

var xhr = false;//xhr stands for XMLHTTPRequest
function initAll()
{
    document.getElementById("makeTextRequest").onclick = getNewFile;
    document.getElementById("makeXMLRequest").onclick = getNewFile;
}//initAll

function getNewFile()
{
    console.log(this);
    console.log(this.href);
    makeRequest(this.href);
    return false;
}//getNewFile

function makeRequest(url)
{
    if(window.XMLHttpRequest)
    {
        xhr = new XMLHttpRequest;
    }
    else
    {
        if(window.ActiveXObject)
        {
            try{
                xhr = new ActiveXObject("Microsoft.XMLHTTP");
            }
            catch (e)
            {
                // nothing
            }
        }
    }
    if(xhr)
    {
        console.log(xhr);
        xhr.onreadystatechange = showContent;
        xhr.open("GET", url, true);
        xhr.send(null);
    }
    else
    {
        document.getElementById("updateArea").innerHTML = "ERROR: Can not create request! "
    }
}//makeRequest
function showContent()
{
    if(xhr.readyState == 4)
    {
        if(xhr.status == 200)
        {
            var outMsg = (xhr.responseXML && xhr.responseXML.contentType == "text/xml")? xhr.responseXML.getElementsByTagName("choice")[0].textContent: xhr.responseText;

        }
        else
        {
            var outMsg = "there is a problem with the request :" + xhr.status;
        }
        document.getElementById("updateArea").innerHTML = outMsg;
    }
}//showContent