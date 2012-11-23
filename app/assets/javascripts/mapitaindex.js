var geocoder;
var map;


function initialize() {
	geocoder = new google.maps.Geocoder();
	var myOptions = {
		zoom: 16,
		center: new google.maps.LatLng(9.85398990406704, -83.90923976898193),
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
	

	for (var i = 0, len = eventosJson.length; i < len; i++) {
		var name = eventosJson[i].name;
		var description = eventosJson[i].description;
		var latitude = eventosJson[i].latitude;
		var longitude = eventosJson[i].longitude;
		/*var phone = json[i]['fields'].phone;
		var email = json[i]['fields'].email;
		var latitud = json[i]['fields'].latitud;
		var longitud = json[i]['fields'].longitud;*/
		
		var location = new google.maps.LatLng(latitude, longitude);
		
		var marker = new google.maps.Marker({
			position: location,
			map: map
		});
		showInfo(marker, name, description);
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


function showInfo(marker, name, description) {
	var infowindow = new google.maps.InfoWindow( {
		content: name + "\n" + description,
		size: new google.maps.Size(50,50)
	});
	google.maps.event.addListener(marker, 'click', function() {
		infowindow.open(map,marker);
	});
}






