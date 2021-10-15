fetch('https://jsonplaceholder.typicode.com/posts').then(function (response) { //try going to that link!
	// The API call was successful!
	return response.json();
}).then(function (data) {
	// This is the JSON from our response
	console.log(data);
  var title = document.getElementById('user');
  // set the src of the image object
  title.src = data;
}).catch(function (err) {
	// There was an error
	console.warn('Something went wrong.', err);
});

// function to perform a get request
function httpGet(theUrl) //some AJAX
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

// function to get a random image
function getDog()
{
  // get the json from the server
  var json = httpGet('https://dog.ceo/api/breeds/image/random');
  console.log(json);

  // decode the json into an array
  var array = JSON.parse(json);
  console.log(array);
  
  // get the image url from the array
  var url = array.message;
  console.log(url);
  
  // get the image object
  var image = document.getElementById('dogImage');
  
  // set the src of the image object
  image.src = url;
}