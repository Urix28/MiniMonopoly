(function () {
    var TurnoVar = 1;

    document.getElementById("Turnos").innerHTML = "Turno del jugador: "+TurnoVar;

    var Cara1 = new Image();
    Cara1.src="img/1.png";

    var Cara2 = new Image();
    Cara2.src="img/2.png";

    var Cara3 = new Image();
    Cara3.src="img/3.png";
    
    var Cara4 = new Image();
    Cara4.src="img/4.png";

    var Cara5 = new Image();
    Cara5.src="img/5.png";

    var Cara6 = new Image();
    Cara6.src="img/6.png";   

    function TirarDado(){
        var NumeroRandom = Math.round(Math.random()*5);
        document.images["dado"].src = eval(NumeroRandom+".src");
    }

})();