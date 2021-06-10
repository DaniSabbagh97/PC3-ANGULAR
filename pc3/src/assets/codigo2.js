/* Gestión del carrusel (img ID: album) */
var currentImage = 0;
var numeroImagenes = 5;
var timer = setInterval(siguiente, 3500);

// Se añaden manejadores de eventos a los botones
document.getElementById("izquierda").addEventListener("click", function(){
    anterior();
});
document.getElementById("derecha").addEventListener("click", function(){
    siguiente();
});

function changeImage() {
	document.getElementById("album").src =
	"assets/img/carrusel/"+currentImage + ".jpg";
}

function siguiente() {
	// Tenemos X imagenes, de la 0 a la X-1
	currentImage = (currentImage + 1) % numeroImagenes;
	changeImage();
}
function anterior() {
	// Tenemos X imagenes, de la 0 a la X-1
	currentImage--;
	if (currentImage<0) {
		currentImage = numeroImagenes-1;
	}
	changeImage();
}