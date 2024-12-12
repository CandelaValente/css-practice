document.addEventListener("DOMContentLoaded", () => {
  let productos = [];

  // Cargar JSON
  fetch("productos.json")
    .then(response => response.json())
    .then(data => {
      console.log(data);
      productos = data;
      mostrarProductos(productos);
    })
    .catch(error => console.error("Error al cargar el JSON:", error));

  // Mostrar productos en el DOM
  function mostrarProductos(lista) {
    const contenedor = document.getElementById("productos");
    contenedor.innerHTML = ""; // Limpiar contenido
    lista.forEach(producto => {
      const card = document.createElement("div");
      card.className = "col";
      card.innerHTML = `
      <div class="card">
                  <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
                  <div class="card-body">
                      <h5 class="card-title">${producto.nombre}</h5>
                      <p class="card-text">Categoría: ${producto.categoria} | Precio: $${producto.precio.toFixed(2)}</p>
                  </div>
      </div>
      `;
      contenedor.appendChild(card);
    });
  }

  // Filtros y Ordenamiento
  const categoriaSelect = document.getElementById("categoria");
  const ordenSelect = document.getElementById("orden");

  categoriaSelect.addEventListener("change", aplicarFiltros);
  ordenSelect.addEventListener("change", aplicarFiltros);

  function aplicarFiltros() {
    let productosFiltrados = [...productos];

    // Filtro por categoría
    const categoria = categoriaSelect.value;
    if (categoria !== "todos") {
      productosFiltrados = productosFiltrados.filter(
        producto => producto.categoria === categoria
      );
    }

    // Ordenamiento
    const orden = ordenSelect.value;
    if (orden === "asc") {
      productosFiltrados.sort((a, b) => a.precio - b.precio);
    } else if (orden === "desc") {
      productosFiltrados.sort((a, b) => b.precio - a.precio);
    }

    mostrarProductos(productosFiltrados);
  }
});