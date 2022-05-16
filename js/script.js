const cad = `
    <nav class="nav">
        <img src="./img/logo-szabo-sss.png" class="logo nav-link" alt="Logo Coghlan">
        <button class="nav-toggle" aria-label="Abrir menú">
            <i class="fa-solid fa-bars"></i>
        </button>
        <ul class="nav-menu">
            <li class="nav-menu-item">
                <a href="index.html" class="nav-menu-link nav-link">El Barrio</a>            
            </li>
            <li class="nav-menu-item">
                <a href="arte.html" class="nav-menu-link nav-link">Arte</a>
            </li>
            <li class="nav-menu-item">
                <a href="contacto.html" class="nav-menu-link nav-link nav-menu-link_active">Contacto</a>
            </li>
        </ul>
    </nav>
`
document.getElementById("idheader").innerHTML=cad;


const navToggle = document.querySelector(".nav-toggle")
const navMenu = document.querySelector(".nav-menu")

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");

    if (navMenu.classList.contains("nav-menu_visible")) {
        navToggle.setAttribute("aria-label", "Cerrar menú");
    } else {
        navToggle.setAttribute("aria-label", "Abrir menú");
    }
});

// Header -----------------------------------



