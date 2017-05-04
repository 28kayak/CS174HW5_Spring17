/**
 * Created by kaya on 4/25/2017.
 */

window.onload = initAll;
var xhr = false;
function initAll()
{
    if(window.XMLHttpRequest)
    {
        xhr = new XMLHttpRequest();
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
                // nothing to do
            }
        }
    }
    if(xhr)
    {
        xhr.onreadystatechange = showPictures;
        xhr.open("GET", "flickerfeed.xml",true);
        xhr.send(null);
    }
    else
    {
        alert("Error: could not create XMLHTTP request");
    }
}//initAll
function showPictures()
{
    var tempDiv = document.createElement("div");
    var pageDiv = document.getElementById("PictureBar");
    if(xhr.readyState == 4)
    {
        if(xhr.status == 200)
        {
            tempDiv.innerHTML = xhr.responseText;
            var allLinks = tempDiv.getElementsByTagName("a");
            for(var i =1; i < allLinks; i += 2)
            {
                pageDiv.appendChild(allLinks[i].cloneNode(true));
            }
        }
        else
        {
            alert("there was a problem with the requeset" + xhr.status);
        }
    }
}

