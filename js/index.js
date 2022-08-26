
function generadorAutomatico() {
    recetas.push(new Receta('MARQUISE','TORTA', "DULCE", '2 HORAS', './fotos/rogel.jpeg'))
    recetas.push(new Receta('BROWNIE DE CHOCOLATE','POSTRE', "DULCE", '1 HORA','./fotos/brownie.jpeg'))
    recetas.push(new Receta('LEMON PIE','TORTA', "LIMON", '1:30 HORAS', './fotos/lemonpie.jpeg'))
    recetas.push(new Receta('FLAN','POSTRE', "DULCE", '30 MINUTOS', './fotos/flan.jpg'))
    recetas.push(new Receta('GALLETAS DE MANTECA','PARA EL TÉ', "DULCE", '30 MINUTOS', './fotos/galletasdemanteca.jpeg'))
    recetas.push(new Receta('ALFAJORES DE MAICENA','ALFAJOR', "DULCE", '1:30 HORAS', './fotos/alfajordemaicena.jpeg'))
    recetas.push(new Receta('PASTAFROLA','TORTA', "DULCE", '1 HORA', './fotos/pastafrola.jpeg'))
    recetas.push(new Receta('BAGLES','APERITIVO', "SALADO", '3 HORAS', './fotos/bagles.jpeg'))
    // recetas.push(new Receta('SCONES DE QUESO','PARA EL TÉ', "SALADO", '45 MINUTOS', './fotos/flan.jpg'))
    recetas.push(new Receta('TIRAMISÚ','POSTRE', "DULCE", '1 HORA', './fotos/tiramisu.jpeg'))
    recetas.push(new Receta('CARROT CAKE','TORTA', "DULCE", '2:30 HORAS', './fotos/carrotcake.jpeg'))
    // recetas.push(new Receta('PANQUEQUES','POSTRE', "DULCE", '30 MINUTOS', './fotos/flan.jpg'))
    recetas.push(new Receta('BUDIN DE LIMON','PARA EL TÉ', "SEMI AMARGO", '2 HORAS', './fotos/budindelimon.jpeg'))
    ingredientes.push(new Ingrediente('BROWNIE DE CHOCOLATE', 'CHOCOLATE', '200 GRAMOS'))
    ingredientes.push(new Ingrediente('BROWNIE DE CHOCOLATE', 'HARINA', '2 TAZAS'))
    ingredientes.push(new Ingrediente('BROWNIE DE CHOCOLATE', 'AGUA', '1 VASO'))
    ingredientes.push(new Ingrediente('FLAN', 'LECHE', '1 LITRO'))
    ingredientes.push(new Ingrediente('FLAN', 'HUEVO', '5 HUEVOS'))
    ingredientes.push(new Ingrediente('FLAN', 'AZUCAR', '100 GRAMOS'))
    console.log("Se generaron recetas automaticamente.")
}

generadorAutomatico()

function nuevaReceta() {
    
    let nombre = (prompt("Ingrese el nombre de la receta")).toUpperCase()
    let tipo = (prompt("Ingrese el tipo de la receta", "Ej: comida, bebida, postre, torta, snack")).toUpperCase()
    let sabor = (prompt("Ingrese el sabor de la receta", "Ej: dulce, salado, agridulce, amargo")).toUpperCase()
    let tiempo = (prompt("Ingrese el tiempo aproximado de elaboración")).toUpperCase()

    receta = new Receta(nombre, tipo, sabor, tiempo)

    recetas.push(receta)
    console.table(recetas)

    let agregarAhora = true

    agregarAhora = confirm("¿Desea agregar los ingredientes de la receta?")

    if (agregarAhora) {       
       agregarIngredientes(receta)
    } 
        console.log("La receta fue agregada exitosamente.")
}

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



const realizarCotizacion = ()=> { 

    const imc = new IMC(peso.value, altura.value)

     if (datosCompletosIMC(true)) {
 
            valorIMC.innerText = imc.calcular()
            
    } else {
        alert("error")
    }

    if (imc.calcular() >= 18.5 && imc <= 24.9) {
        textoIMC.innerText = "Su peso se encuentra normal"
    } else if (imc.calcular() > 25){
        textoIMC.innerText = "Su peso se encuentra por arriba del limite"
    } else if (imc.calcular() < 18.4){
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
        
 
//     cargarRecetas()
//    let borrar = (prompt("Ingrese el nombre de la receta que desea borrar:")).toUpperCase()
//    const resultado = recetas.some(receta => receta.nombre === borrar)
 
//    if (resultado === true) {
//     let quieroBorrar = true
//     const mostrarReceta = recetas.find(receta => receta.nombre === borrar)
//          console.table(mostrarReceta)
//     quieroBorrar = confirm("¿Esta segur@ que desea eliminar esta receta?")
//         if (quieroBorrar == true) {
//         recetas.pop(borrar)
//         console.warn("Se ha eliminado la receta:", borrar)
//         } else {
//          console.log("No se ha borrado la receta.")
//         } 
//    } else {
//         console.error("No se ha encontrado la receta", borrar)
//    }

}

function ordenarRecetas() {
    console.clear()
    recetas.sort((a, b) => {
        if (a.nombre > b.nombre) {
            return 1
        }
        if (a.nombre < b.nombre) {
            return -1
        }
        return 0
    })
    console.table(recetas)
}

function listarReceta() {
    console.table(recetas)
    
}

function mostrarIngredientes() {
    
    let busquedaIng = (prompt("Ingresa la receta a buscar:")).toUpperCase()
    const resultado = ingredientes.filter(ingrediente => ingrediente.nombre.includes(busquedaIng))
    console.table(resultado)
    
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

 function recargarAgregar() {


    recetas.unshift(new Receta(nombre.value,tipo.value, sabor.value, tiempo.value, './fotos/proximamente.jpg'))

    nombre.value = ""
    tipo.value = ""
    sabor.value = ""
    tiempo.value = ""

    cargarRecetas()


}
