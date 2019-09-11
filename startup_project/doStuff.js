
//Array of images to print to fanArt div

var charImages = ['images/cecil.jpg','zidane.jpg', 'tifa.jpg', 'tidus.jpeg', 'squall.jpg', 'shadow.jpg', 'ramzda.jpg', 'qunia.jpg', 'freya.jpg', 'cloud.jpeg'];


//Need to sort and display every image
// Create an element for every string?
// Place this all into a div

function displayImages()
{
  //sorts by name, works with how the xml is sorted currently as well
  charImages.sort();

  var fanArt = document.getElementById('fanArt');

  for(var i = 0; i <= charImages.length; i++)
  {
    //Create elment here
 //   var htmlString = "<img height='200' width='200' src='" + charImages[i] + "' alt = '" + i +  "/>";
   // document.write(htmlString);
  }
  
}




//Implement some javascript to load data from XML into HTMl




//1st function 

    //This loads the XML document with an XMLHttpRequest

    function loadXMLDoc(filename)
    {
    if (window.ActiveXObject)
      {
      xhttp = new ActiveXObject("Msxml2.XMLHTTP");
      }
    else
      {
      xhttp = new XMLHttpRequest();
      }
    xhttp.open("GET", filename, false);
    try {xhttp.responseType = "msxml-document"} catch(err) {} // Helping IE11
    xhttp.send("");
    return xhttp.responseXML;
    }
    
    function displayResult()
    {
    xml = loadXMLDoc("characters.xml");
    xsl = loadXMLDoc("style.xsl");
    // code for IE
    if (window.ActiveXObject || xhttp.responseType == "msxml-document")
      {
      ex = xml.transformNode(xsl);
      document.getElementById("demo").innerHTML = ex;
      }
    // code for Chrome, Firefox, Opera, etc.
    else if (document.implementation && document.implementation.createDocument)
      {
      xsltProcessor = new XSLTProcessor();
      xsltProcessor.importStylesheet(xsl);
      resultDocument = xsltProcessor.transformToFragment(xml, document);
      document.getElementById("demo").appendChild(resultDocument);
      }
    }
    