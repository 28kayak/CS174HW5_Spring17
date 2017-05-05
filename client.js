/**
 * Created by kaya on 5/4/2017.
 */
// this is loaded by index.html with <script>
window.onload = initAll;

var xhr = false;//xhr stands for XMLHTTPRequest
function initAll()
{
    document.getElementById("all_tweets").onclick = getNewFile;
    document.getElementById("detailed_tweets").onclick = getNewFile;
    document.getElementById("detailed_user").onclick = getNewFile;
    document.getElementById("all_known_users").onclick = getNewFile;
    document.getElementById("external_links").onclick = getNewFile;
}//initAll

function getNewFile()
{
    console.log(this);
    /*
     * "this" contains: (in case of clicking "Request Text File")
     * <a id="makeTextRequest" href="gAddress.txt"> Request Text File </a>
     * */
    console.log("this.href = " + this.href);
    console.log("this.value =" + this.value);
    /*
     * this.href contains: (with the same case)
     * http://localhost:63342/CS174HW5/sample_codes/AJAX_sample1/gAddress.txt
     *
     */
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
        /**
         * open(method, url, async)	== Specifies the type of request

         method: the type of request: GET or POST
         url: the server (file) location
         async: true (asynchronous) or false (synchronous)
         */
        xhr.send(null);
        /**
         * send() is used with "GET" method
         * send(Str) is used with "POST" method
         */
    }
    else
    {
        document.getElementById("result").innerHTML = "ERROR: Can not create request! "
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
        document.getElementById("result").innerHTML = outMsg;
    }
}//showContent