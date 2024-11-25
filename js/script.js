// Insertar Header
document.getElementById("header").innerHTML = `
<header>
  <nav class="navbar navbar-expand-lg ">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"><img src="./img/logo.png" alt=""></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="./index.html">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./shop.html">Shop</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">My orders</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Account
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="./login.html">Iniciar Sesión</a></li>
              <li><a class="dropdown-item" href="./registro.html">Registrate</a></li>
              
            </ul>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</header>

`;







// `
//   <header>
//         <nav class="navbar navbar-expand-lg">
//             <div class="container-fluid">
//                 <a class="navbar-brand" href="#"><img src="./img/logo.png" alt=""></a>
//                 <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
//                     data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
//                     aria-expanded="false" aria-label="Toggle navigation">
//                     <span class="navbar-toggler-icon"></span>
//                 </button>
//                 <div class="collapse navbar-collapse" id="navbarSupportedContent">
//                     <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//                         <li class="nav-item">
//                             <a class="nav-link active" aria-current="page" href="./index.html">Home</a>
//                         </li>
//                         <li class="nav-item">
//                             <a class="nav-link" href="#">Mujer</a>
//                         </li>
//                         <li>
//                         <form class="d-flex" role="search">
//                         <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
//                         <button class="btn btn-outline-success" type="submit">Search</button>
//                         </form>
//                         </li>
//                         <li class="nav-item dropdown">
//                         <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
//                         aria-expanded="false">
//                         Account
//                         </a>
//                         <ul class="dropdown-menu">

//                         <li><a class="dropdown-item" href="./login.html">Inicia sesión</a></li>
//                         <li><a class="dropdown-item" href="./registro.html">Registrate</a></li>

//                         </ul>
//                         </li>
//                         </ul>
//                         </div>
//                         </div>
//                         </nav>
//     </header>
// `;

// Insertar Footer
document.getElementById("footer").innerHTML = `
  <footer>
    <p>© 2024 Mi Sitio Web - Todos los derechos reservados.</p>
  </footer>
`;


document.getElementById("newProduct").addEventListener("click", () => {
  const nombre = document.getElementById("nombre").value;
  const precio = document.getElementById("precio").value;
  if (nombre && precio) {

    const nuevaCard = document.createElement("div");
    nuevaCard.className = "col";
    nuevaCard.innerHTML = `
    <div class="card">
      <img src="./img/1.jpeg" class="card-img-top" alt="...">
      <div class="card-body">
                      <h5 class="card-title">${nombre}</h5>
                      <p class="card-text">${precio}</p>
      </div>
    </div>
    `;
    document.querySelector(".row ").appendChild(nuevaCard);
  } else {
    alert("Por favor, completa todos los campos.");
  }




});