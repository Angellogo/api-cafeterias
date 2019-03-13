const cntCafes = document.getElementById('cntCafes');
const coffeMap = document.querySelector('.coffe-map');
const botonAlfa = document.getElementByClass('alfabetica'); // boton de llamar


const restaurantesApi = 'http://localhost:3000/';

function callApi (apiUrl){
	fetch (apiUrl)
	.then(resp => resp.json())
	.then( function(respJson){
		console.log(respJson);
		const cafes = respJson.restaurantes;
		mostrarCafes(cafes);
	}
	);

}


function mostrarCafes (cafes){
	for (let cafe of cafes){
		cntCafes.innerHTML += `
		<div>
			<h3>${cafe.nombre}</h3>
			<p>${cafe.direccion}</p>
			<p>${cafe.rating}</p>
		</div>
		`
		// let marker = new.google.maps.Marker({
		// 	position: {lat: cafes.lat, lng:cafes.lng},
		// });
	}

}


function ordenAlfa (cafes){
	cafes.sort(a,b){
		if(a.nombre > b.nombre){
			return 1;
		} if (a.nombre < b.nombre){
			return -1;
		}
	}
}




let lugarMap;
let ubicacion = {lat:19.4153363 , lng: -99.1733391}

function initMap(){
	lugarMap = new google.maps.Map(coffeMap,{
		center: ubicacion, zoom:16
	});
	callApi (restaurantesApi);
}








