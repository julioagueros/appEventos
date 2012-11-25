var geocoder;
var map;
var lat;
var lng;
var marker;

//alert(eventoJson.name)

function initialize() {
	geocoder = new google.maps.Geocoder();
	var myOptions = {
		zoom: 16,
		center: new google.maps.LatLng(9.85398990406704, -83.90923976898193),
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

	if (eventoJson !== null){
		//var name = eventoJson.name;
		//var description = eventoJson.description;
		var latitude = eventoJson.latitude;
		var longitude = eventoJson.longitude;
		//var starttime = eventoJson.startDateTime;
		
		var location = new google.maps.LatLng(latitude, longitude);
		
		marker = new google.maps.Marker({
			position: location,
			map: map
		});
	}
	
	google.maps.event.addListener(map, 'click', function(event) {
		placeMarker(event.latLng);
	});
}

function placeMarker(location) {

	//si no existe un market, entonces se crea uno.
	if (!marker){
		marker = new google.maps.Marker({
		position: location,
		map: map,
		animation: google.maps.Animation.DROP,
		draggable:true,
		});
	}
	//de lo contrario, se cambia su posición, nada más.
	else {
		marker.setPosition(location);
	}

	map.setCenter(location);
	//se envía la posición al form.
	getPosSendPosToInput(marker);
	
	google.maps.event.addListener(marker, 'dragend', function(event) {
		getPosSendPosToInput(marker);
	});
}

// Entradas: Un marcador
// Proceso:	La función obtiene la latitud y longitud del marcador que ingresa.
// Salidas:	La latitud y longitud en textfields escondidos en el form.
function getPosSendPosToInput(marker) {
	latlng = marker.getPosition();
	lat = latlng.lat();
	lng = latlng.lng();
	document.getElementById("event_latitude").defaultValue=lat;
	document.getElementById("event_longitude").defaultValue=lng;
}


















