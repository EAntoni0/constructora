/*Abrir Menu*/


$("#Abrir, #Cerrar").click(function () {
    $("#MenuD").toggleClass("abrirmenu");
});



$(function () {
    $("#slider4").responsiveSlides({
        auto: false,
        pager: false,
        nav: true,
        speed: 500,
        namespace: "callbacks",
        before: function () {
            $('.events').append("<li>before event fired.</li>");
        },
        after: function () {
            $('.events').append("<li>after event fired.</li>");
        }
    });
});

$("#abrirAcordeon").click(function () {
    $("#verAcordeon").slideToggle();
    $(".icono").toggleClass("rotar")
});

$("#abrirAcordeon2").click(function () {
    $("#verAcordeon2").slideToggle();
    $(".icono2").toggleClass("rotar")
});

$("#abrirAcordeon3").click(function () {
    $("#verAcordeon3").slideToggle();
    $(".icono3").toggleClass("rotar")
});

$("#abrirAcordeon4").click(function () {
    $("#verAcordeon4").slideToggle();
    $(".icono4").toggleClass("rotar")
});

Fancybox.bind("[data-fancybox]", {
    // Your custom options
});

//animaciones WOW
new WOW().init();


$("#boton_modal").click(function () {
    $("#modal").addClass("mostrar");
})

$("#cerrar_modal").click(function () {
    $("#modal").removeClass("mostrar");
})




// click por fuera
window.onclick = function (event) {
    if (event.target == modal) {
        $("#modal").removeClass("mostrar");
    }
};

// click tecla ESC
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        $("#modal").removeClass("mostrar");
    }
});