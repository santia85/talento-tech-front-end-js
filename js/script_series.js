// Pelicu

let serieschicos = [
  {
    nombre: "Dinosaurios",
    precio: 12,
    descuento: true,
    puntaje: "☆☆",
    descripcion: "Más vivos que nunca",
    imagen: "./Imagenes/series/dinosaurios.jpg",
    id: "870"
  },

    {
    nombre: "Peppa Pig",
    precio: 12,
    descuento: false,
    puntaje: "☆☆",
    descripcion: "Soy peppa pig",
    imagen: "./Imagenes/series/Peppa_pig.jpg",
    id: "870"
  },
  
];

function mostrarSerieschicos() {
  const contenedor = document.getElementById("pelicula");
  contenedor.innerHTML = "";

  for (let serie of serieschicos) {
    contenedor.innerHTML += `
      <div>
        <img class="card-imagen" src="${serie.imagen}" width="200px" height="300px" />
        <div class="card-body d-flex flex-column">
          <h5>${serie.nombre}</h5>
          <p>${serie.puntaje}</p>
          <p>${serie.descripcion}</p>
          <p class="text-muted">$${serie.precio}</p>
          <div class="carrito">
            <a href="#CarritoCompras" class="button btn-comprar" data-id="${serie.id}">Agregar al carrito</a>
          </div>
          <div class="espaciocarrito">
        </div>
      </div>
    `;
  }
}


function mostrarSerieschicoscondescuento() {
  const contenedor = document.getElementById("pelicula");
  contenedor.innerHTML = "";

  for (let serie of serieschicos) {
    if (serie.descuento) {
      contenedor.innerHTML += `
        <div>
          <img src="${serie.imagen}" width="200px" height="300px" />
          <div class="card-body d-flex flex-column">
            <h5>${serie.nombre}</h5>
            <p>${serie.puntaje}</p>
            <p class="text-muted">${serie.descripcion}</p>
            <p class="text-muted">$${serie.precio}</p>
            <div class="carrito">
              <a href="#CarritoCompras" class="button btn-comprar" data-id="${serie.id}">Agregar al carrito</a>
            </div>
          </div>
            <div class="espaciocarrito">
        </div>
        </div>
      `;
    }
  }
}

// PELÍCULAS DE GRANDES

let seriesgrandes = [
  {
    nombre: "Alf",
    precio: 7,
    descuento: true,
    puntaje: "☆☆☆☆",
    descripcion: "No hay problema willy!",
    imagen: "./Imagenes/series/alf.jpg",
    id: "273"
  },
  {
    nombre: "Friends",
    precio: 12,
    descuento: false,
    puntaje: "☆☆",
    descripcion: "5 amigos de verdad",
    imagen: "./Imagenes/series/Friendsposter.webp",
    id: "2732"
  },
  {
    nombre: "Seinfield",
    precio: 12,
    descuento: true,
    puntaje: "☆☆☆☆☆",
    descripcion: "Un buen sonido del bajo cuando empieza",
    imagen: "./Imagenes/series/seinfield.jpg",
    id: "27320"
  }
];


// Muestra las peliculas grandes despues del click del boton

function mostrarSeriesgrandes() {
  const contenedor = document.getElementById("pelicula");
  contenedor.innerHTML = "";

  for (let serie of seriesgrandes) {
    contenedor.innerHTML += `
      <div>
        <img src="${serie.imagen}" width="200px" height="300px" />
        <div class="card-body d-flex flex-column">
          <h5>${serie.nombre}</h5>
          <p>${serie.puntaje}</p>
          <p class="text-muted">${serie.descripcion}</p>
          <p class="text-muted">$${serie.precio}</p>
          <div class="carrito">
            <a href="#CarritoCompras" class="button btn-comprar" data-id="${serie.id}">Agregar al carrito</a>
          </div>
        </div>
          <div class="espaciocarrito">
        </div>
      </div>
    `;
  }
}

// Muestra las peliculas grandes con descuento despues del click del boton


function mostrarSeriesGrandesConDescuento() {
  const contenedor = document.getElementById("pelicula");
  contenedor.innerHTML = "";

 for (let serie of seriesgrandes)
 {
    if (serie.descuento) {
      contenedor.innerHTML += `
        <div>
          <img src="${serie.imagen}" width="200px" height="300px" />
          <div class="card-body d-flex flex-column">
            <h5>${serie.nombre}</h5>
            <p>${serie.puntaje}</p>
            <p class="text-muted">${serie.descripcion}</p>
            <p class="text-muted">$${serie.precio}</p>
            <div class="carrito">
              <a href="#CarritoCompras" class="button btn-comprar" data-id="${serie.id}">Agregar al carrito</a>
            </div>
          </div>
             <div class="espaciocarrito">
        </div>
        </div>
      `;
    }
  }
}

// Filtro de edad en peliculas para grandes

document.getElementById('miBoton').addEventListener('click', function() {
  const persona = prompt("Indíquenos tu edad para poder acceder");
  if (parseInt(persona) > 18) {
    alert("Podés ver películas para mayores de edad");
    mostrarSeriesgrandes();
  } else {
    alert("No podés ver películas para mayores. Aquí te dejamos películas que sí podés ver");
    mostrarSerieschicos();
  }
});

// Filtro de edad en peliculas para grandes con descuento

document.getElementById('miBotoncondescuento').addEventListener('click', function() {
  const persona = prompt("Indíquenos tu edad para poder acceder");
  if (parseInt(persona) > 18) {
    alert("Podés ver películas para mayores de edad");
    mostrarSeriesGrandesConDescuento();
  } else {
    alert("No podés ver películas para mayores. Aquí te dejamos películas que sí podés ver");
    mostrarSerieschicos();
  }
});

// CARRITO

let carrito = [];
const productos = [...seriesgrandes, ...serieschicos];

// Delegación de eventos para los botones

document.getElementById("pelicula").addEventListener("click", manejarClicComprar);


// Maneja el click de los botones

function manejarClicComprar(evento) {
  if (evento.target.classList.contains("btn-comprar")) {
    const productoId = evento.target.dataset.id;
    agregarProductoAlCarrito(productoId);
  }
}


function agregarProductoAlCarrito(idProducto) {
  let productoEnCarrito = carrito.find(item => item.id === idProducto);

  if (productoEnCarrito) {
    productoEnCarrito.cantidad++;
  } else {
    const productoOriginal = productos.find(item => item.id === idProducto);
    if (productoOriginal) {
      carrito.push({ ...productoOriginal, cantidad: 1 });
    }
  }

  actualizarCarritoHTML();
}

function actualizarCarritoHTML() {
  const carritoCompras = document.getElementById("CarritoCompras");

  if (!carritoCompras) {
    console.error("No se encontró el contenedor con id 'CarritoCompras'");
    return;
  }

  // Mostrar el carrito solo si tiene productos
  if (carrito.length > 0) {
    carritoCompras.style.display = "block";
  } else {
    carritoCompras.style.display = "none";
  }

  carritoCompras.innerHTML = `
    <h2>Tu Carrito de Compras</h2>
    <ul class="lista-carrito"></ul>
    <p class="total-carrito"></p>
    <p class="cantidad-carrito"></p>
  `;


  const listaCarrito = carritoCompras.querySelector(".lista-carrito");
  let totalPagar = 0;

  if (carrito.length === 0) {
    listaCarrito.innerHTML = "<p>El carrito está vacío.</p>";
  } else {
    for (let item of carrito) {
      const li = document.createElement("li");
      li.innerHTML = `
        <span>${item.nombre} - $${item.precio} x ${item.cantidad}</span>
        <div class="bloque-carrito-de-compra">
          <button class="btn-cantidad" data-id="${item.id}" data-action="restar">-</button>
          <button class="btn-cantidad" data-id="${item.id}" data-action="sumar">+</button>
          <button class="btn-eliminar" data-id="${item.id}" data-action="eliminar">x</button>
        </div>
      `;
      listaCarrito.appendChild(li);
      totalPagar += item.precio * item.cantidad;
    }
  }

  carritoCompras.querySelector(".total-carrito").textContent = `Total a pagar: $${totalPagar}`;
  carritoCompras.querySelector(".cantidad-carrito").textContent = `Productos en carrito: ${carrito.length}`;

  listaCarrito.addEventListener("click", manejarClicCarrito);
}

function manejarClicCarrito(evento) {
  const target = evento.target;
  const id = target.dataset.id;
  const accion = target.dataset.action;

  if (accion === "sumar") {
    sumarCantidadProducto(id);
  } else if (accion === "restar") {
    restarCantidadProducto(id);
  } else if (accion === "eliminar") {
    eliminarProductoDelCarrito(id);
  }
}

function sumarCantidadProducto(idProducto) {
  const producto = carrito.find(p => p.id === idProducto);
  if (producto) {
    producto.cantidad++;
    actualizarCarritoHTML();
  }
}

function restarCantidadProducto(idProducto) {
  const producto = carrito.find(p => p.id === idProducto);
  if (producto) {
    producto.cantidad--;
    if (producto.cantidad <= 0) {
      eliminarProductoDelCarrito(idProducto);
    } else {
      actualizarCarritoHTML();
    }
  }
}

function eliminarProductoDelCarrito(idProducto) {
  carrito = carrito.filter(p => p.id !== idProducto);
  actualizarCarritoHTML();
}


