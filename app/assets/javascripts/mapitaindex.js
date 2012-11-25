/**
	Javascript para mostrar googlemap en el index y en categorize de eventos.
*/

var geocoder;
var map;

//alert(eventosJson[2].category_name);

function initialize() {
	geocoder = new google.maps.Geocoder();
	var myOptions = {
		zoom: 16,
		center: new google.maps.LatLng(9.85398990406704, -83.90923976898193),
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
	
	//Para a cada evento (pasado como un JSON llamado eventosJson) extraer la información necesaria para markers e infowindows.
	for (var i = 0, len = eventosJson.length; i < len; i++) {
		var name = eventosJson[i].name;
		var description = eventosJson[i].description;
		var category_name = eventosJson[i].category_name; //campo existente por query que permite acceder al nombre.
		var latitude = eventosJson[i].latitude;
		var longitude = eventosJson[i].longitude;
		var starttime = eventosJson[i].startDateTime;
		
		var location = new google.maps.LatLng(latitude, longitude);
		
		var marker = new google.maps.Marker({
			position: location,
			map: map
		});
		//Se llama a la función que crea los infowindows de cada marker.
		showInfo(marker, name, category_name, description, starttime);
	}
}

function codeAddress() {
	var address = document.getElementById("address").value;
		geocoder.geocode( { 'address': address}, function(results, status) {
		if (status == google.maps.GeocoderStatus.OK) {
			map.setCenter(results[0].geometry.location);
			var marker = new google.maps.Marker({
				map: map,
				position: results[0].geometry.location
			});
		}
		else {
			alert("Geocode was not successful for the following reason: " + status);
		}
	});
}


//función para crear los infowindows del googlemaps.
function showInfo(marker, name, category_name, description, starttime) {
	var infowindow = new google.maps.InfoWindow( {
		content: "<p> Event category: " + category_name + "<br />" + "Name: " + name + "<br />" + "What is it?: "
		 + description + "<br />" + "Starts at: " + starttime + "</p>",
		size: new google.maps.Size(50,50)
	});
	google.maps.event.addListener(marker, 'click', function() {
		infowindow.open(map,marker);
	});
}






