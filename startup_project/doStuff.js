
//Array of images to print to fanArt div

var charImages = ['images/cecil.jpg','images/zidane.jpg', 'images/tifa.jpg', 'images/tidus.jpeg', 'images/squall.jpg', 'images/shadow.jpg', 'images/ramzda.jpg', 'images/quina.jpg', 'images/freya.jpg', 'images/cloud.jpeg'];

var charDescriptions = ['Cecil Harvey is the main protagonist of Final Fantasy IV, and, as such, is the only character to remain in the character\'s control for the entire duration of the game. Cecil is a unique character, as he is one of very few characters in the Final Fantasy series to change class, shedding his Dark Knight persona to become a Paladin. He is also possibly the darkest protagonist in the series so far, an anti-hero responsible committing atrocities in the name of his kingdom,before seeking redemption for his dark past.', 'Test character 2', 'Test 3', 'test 4', 'test 5' , '6', '7', '8', '9', '10'];

//Need to sort and display every image
// Create an element for every string?
// Place this all into a div

function displayImages()
{
  //sorts by name, works with how the xml is sorted currently as well
  charImages.sort();

  var fanArt = document.getElementById('fanArt');
  var arraylength = charImages.length;

  for(var i = 0;  i < arraylength; i++)
  {

    var imageMaker = "<ul><img src='" + charImages[i] + "' onclick='displayBio(" + i + ")' width='200' height='200'</ul>";
    fanArt.innerHTML += imageMaker;
    console.log(imageMaker);

  }
  
}//end display images


function displayBio(charImages)
{
  document.getElementById('charText').innerHTML = charDescriptions[charImages];
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
    

    //Displays xml with xsl styling
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
    