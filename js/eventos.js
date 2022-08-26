const buscar = document.querySelector("#buscar")
const itemAgregar = document.querySelector("#itemAgregar")
const itemIMC = document.querySelector("#itemIMC")
const itemBorrar = document.querySelector("#itemBorrar")
const btnBuscar = document.querySelector("#btnBuscar")
const btnCalcular = document.querySelector("#btnCalcular")
const valorIMC = document.querySelector("spanIMC")
const textoIMC = document.querySelector("spanTEXTO")
const btnCerrarA = document.querySelector("#btnCerrarA")
const btnCerrarC = document.querySelector("#btnCerrarC")
const btnCerrarB = document.querySelector("#btnCerrarB")
//const campos = document.querySelectorAll("input")
const btnAgregar = document.querySelector("#btnAgregar")
const btnBorrar = document.querySelector("#btnBorrar")

const borrar = document.querySelector("#borrar")

const nombre = document.querySelector("#nombre")
const tipo = document.querySelector("#tipo")
const sabor = document.querySelector("#sabor")
const tiempo = document.querySelector("#tiempo")
const imagen = document.querySelector("#img-uploader")

btnAgregar.addEventListener("click", agregarReceta)
btnBorrar.addEventListener("click", borrarReceta)
btnBuscar.addEventListener("click", buscarReceta)
btnCalcular.addEventListener("click", realizarCotizacion)
btnCerrarA.addEventListener("click", cerrarAgregar)
btnCerrarC.addEventListener("click", cerrarIMC)
btnCerrarB.addEventListener("click", cerrarBorrar)

itemAgregar.addEventListener("click", mostrarAgregar)
itemIMC.addEventListener("click", mostrarIMC)
itemBorrar.addEventListener("click", mostrarBorrar)
// imagen.addEventListener()

function cerrarAgregar(){
    document.querySelector("#agregandoReceta").style.display = 'none';
}

function mostrarAgregar(){
    document.querySelector("#borrandoReceta").style.display = 'none';
    document.querySelector("#calculandoIMC").style.display = 'none';
    document.querySelector("#agregandoReceta").style.display = 'block';
}

function cerrarIMC(){
    document.querySelector("#calculandoIMC").style.display = 'none';
}

function mostrarIMC(){
    document.querySelector("#borrandoReceta").style.display = 'none';
    document.querySelector("#agregandoReceta").style.display = 'none';
    document.querySelector("#calculandoIMC").style.display = 'block';
}

function cerrarBorrar(){
    document.querySelector("#borrandoReceta").style.display = 'none';
}

function mostrarBorrar(){
    document.querySelector("#agregandoReceta").style.display = 'none';
    document.querySelector("#calculandoIMC").style.display = 'none';
    document.querySelector("#borrandoReceta").style.display = 'block';
}

const datosCompletosIMC = ()=> { 

    if (peso.value !== "Peso en kg" && altura.value !== "Altura en cm") {
        return true
    } else {
        return false 
    }
}

const datosCompletosAgregar  = ()=> { 

    if (nombre.value !== "Peso en kg" && altura.value !== "Altura en cm") {
        return true
    } else {
        return false 
    }
}


// $(document).ready(function(){

// 	$('#inicio').click(function(){
// 		$('body, html').animate({
// 			scrollTop: '0px'
// 		}, 300);
// 	});

// 	$(window).scroll(function(){
// 		if( $(this).scrollTop() > 0 ){
// 			$('#inicio').slideDown(300);
// 		} else {
// 			$('#inicio').slideUp(300);
// 		}
// 	});

// });

