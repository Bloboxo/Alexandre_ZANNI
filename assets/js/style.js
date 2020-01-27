// Carte Open Street Map Pour WebAcappella
// Copyright 2018 : Tonton du Web

			var lat = 48.856697;
			var lon = 2.351462;
			var macarte = null;

			function initMap() {
				var iconBase = 'assets/markers/';

                macarte = L.map('map').setView([lat, lon], 13);
                macarte.scrollWheelZoom.disable();


                L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
                    attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>',
                    minZoom: 1,
                    maxZoom: 20,

                }).addTo(macarte);
                	var myIcon = L.icon({
						iconUrl: iconBase + "icon1.png",
						iconSize: [60, 60],
					});
            		var marker = L.marker([lat, lon],{ icon: myIcon }).addTo(macarte)

            }
			window.onload = function(){
				initMap(); 
			};