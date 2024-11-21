//${document}.ready: função que garante que o codigo dentro dela execute
//somente apos o HTML completo da pagina estar carregado
$(document).ready(function() {

    // Seleciona o conteiner . carousel e aplica a funçao slick()
    // que ativa o carrossel com as configurações abaixo
    $('.carousel').slick({

        //slidesToShow: numero de cards exibidos ao mesmo tempo no carrossel
        slidesToShow: 5, // exibe 3 cards ao mesmo tempo

        //slidesToScroll: define quantos cards serao deslizados ao mover o carrossel
        slidesToScroll: 1, // Move 1 car por vez ao deslizar

        // infinite: quando true, o carrossel retona ao inicio automaticamente
        Infinite: true, //mantem o carrossel em rotação continua

        //dots: quando true, ativa os pontos de navegação abaixo do carrossel
        dots: true, // adiciona pontos de navegação para os usuarios

        // arrows: exibe setas de navegação nas laterais do carrossel
        arrows: true, // ativa as setas para navegar entre os cards
    })
})