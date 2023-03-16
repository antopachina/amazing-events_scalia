const divElementos = document.getElementById('elementos')
const divCheckFilter = document.getElementById('checkFilter')
const input = document.querySelector('input')

input.addEventListener('input',filtroDoble)
divCheckFilter.addEventListener('change',filtroDoble)

function filtroDoble(){
    let primerFiltro = filtrarPorTexto(data.events,input.value)
    let segundoFiltro = filtrarPorCategoria(primerFiltro)
    pintarEventos(segundoFiltro)
}

pintarEventos(data.events)
crearCheckBoxes(data.events)

function crearCheckBoxes(array){
    let arrayCategorias = array.map(evento => evento.category)
    let setCategoria = new Set(arrayCategorias)
    let arrayChecks = Array.from(setCategoria)
    let checkboxes = ''
    arrayChecks.forEach(category => {
        checkboxes += `<div class="form-check form-switch">
        <input class="form-check-input" type="checkbox" role="switch" id="${category}" value="${category}">
        <label class="form-check-label" for="${category}">${category}</label>
      </div>`
    })
    divCheckFilter.innerHTML = checkboxes
}
function pintarEventos(array){
    if(array.length == 0){
        divElementos.innerHTML = `<h2 class="display-1 fw-bolder">Not events</h2>`
        return
    }
let tarjetas = ' '
    for(evento of data.events){
        array.forEach(evento => {
            tarjetas += `<div class="card" style="width: 18rem;">
            <img class="card-img-top object-fit-cover mw-100 h-75" src=${evento.image} alt="Card image cap">
                <div class="card-body justify-content-center align-items-center">
                    <h5 class="card-title">${evento.name}</h5>
                    <p class="card-text">${evento.description}</p>
                    <div class="d-flex flex-wrap gap-3 justify-content-center align-items-center">
                    <p>Price: $${evento.price}</p>
                    <a href="./details.html?id=${evento._id}" class="btn btn-primary bg-wine">Details</a>
                    </div>
                </div>
                </div>`
                })
            }
        console.log(tarjetas);
        console.log(evento._id);
        divElementos.innerHTML = tarjetas
    }

function filtrarPorTexto(array,texto){
    let arrayFiltrado = array.filter(elemento => elemento.name.toLowerCase().includes(texto.toLowerCase()))
    return arrayFiltrado
}
function filtrarPorCategoria(array){
    let checkboxes = document.querySelectorAll("input[type='checkbox']")
    console.log(checkboxes);
    let arrayChecks = Array.from(checkboxes)
    let arrayChecksChecked = arrayChecks.filter(check => check.checked)
    console.log(arrayChecksChecked);
    let arrayChecksCheckedValues = arrayChecksChecked.map(checkChecked => checkChecked.value)
    console.log(arrayChecksCheckedValues);
    let arrayFiltrado = array.filter(elemento => arrayChecksCheckedValues.includes(elemento.category))
    console.log(arrayFiltrado);
    if(arrayChecksChecked.length > 0){
        return arrayFiltrado
    }
    return array
}
/*

let tarjetas = ' '
for(evento of data.events){
    tarjetas += `<div class="card" style="width: 18rem;">
        <img class="card-img-top object-fit-cover mw-100 h-75" src=${evento.image} alt="Card image cap">
            <div class="card-body justify-content-center align-items-center">
                <h5 class="card-title">${evento.name}</h5>
                <p class="card-text">${evento.description}</p>
                <div class="d-flex flex-wrap gap-3 justify-content-center align-items-center">
                <p>Price: $${evento.price}</p>
                <a href="./details.html?id=${evento._id}" class="btn btn-primary bg-wine">Details</a>
                </div>
            </div>
            </div>`
            }
            console.log(tarjetas);
            console.log(evento._id);

divElementos.innerHTML = tarjetas*/