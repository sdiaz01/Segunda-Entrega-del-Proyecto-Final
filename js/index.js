
function generadorAutomatico() {
    recetas.push(new Receta('MARQUISE', 'TORTA', "DULCE", '2 HORAS', './fotos/rogel.jpeg'))
    recetas.push(new Receta('BROWNIE DE CHOCOLATE', 'POSTRE', "DULCE", '1 HORA', './fotos/brownie.jpeg'))
    recetas.push(new Receta('LEMON PIE', 'TORTA', "LIMON", '1:30 HORAS', './fotos/lemonpie.jpeg'))
    recetas.push(new Receta('FLAN', 'POSTRE', "DULCE", '30 MINUTOS', './fotos/flan.jpg'))
    recetas.push(new Receta('GALLETAS DE MANTECA', 'PARA EL TÉ', "DULCE", '30 MINUTOS', './fotos/galletasdemanteca.jpeg'))
    recetas.push(new Receta('ALFAJORES DE MAICENA', 'ALFAJOR', "DULCE", '1:30 HORAS', './fotos/alfajordemaicena.jpeg'))
    recetas.push(new Receta('PASTAFROLA', 'TORTA', "DULCE", '1 HORA', './fotos/pastafrola.jpeg'))
    recetas.push(new Receta('BAGLES', 'APERITIVO', "SALADO", '3 HORAS', './fotos/bagles.jpeg'))
    recetas.push(new Receta('TIRAMISÚ', 'POSTRE', "DULCE", '1 HORA', './fotos/tiramisu.jpeg'))
    recetas.push(new Receta('CARROT CAKE', 'TORTA', "DULCE", '2:30 HORAS', './fotos/carrotcake.jpeg'))
    recetas.push(new Receta('BUDIN DE LIMON', 'PARA EL TÉ', "SEMI AMARGO", '2 HORAS', './fotos/budindelimon.jpeg'))

    console.log("Se generaron recetas automaticamente.")
}

generadorAutomatico()



const realizarCotizacion = () => {

    const imc = new IMC(peso.value, altura.value)

    if (datosCompletosIMC(true)) {

        valorIMC.innerText = imc.calcular()

    } else {
        alert("error")
    }

    if (imc.calcular() >= 18.5 && imc <= 24.9) {
        textoIMC.innerText = "Su peso se encuentra normal"
    } else if (imc.calcular() > 25) {
        textoIMC.innerText = "Su peso se encuentra por arriba del limite"
    } else if (imc.calcular() < 18.4) {
        textoIMC.innerText = "Su peso se encuentra por debajo del limite"
    }

}

function buscarReceta() {

    const resultado = recetas.filter(receta => receta.nombre.includes((buscar.value).toUpperCase()))

    const cuerpo = document.getElementById("cuerpo")
    cuerpo.innerHTML = ""
    cuerpo.innerHTML += `
                          <div class="grid-item">
                          <div class="card">
                            <img class="card-img" src="${receta.imagen}">
                            <div class="card-content">
                              <h1 class="card-header">${receta.nombre}</h1>
                              <br><br>
                               <p class="card-text">${receta.tipo}</p>
                               <p class="card-text">${receta.sabor}</p>
                               <p class="card-text">${receta.tiempo}</p>
                              <button class="card-btn">Ver <span>&rarr;</span></button>
                            </div>
                          </div>
                          </div>
                          `

}


function borrarReceta() {
    debugger
    borrar.value = (borrar.value).toUpperCase()
    const resultado = recetas.some(receta => receta.nombre === (borrar.value))

    if (resultado === true) {
        recetas.pop(borrar.value)
        borrar.value = ""
        cargarRecetas()
    } else {
        document.querySelector("#borrandoReceta").style.display = 'none';

    }

}



function cargarRecetas() {

    const cuerpo = document.getElementById("cuerpo")
    cuerpo.innerHTML = ""
    recetas.forEach(receta => {
        cuerpo.innerHTML += `
                                <div class="grid-item">
                                <div class="card">
                                  <img class="card-img" src="${receta.imagen}">
                                  <div class="card-content">
                                    <h1 class="card-header">${receta.nombre}</h1>
                                    <br><br>
                                     <p class="card-text">${receta.tipo}</p>
                                     <p class="card-text">${receta.sabor}</p>
                                     <p class="card-text">${receta.tiempo}</p>
                                    <button class="card-btn">Ver <span>&rarr;</span></button>
                                  </div>
                                </div>
                                </div>
                                `
    })
}

cargarRecetas()

function agregarReceta() {


    recetas.unshift(new Receta(nombre.value, tipo.value, sabor.value, tiempo.value, './fotos/proximamente.jpg'))

    nombre.value = ""
    tipo.value = ""
    sabor.value = ""
    tiempo.value = ""

    cargarRecetas()


}
