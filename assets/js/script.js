



//ACTIVAR Y DESACTIVAR MODO NOCHE
function modoNoche(){
    if(document.getElementById('boton-noche').innerHTML == "<img src=\"https://cdn-icons-gif.flaticon.com/14639/14639118.gif\" alt=\"Modo Noche\" width=\"40px\" height=\"40px\" border-radius=\"20px\" class=\"d-inline-block rounded\">"){
        document.getElementById('boton-noche').innerHTML = "<img src=\"https://cdn-icons-gif.flaticon.com/11708/11708865.gif\" alt=\"Modo Dia\" width=\"40px\" height=\"40px\" border-radius=\"20px\" class=\"d-inline-block rounded\">";
        document.querySelector("body").setAttribute("data-bs-theme","light");
    }else{
        document.getElementById('boton-noche').innerHTML = "<img src=\"https://cdn-icons-gif.flaticon.com/14639/14639118.gif\" alt=\"Modo Noche\" width=\"40px\" height=\"40px\" border-radius=\"20px\" class=\"d-inline-block rounded\">";
        document.querySelector("body").setAttribute("data-bs-theme","dark");
    }
}

//RESALTAR BOTONES NAVBAR
$('.nav-item').hover(function(){
    $(this).toggleClass('fst-italic fw-bold');
}, function() {
    $(this).toggleClass('fst-italic fw-bold');
});
//RESALTAR SECCION HABILIDADES
$('.habjs').hover(function(){
    $(this).toggleClass('fw-bold');
}, function() {
    $(this).toggleClass('fw-bold');
});


//BOTONES PROYECTOS
$("#btnmuestrario1").click(function() {
    cerrarMuestrarios();
    $("#muestrario1").show();
});
$("#btnmuestrario2").click(function() {
    cerrarMuestrarios();
    $("#muestrario2").show();
});
$("#btnmuestrario3").click(function() {
    cerrarMuestrarios();
    $("#muestrario3").show();
});
$("#btnmuestrario4").click(function() {
    cerrarMuestrarios();
    $("#muestrario4").show();
});
$("#btnmuestrario5").click(function() {
    cerrarMuestrarios();
    $("#muestrario5").show();
});
$("#btnmuestrario6").click(function() {
    cerrarMuestrarios();
    $("#muestrario6").show();
});
 
$("#nav-item1").click(function() {
    $(window).scrollTop($('#divinformacion').offset().top - 100);
});
$("#nav-item2").click(function() {
    $(window).scrollTop($('#divhabilidades').offset().top - 100);
});
$("#nav-item3").click(function() {
    $(window).scrollTop($('#divproyectos').offset().top - 100);
});
$("#nav-item4").click(function() {
    $(window).scrollTop($('#divcontactos').offset().top - 100);
});


//MENSAJE FORMULARIO DE CONTACTO
document.getElementById('formcontacto').addEventListener('submit', function(event){
    event.preventDefault();
    document.getElementById('alertcontacto').style.display = 'block';
    $("#alertcontacto").fadeOut(5000);
    document.getElementById("formcontacto").reset();
});

//MENSAJE FORMULARIO NEWSLETTER
document.getElementById('formnewsletter').addEventListener('submit', function(event){
    event.preventDefault();
    document.getElementById('alertnewsletter').style.display = 'block';
    $("#alertnewsletter").fadeOut(5000);
    document.getElementById("formnewsletter").reset();
});

//CERRAR MUESTRARIOS
function cerrarMuestrarios(){
    $(".muestrario").hide();
}



 