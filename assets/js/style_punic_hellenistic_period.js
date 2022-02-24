// Carte Open Street Map Pour WebAcappella
// Copyright 2018 : Tonton du Web

var planes = [
		["ANTAS",39.390675,8.489718],
		["BITHIA",38.895434,8.885067],
		["CARTHAGE",36.862544,10.332949],
		["DOUGGA",36.420579,9.220223],
		["MONTE SIRAI",39.176853,8.488686],
		["RAS IL-WARDIJA",36.036610,14.187027],
		["SABRATHA",32.806924,12.481060],
		["SELINUS",37.582877,12.825775],
		["SOLUNTO",38.094101,13.532330],
		["TAS-SILG",35.845875,14.552094],
		["THARROS",39.873262,8.440991],
		["UTICA",37.007492,9.946500],
		["VOLUBILIS",34.072614,-5.556892]
		];

        var map = L.map('map_punic_hellenistic_period').setView([ 36.862544,10.332949], 5);
        mapLink =
            '<a href="http://openstreetmap.org">OpenStreetMap</a>';
        L.tileLayer(
            'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; ' + mapLink + ' Contributors',
            maxZoom: 18,
            }).addTo(map);

		for (var i = 0; i < planes.length; i++) {
			marker = new L.marker([planes[i][1],planes[i][2]])
				.bindPopup(planes[i][0])
				.addTo(map);
		}
