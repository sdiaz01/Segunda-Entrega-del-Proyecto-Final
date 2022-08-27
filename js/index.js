
function generadorAutomatico() {
    recetas.push(new Receta('MARQUISE','TORTA', "DULCE", '2 HORAS', './fotos/rogel.jpeg'))
    recetas.push(new Receta('BROWNIE DE CHOCOLATE','POSTRE', "DULCE", '1 HORA','./fotos/brownie.jpeg'))
    recetas.push(new Receta('LEMON PIE','TORTA', "LIMON", '1:30 HORAS', './fotos/lemonpie.jpeg'))
    recetas.push(new Receta('FLAN','POSTRE', "DULCE", '30 MINUTOS', './fotos/flan.jpg'))
    recetas.push(new Receta('GALLETAS DE MANTECA','PARA EL TÉ', "DULCE", '30 MINUTOS', './fotos/galletasdemanteca.jpeg'))
    recetas.push(new Receta('ALFAJORES DE MAICENA','ALFAJOR', "DULCE", '1:30 HORAS', './fotos/alfajordemaicena.jpeg'))
    recetas.push(new Receta('PASTAFROLA','TORTA', "DULCE", '1 HORA', './fotos/pastafrola.jpeg'))
    recetas.push(new Receta('BAGLES','APERITIVO', "SALADO", '3 HORAS', './fotos/bagles.jpeg'))
    recetas.push(new Receta('TIRAMISÚ','POSTRE', "DULCE", '1 HORA', './fotos/tiramisu.jpeg'))
    recetas.push(new Receta('CARROT CAKE','TORTA', "DULCE", '2:30 HORAS', './fotos/carrotcake.jpeg'))
    recetas.push(new Receta('BUDIN DE LIMON','PARA EL TÉ', "SEMI AMARGO", '2 HORAS', './fotos/budindelimon.jpeg'))

    console.log("Se generaron recetas automaticamente.")
}

generadorAutomatico()

function agregarIngredientes(receta) {

    let seguimos = true
    let cantIngredientes = 0
    let nombreReceta = receta.nombre

    while(seguimos) {

    let ing = (prompt("Agregar ingrediente:")).toUpperCase()
    let cantidad = (prompt("Cantidad del ingrediente ingresado:")).toUpperCase()

    if (ing == "" || cantidad == "" || ing == null || cantidad == null) {
        console.error("Los campos no pueden quedar vacios!")
    }
    else {
         console.log(ing, ",", cantidad)
         cantIngredientes++
         ingredientes.push(new Ingrediente(nombreReceta, ing, cantidad))
    }

    seguimos = confirm("¿Desea agregar otro ingrediente?")

         if ((seguimos == false) && (cantIngredientes < 3)) {
        console.warn("Debe agregar minimo 3 ingredientes.")
        seguimos = true
        } 

    }
    console.log("Cantidad de ingredientes: ", cantIngredientes)
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

        let borrarR = (borrar.value).toUpperCase()

        const resultado = recetas.some(receta => receta.nombre === borrarR)
    
        if (resultado == true) {

            recetas.pop(borrarR)
            borrar.value = ""
            console.table(recetas)
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

 const calcularIMC = ()=> { 

    const imc = new IMC(peso.value, altura.value)
    let resultadoIMC = imc.calcular()
     if (datosCompletosIMC(true)) {
 
              valorIMC.innerText = resultadoIMC
            
    } 
        debugger
    if (resultadoIMC >= 18.5 && resultadoIMC <= 24.9) {
        textoIMC.innerText = "Su peso se encuentra normal"
    } else if (resultadoIMC > 25){
        textoIMC.innerText = "Su peso se encuentra por arriba del limite"
    } else if (resultadoIMC < 18.4){
        textoIMC.innerText = "Su peso se encuentra por debajo del limite"
    }

    peso.value = ""
    altura.value = ""

}

const agregarReceta = ()=> { 

    const resultado = recetas.some(receta => receta.nombre === (nombre.value).toUpperCase())

    if (datosCompletosAgregar(true) && resultado === false) {

    recetas.unshift(new Receta((nombre.value).toUpperCase(),(tipo.value).toUpperCase(), (sabor.value).toUpperCase(), (tiempo.value).toUpperCase(), './fotos/proximamente.jpg'))

    nombre.value = ""
    tipo.value = ""
    sabor.value = ""
    tiempo.value = ""
    textoAgregar.innerText = ""

    cargarRecetas()

    } else if (datosCompletosAgregar(true) && resultado === true){
        nombre.value = ""
        tipo.value = ""
        sabor.value = ""
        tiempo.value = ""
        textoAgregar.innerText = "¡LA RECETA YA EXISTE!"

    }

}
