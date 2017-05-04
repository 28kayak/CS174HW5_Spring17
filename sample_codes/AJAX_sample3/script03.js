/**
 * Created by kaya on 4/27/2017.
 */
window.onload = initAll();

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
}