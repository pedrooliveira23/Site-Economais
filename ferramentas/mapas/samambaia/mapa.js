var map;
var idInfoBoxAberto;
var infoBox = [];
var markers = [];

function samambaia() {	
	$(".samambaia").click(function () {
	var latlng = new google.maps.LatLng(-16.604549,-49.2622754);
	
	var options = {
		zoom: 15,
		center: latlng,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};

	map = new google.maps.Map(document.getElementById("mapa"), options);
	carregarPontos();
	});
}



function abrirInfoBox(id, marker) {
	if (typeof(idInfoBoxAberto) == 'number' && typeof(infoBox[idInfoBoxAberto]) == 'object') {
		infoBox[idInfoBoxAberto].close();
	}

	infoBox[id].open(map, marker);
	idInfoBoxAberto = id;
}

function carregarPontos() {
	$.getJSON('samambaia/pontos.json', function(pontos) {
		if(markers.length == 0) {
		
		$.each(pontos, function(index, ponto) {
			
			var marker = new google.maps.Marker({
				position: new google.maps.LatLng(ponto.Latitude, ponto.Longitude),
				title: ponto.Descricao,
				icon: 'images/marcador.png'
			});
			var myOptions = {
				content: "<p>" + ponto.Descricao + "</p>",
				pixelOffset: new google.maps.Size(-150, 0)
			};

			infoBox[ponto.Id] = new InfoBox(myOptions);
			infoBox[ponto.Id].marker = marker;
			
			infoBox[ponto.Id].listener = google.maps.event.addListener(marker, 'click', function (e) {
				abrirInfoBox(ponto.Id, marker);
			});
			
			markers.push(marker);
			

			var ul = document.getElementById("lugares");
			var li = document.createElement("li");
			var a = document.createElement("a");
			a.setAttribute("href", "#mapas");
			a.setAttribute("onclick", "vaiPonto()");
			a.appendChild(document.createTextNode(ponto.Descricao));
			li.appendChild(a);
			ul.appendChild(li);			
		});
		
		}

		var markerCluster = new MarkerClusterer(map, markers);
		
	});
}

function vaiPonto() {
	var els = document.getElementById('lugares');
	var p = els.getElementsByTagName('li');
	Array.prototype.forEach.call(p,function(el,i){
		el.addEventListener('click', function(){
			$.getJSON('samambaia/pontos.json', function(pontos) {
				$.each(pontos, function(index, ponto) {
					abrirInfoBox(i, markers[i]);
					map.setZoom(20);
				});
			});
		}, false);
	}) ;
}
