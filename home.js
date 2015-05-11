var places = [
	[49.9951, 36.2501, 12],
	[55.7267, 37.6295, 10],
	[55.8671, 37.8864, 12],
	[54.8055, 32.0162, 12],
	[52.2932, 56.4926, 12],
	[54.7191, 161.2024, 9],
	[51.8376, 85.7663, 13],
	[55.8487, 92.7507, 10],
	[52.093751, 23.6851851, 10],
	[56.3103, 38.1370, 12],
	[56.3290, 43.9841, 12],
	[55.8671, 37.8263, 12]
    ]
var r = Math.floor(Math.random()*(places.length-1));
var map = L.map('map').setView([places[r][0], places[r][1]], places[r][2]);
mapLink =
	'<a href="http://openstreetmap.org">OpenStreetMap</a>';
L.tileLayer(
	'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; ' + mapLink + ' Contributors',
	maxZoom: 18,
	}).addTo(map);
