app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
        console.log(xhttp.responseText)

    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       document.getElementById("demo").innerHTML = xhttp.responseText;
    } else {
      console.log("error")
    }
};
xhttp.open("GET", "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJryijc9s0K4gRG9aU7SDTXdA&key=[YOURAPIKEY]", true);
xhttp.send();