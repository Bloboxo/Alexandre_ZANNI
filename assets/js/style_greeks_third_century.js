// Carte Open Street Map Pour WebAcappella
// Copyright 2018 : Tonton du Web

var planes = [
		["AGRIGENTO (Lower Agora)",37.291723,13.586007],
		["AKRAI",37.057732,14.894702],
		["CATANE",37.502755,15.083624],
		["HELOROS",36.841228,15.106156],
		["HERAKLEA MINOA",37.393834,13.280549],
		["MEGARA HYBLAEA",37.203785,15.181952],
		["MONTE IATO",37.967069,13.198382],
		["MORGANTINA",37.431085,14.479006],
		["NOTO",36.938814,15.022370],
		["SEGESTA",37.941540,12.836059],
		["SELINUS",37.582877,12.825775],
		["SOLUNTO",38.094101,13.532330],
		["SYRACUSE (Neapolis)",37.075639,15.274963],
		["TAORMINA",37.852277,15.292069],
		["TYNDARIS",38.143853,15.042602]
		];

        var map = L.map('map_greeks_third_century').setView([ 37.515345,14.251671], 8);
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
