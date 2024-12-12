document.getElementById("header").innerHTML = `

 <header>
        <nav>
            <ul>
                <li><i class="fi fi-br-menu-burger"></i></li>
                <li><a href=""><img src="./img/logo.png" alt=""></a></li>
                <li><a href="./index.html">Home</a></li>
                <li><a href="./login.html">Account</a></li>
                <li> <a href="">Orders</a></li>
                <li> <a href="./shop.html">Shop</a></li>
                 <button id="mode-toggle" class="mode-toggle" type="button">Modo Oscuro</button>
                <li><label for="">
                        <i class="fi fi-rc-search"></i>
                        <input type="search" name="" id="" placeholder="Search..."></li>
                </label>
                <li><i class="fi fi-rr-shopping-cart"></i></li>
            </ul>
        </nav>

    </header>
`;

document.getElementById("footer").innerHTML = `
  <footer>
    <p>© 2024 Mi Sitio Web - Todos los derechos reservados.</p>
  </footer>
`;

document.getElementById("newProduct").addEventListener("click", () => {
    let nombre = document.getElementById("nombre").value;
    let precio = document.getElementById("precio").value;

    if (nombre && precio) {
        const newCard = document.createElement("div");
        newCard.className = "card";
        newCard.innerHTML = `
         
                <img src="./img/1.jpeg" alt="">
                <h6>${nombre}</h6>
                <p>${precio}</p>
       
        `;
        document.querySelector(".card-container").appendChild(newCard);

    } else {
        alert("Por favor, completa todos los campos.");
    }
});
// document.getElementById("mode-toggle").addEventListener("click", () => {
//     document.body.classList.toggle("dark-mode");
//     const toggleButton = document.getElementById("mode-toggle");
//     toggleButton.textContent = 
//       document.body.classList.contains("dark-mode") ? "Modo Claro" : "Modo Oscuro";
//   });
  
