var tePapaMap;

function initMap() {

	// Get a reference to map container
	var mapContainer = document.querySelector('#map');

	// Set up some options for the map
	var mapOptions = {
		center: {
			lat: -41.290475,
			lng: 174.781783
		},
		zoom: 15
	};

	// Create the map
	tePapaMap = new google.maps.Map(mapContainer, mapOptions);

	// Prepare some markers
	var tePapaMarker = new google.maps.Marker({
	    position: {
			lat: -41.290475,
			lng: 174.781783
		},
	    map: tePapaMap
	  });


}