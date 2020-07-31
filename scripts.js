$(function(){
    setInterval(function(){ 
        var hoy = new Date();
    
        var dia = hoy.getDay();
        var mes = hoy.getMonth();
        var anio = hoy.getFullYear();
        var fecha = hoy.getDate();
    
        let mesNombre = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
        let diaSemana = ['Domingo', 'Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'];
    
        $(".numero").text(fecha);
        $(".mes").text(mesNombre[mes]);
        $(".anio").text(anio);
        $(".dia").text(diaSemana[dia]);
    
        var hora = hoy.getHours();
        var minutos = hoy.getMinutes();
        var segundos = hoy.getSeconds();

        var ampm = hora >= 12 ? 'pm' : 'am';
        hora = hora % 12;
        hora = hora ? hora : 12;
        hora = hora < 10 ? '0'+hora : hora;
        minutos = minutos < 10 ? '0'+minutos : minutos;
        segundos = segundos < 10 ? '0'+segundos : segundos;
    
        $(".hora").text(hora);
        $(".minutos").text(minutos);
        $(".segundos").text(segundos);
        $(".meridiano").text(ampm);

    }, 100);

    $(".btnFondo").click(function(){
        $(".divFondos").css("display","block");
    });

    $(".rojo").click(function(){
        $("body").css("background-color","rgb(209, 58, 58)");
        $("body").css("background-image","none");
        $(".divFondos").css("display","none");
    });
    $(".verde").click(function(){
        $("body").css("background-color","rgb(46, 109, 57)");
        $("body").css("background-image","none");
        $(".divFondos").css("display","none");
    });
    $(".azul").click(function(){
        $("body").css("background-color","rgb(43, 38, 102)");
        $("body").css("background-image","none");
        $(".divFondos").css("display","none");
    });
    $(".amarillo").click(function(){
        $("body").css("background-color","rgb(219, 226, 119)");
        $("body").css("background-image","none");
        $(".divFondos").css("display","none");
    });
    $(".negro").click(function(){
        $("body").css("background-color","rgb(20, 20, 20)");
        $("body").css("background-image","none");
        $(".divFondos").css("display","none");
    });
    $(".violeta").click(function(){
        $("body").css("background-color","rgb(100, 62, 107)");
        $("body").css("background-image","none");
        $(".divFondos").css("display","none");
    });
    $(".naranja").click(function(){
        $("body").css("background-color","rgb(187, 117, 60)");
        $("body").css("background-image","none");
        $(".divFondos").css("display","none");
    });
    $(".blanco").click(function(){
        $("body").css("background-color","rgb(230, 230, 230)");
        $("body").css("background-image","none");
        $(".divFondos").css("display","none");
    });
    $(".rosa").click(function(){
        $("body").css("background-color","rgb(214, 117, 206)");
        $("body").css("background-image","none");
        $(".divFondos").css("display","none");
    });
    $(".foto1").click(function(){
        $("body").css("background-image","url('./img/fondo1.jpg')");
        $(".divFondos").css("display","none");
    });
    $(".foto2").click(function(){
        $("body").css("background-image","url('./img/fondo2.jpg')");
        $(".divFondos").css("display","none");
    });
    $(".foto3").click(function(){
        $("body").css("background-image","url('./img/fondo3.jpg')");
        $(".divFondos").css("display","none");
    });
    $(".foto4").click(function(){
        $("body").css("background-image","url('./img/fondo4.jpg')");
        $(".divFondos").css("display","none");
    });
});
