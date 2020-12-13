var link = $(".navbar-nav li a");
var Sec= $("section");

link.on("click", function(){
    var seletor = $(this).attr("href");
    var posicao = $(seletor).offset().top;
    $("html, body").animate({scrollTop: posicao},500);

});