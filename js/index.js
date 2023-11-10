$('.boing').click(function(){
    $('.menu-mobile ul .itens-drop').toggleClass('mostra');
});

var hamburguer = document.querySelector(".btnAbra");

hamburguer.addEventListener("click", function(){
    document.querySelector (".menu-mobile") .classList.toggle ("mostra")
});

var hamburguer = document.querySelector(".btnFecha");

hamburguer.addEventListener("click", function(){
    document.querySelector (".menu-mobile") .classList.toggle ("mostra")
});


$('.boing').mouseover(function(){
    $('.menu-mobile ul .seta').toggleClass('girar');
});




/* FILTRAR IMAGENS NA CAIXA DE PESQUISA */
    
let searchBox = document.querySelector('#search-box');
let images = document.querySelectorAll('.container .container-image .image');

searchBox.oninput = () => {
    images.forEach(hide => hide.Style.display = 'nome');
    let value = searchBox.value;

    images.forEach(filter => {
        let title = filter.getAttribute('data-title');

        if(value == title){
            filter.style.display = "block";
        }
    
        if(searchBox.value == ""){
            filter.style.display = "block";
        }
    });

   
};

