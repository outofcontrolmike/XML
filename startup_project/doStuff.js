//Implement some javascript to load data from XML into HTMl

var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() 
{
    if (this.readyState == 4 && this.status == 200)
    {
        document.getElementById("demo").innerHTML = xhttp.responseText;
    }//end data transfer
};
//end function

xhttp.open("GET", "characters.xml", true);
xhttp.send();