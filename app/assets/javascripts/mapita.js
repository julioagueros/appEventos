var geocoder;
var map;
var lat;
var lng;
var marker;

function initialize() {
	geocoder = new google.maps.Geocoder();
	var myOptions = {
		zoom: 16,
		center: new google.maps.LatLng(9.85398990406704, -83.90923976898193),
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
	
	google.maps.event.addListener(map, 'click', function(event) {
		placeMarker(event.latLng);
	});
}

function placeMarker(location) {

	//var marker = new google.maps.Marker({
	if (!marker){
		marker = new google.maps.Marker({
		position: location,
		map: map,
		animation: google.maps.Animation.DROP,
		draggable:true,
		});
	}
	else {
		marker.setPosition(location);
	}

	map.setCenter(location);
	getPosSendPosToInput(marker);
	
	google.maps.event.addListener(marker, 'dragend', function(event) {
		getPosSendPosToInput(marker);
	});
}

function showInfo(marker, number) {
	var message = ["This","is","the","secret","message"];
	var infowindow = new google.maps.InfoWindow({
		content: message[number],
		size: new google.maps.Size(50,50)
	});
	google.maps.event.addListener(marker, 'click', function() {
		infowindow.open(map,marker);
	});
}

// Entradas: Un marcador
// Proceso:	La función obtiene la latitud y longitud del marcador que ingresa
// Salidas:	La latitud y longitud en textfields escondidos en el form
function getPosSendPosToInput(marker) {
	latlng = marker.getPosition();
	lat = latlng.lat();
	lng = latlng.lng();
	document.getElementById("event_latitude").defaultValue=lat;
	document.getElementById("event_longitude").defaultValue=lng;
}


















