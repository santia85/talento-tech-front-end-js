// Peliculas chicos

let peliculaschicos = [
  {
    nombre: "Mi pobre angelito",
    precio: 12,
    descuento: true,
    puntaje: "☆☆",
    descripcion: "Kevin se quedó solo en la casa después que sus padres lo olvidaron en navidad",
    imagen: "./Imagenes/peliculas/mipobreangelito.jpg",
    id: "870"
  },
  {
    nombre: "Toy Story",
    precio: 6,
    descuento: true,
    puntaje: "☆☆☆",
    descripcion: "Andy tiene un mundo de juguetes que cobran vida en su habitación",
    imagen: "./Imagenes/peliculas/toystory.jpg",
    id: "820"
  },
  {
    nombre: "Monster INC",
    precio: 12,
    descuento: false,
    puntaje: "☆☆☆☆",
    descripcion: "Los monstruos detrás del armario no son tan espeluznantes como parecen",
    imagen: "./Imagenes/peliculas/mosterinc.jpg",
    id: "830"
  }
];

function mostrarPeliculaschicos() {
  const contenedor = document.getElementById("pelicula");
  contenedor.innerHTML = "";

  for (let peli of peliculaschicos) {
    contenedor.innerHTML += `
      <div>
        <img class="card-imagen" src="${peli.imagen}" width="200px" height="300px" />
        <div class="card-body d-flex flex-column">
          <h5>${peli.nombre}</h5>
          <p>${peli.puntaje}</p>
          <p>${peli.descripcion}</p>
          <p class="text-muted">$${peli.precio}</p>
          <div class="carrito">
            <a href="#CarritoCompras" class="button btn-comprar" data-id="${peli.id}">Agregar al carrito</a>
          </div>
          <div class="espaciocarrito">
        </div>
      </div>
    `;
  }
}


function mostrarPeliculaschicoscondescuento() {
  const contenedor = document.getElementById("pelicula");
  contenedor.innerHTML = "";

  for (let peli of peliculaschicos) {
    if (peli.descuento) {
      contenedor.innerHTML += `
        <div>
          <img src="${peli.imagen}" width="200px" height="300px" />
          <div class="card-body d-flex flex-column">
            <h5>${peli.nombre}</h5>
            <p>${peli.puntaje}</p>
            <p class="text-muted">${peli.descripcion}</p>
            <p class="text-muted">$${peli.precio}</p>
            <div class="carrito">
              <a href="#CarritoCompras" class="button btn-comprar" data-id="${peli.id}">Agregar al carrito</a>
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

let peliculasgrandes = [
  {
    nombre: "Bettlejuice",
    precio: 7,
    descuento: true,
    puntaje: "☆☆☆",
    descripcion: "Descubre un mundo en una maqueta",
    imagen: "./Imagenes/peliculas/bettlejuice.jpg",
    id: "01"
  },
  {
    nombre: "Pulp Fiction",
    precio: 12,
    descuento: false,
    puntaje: "☆☆",
    descripcion: "La obra maestra de Quentin Tarantino, inolvidable",
    imagen: "./Imagenes/peliculas/pulpfiction.jpg",
    id: "02"
  },
  {
    nombre: "Volver al futuro",
    precio: 12,
    descuento: true,
    puntaje: "☆☆☆☆☆",
    descripcion: "Marty y Doc deben analizar si deben volver al pasado para cambiar su futuro",
    imagen: "./Imagenes/peliculas/volver_al_futuro.jpg",
    id: "03"
  }
];


// Muestra las peliculas grandes despues del click del boton

function mostrarPeliculasgrandes() {
  const contenedor = document.getElementById("pelicula");
  contenedor.innerHTML = "";

  for (let peli of peliculasgrandes) {
    contenedor.innerHTML += `
      <div>
        <img src="${peli.imagen}" width="200px" height="300px" />
        <div class="card-body d-flex flex-column">
          <h5>${peli.nombre}</h5>
          <p>${peli.puntaje}</p>
          <p class="text-muted">${peli.descripcion}</p>
          <p class="text-muted">$${peli.precio}</p>
          <div class="carrito">
            <a href="#CarritoCompras" class="button btn-comprar" data-id="${peli.id}">Agregar al carrito</a>
          </div>
        </div>
          <div class="espaciocarrito">
        </div>
      </div>
    `;
  }
}

// Muestra las peliculas grandes con descuento despues del click del boton


function mostrarPeliculasGrandesConDescuento() {
  const contenedor = document.getElementById("pelicula");
  contenedor.innerHTML = "";

  for (let peli of peliculasgrandes) {
    if (peli.descuento) {
      contenedor.innerHTML += `
        <div>
          <img src="${peli.imagen}" width="200px" height="300px" />
          <div class="card-body d-flex flex-column">
            <h5>${peli.nombre}</h5>
            <p>${peli.puntaje}</p>
            <p class="text-muted">${peli.descripcion}</p>
            <p class="text-muted">$${peli.precio}</p>
            <div class="carrito">
              <a href="#CarritoCompras" class="button btn-comprar" data-id="${peli.id}">Agregar al carrito</a>
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
    mostrarPeliculasgrandes();
  } else {
    alert("No podés ver películas para mayores. Aquí te dejamos películas que sí podés ver");
    mostrarPeliculaschicos();
  }
});

// Filtro de edad en peliculas para grandes con descuento

document.getElementById('miBotoncondescuento').addEventListener('click', function() {
  const persona = prompt("Indíquenos tu edad para poder acceder");
  if (parseInt(persona) > 18) {
    alert("Podés ver películas para mayores de edad");
    mostrarPeliculasGrandesConDescuento();
  } else {
    alert("No podés ver películas para mayores. Aquí te dejamos películas que sí podés ver");
    mostrarPeliculaschicos();
  }
});

// CARRITO

let carrito = [];
const productos = [...peliculasgrandes, ...peliculaschicos];

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


