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

}






















