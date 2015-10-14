var map2;
var idInfoBoxAberto2;
var infoBox2 = [];
var markers2 = [];

function colemar() {	
	$(".colemar").click(function () {
	var latlng = new google.maps.LatLng(-16.676993, -49.243872);
	
	var options = {
		zoom: 15,
		center: latlng,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};

	map2 = new google.maps.Map(document.getElementById("mapa2"), options);
	carregarPontos2();
	});
}



function abrirInfoBox2(id, marker) {
	if (typeof(idInfoBoxAberto2) == 'number' && typeof(infoBox2[idInfoBoxAberto2]) == 'object') {
		infoBox2[idInfoBoxAberto2].close();
	}

	infoBox2[id].open(map2, marker);
	idInfoBoxAberto2 = id;
}

function carregarPontos2() {
	$.getJSON('colemar/pontos.json', function(pontos) {
		if(markers2.length == 0) {
		
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

			infoBox2[ponto.Id] = new InfoBox(myOptions);
			infoBox2[ponto.Id].marker = marker;
			
			infoBox2[ponto.Id].listener = google.maps.event.addListener(marker, 'click', function (e) {
				abrirInfoBox(ponto.Id, marker);
			});
			
			markers2.push(marker);
			

			var ul = document.getElementById("lugares2");
			var li = document.createElement("li");
			var a = document.createElement("a");
			a.setAttribute("href", "#mapas2");
			a.setAttribute("onclick", "vaiPonto2()");
			a.appendChild(document.createTextNode(ponto.Descricao));
			li.appendChild(a);
			ul.appendChild(li);			
		});
		
		}

		var markerCluster = new MarkerClusterer(map2, markers2);
		
	});
}

function vaiPonto2() {
	var els = document.getElementById('lugares2');
	var p = els.getElementsByTagName('li');
	Array.prototype.forEach.call(p,function(el,i){
		el.addEventListener('click', function(){
			$.getJSON('colemar/pontos.json', function(pontos) {
				$.each(pontos, function(index, ponto) {
					abrirInfoBox2(i, markers2[i]);
					map2.setZoom(20);
				});
			});
		}, false);
	}) ;
}
