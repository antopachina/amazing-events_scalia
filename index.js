console.log([document]);
const divElementos = document.getElementById('elementos')
let tarjetas = ' '

for(evento of data.events){
    tarjetas += `<div class="card" style="width: 18rem;">
        <img class="card-img-top object-fit-cover mw-100 h-75" src=${evento.image} alt="Card image cap">
            <div class="card-body justify-content-center align-items-center">
                <h5 class="card-title">${evento.name}</h5>
                <p class="card-text">${evento.description}</p>
                <div class="d-flex flex-wrap gap-3 justify-content-center align-items-center">
                <p>Price: $${evento.price}</p>
                <a href="./details.html" class="btn btn-primary bg-wine">See more</a>
                </div>
            </div>
            </div>`
            }
            console.log(tarjetas);
            divElementos.innerHTML = tarjetas
   