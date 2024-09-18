let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("gamemaker2");
        habilidades[3].classList.add("pyton");
        habilidades[4].classList.add("C");
        habilidades[5].classList.add("mySQLGithub");
        habilidades[6].classList.add("comunicacion");
        habilidades[7].classList.add("trabajoenequipo");
        habilidades[8].classList.add("creatividad");
        habilidades[9].classList.add("dedicacion");
        habilidades[10].classList.add("autodidacto");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 

//FILTROS
let btnFiltros = document.querySelectorAll(".filtro");
let productos = document.querySelectorAll(".item-producto");
let productsPerLoad = 3;
let currentFilter = 'all';
let loadCount = 0;

btnFiltros.forEach(function(i){
    i.addEventListener('click', function(e){
        // quito la clase selected
        btnFiltros.forEach(btn => btn.classList.remove("selected"));

        // agrego la clase selected
        e.target.classList.add("selected");

        // tomo el id que selecciono
        var clase = e.target.id;
        filterProducts(clase);
    });
});

function filterProducts(filter) {
    currentFilter = filter;
    loadCount = 0;
    productos.forEach(product => {
        product.classList.add('hidden');
    });

    const filteredProducts = filter === 'all' ? productos : document.querySelectorAll('.item-producto.' + filter);
    filteredProducts.forEach((product, index) => {
        if (index < productsPerLoad) {
            product.classList.remove('hidden');
        }
    });

    document.querySelector('.load-more').style.display = filteredProducts.length > productsPerLoad ? 'block' : 'none';
    document.querySelector('.load-less').style.display = 'none';
}

function loadMore() {
    loadCount++;
    const filteredProducts = currentFilter === 'all' ? productos : document.querySelectorAll('.item-producto.' + currentFilter);
    filteredProducts.forEach((product, index) => {
        if (index < productsPerLoad * (loadCount + 1)) {
            product.classList.remove('hidden');
        }
    });

    if (productsPerLoad * (loadCount + 1) >= filteredProducts.length) {
        document.querySelector('.load-more').style.display = 'none';
    }
    document.querySelector('.load-less').style.display = 'block';
}

function loadLess() {
    if (loadCount > 0) {
        loadCount--;
        const filteredProducts = currentFilter === 'all' ? productos : document.querySelectorAll('.item-producto.' + currentFilter);
        filteredProducts.forEach((product, index) => {
            if (index >= productsPerLoad * (loadCount + 1)) {
                product.classList.add('hidden');
            }
        });

        if (loadCount === 0) {
            document.querySelector('.load-less').style.display = 'none';
        }
        document.querySelector('.load-more').style.display = 'block';
    }
}

// Initialize with all products
filterProducts('all');