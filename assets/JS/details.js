console.log(data)
const querySearch = document.location.search
const id = new URLSearchParams(querySearch).get("id")
let eventosData = data.events
const evento = eventosData.find(evento => evento._id == id)
console.log(evento)
const divElementos = document.getElementById('elementos')
divElementos.innerHTML = `
<div class="card" style="width: 50rem;">
<img class="card-img-top object-fit-cover mw-100 h-75" src="${evento.image}" alt="Card image cap">
    <div class="card-body justify-content-center align-items-center">
        <h5 class="card-title">${evento.name}</h5>
        <p class="card-text">${evento.description}</p>
        <p class="card-text">Date: ${evento.date}</p>
        <p class="card-text">Categoty: ${evento.category}</p>
        <p class="card-text">Place: ${evento.place}</p>
        <p class="card-text">Capacity: ${evento.capacity}</p>
        <p class="card-text">Assistance: ${evento.assistance}</p>
               <p>Price: $${evento.price}</p>
         <div class="d-flex flex-wrap gap-3 justify-content-end">
         <a href="./index.html" class="btn btn-primary bg-wine">Return</a>
        </div>
    </div>
    </div>`