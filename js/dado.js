(function(){
    var VentanaActual;

    var TurnoVar = "JugadorUno";
    
    localStorage.setItem("Turno",TurnoVar);

    console.log(localStorage.getItem("Turno"));
    console.log(localStorage.getItem("PosActual"));
    var Boton = document.getElementById("btn");

    var Cara0 = new Image();
    Cara0.src="img/1.png";

    var Cara1 = new Image();
    Cara1.src="img/2.png";

    var Cara2 = new Image();
    Cara2.src="img/3.png";
    
    var Cara3 = new Image();
    Cara3.src="img/4.png";

    var Cara4 = new Image();
    Cara4.src="img/5.png";

    var Cara5 = new Image();
    Cara5.src="img/6.png";   

    Boton.addEventListener("click", function(){
        var NumeroRandom = Math.round(Math.random()*5);
        localStorage.setItem("PosActual",NumeroRandom);
        
        document.images["dado"].src = eval("Cara"+NumeroRandom+".src");
        console.log(NumeroRandom)
        console.log(typeof(NumeroRandom))
        setTimeout(function(){
            if(NumeroRandom === 0){
                console.log("Hola 1")
                Abrir("Snake");
            }
            if(NumeroRandom === 1){
                console.log("Hola 2")
                Abrir("Snake");
            }
            if(NumeroRandom === 2){
                console.log("Hola 3")
                Abrir("Snake");
            }
            if (NumeroRandom === 3) {
                console.log("Hola 4")
                Abrir("Snake");
            }
            if (NumeroRandom === 4) {
                console.log("Hola 5")
                Abrir("Snake");
            }
            if (NumeroRandom === 5) {
                console.log("Hola 6")
                Abrir("Snake");
            }
    
            function Abrir(VentanaJuego){
                VentanaActual = window.open("Juegos/"+VentanaJuego+"/"+VentanaJuego+".html","_self");
                console.log(VentanaActual)
                return VentanaActual;
            }
        },3000);
        

    })
    
})();