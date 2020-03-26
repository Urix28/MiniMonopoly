(function(){
    var VentanaActual;
    var Comprobar;
    //var TurnoVar = "JugadorUno";
    var Validador =0;
   // var PosActualVar;
    /*
    Jugadores =  [{nombre: "Jugador 1"},{nombre: "Jugador 2"}];
    let TurnoActual = 0;
    let JugadorActual = Jugadores[TurnoActual];
    if(localStorage.getItem("TurnoGuardado")===0){
        var ModificarTurno = JugadorActual.nombre;
        
        document.getElementById("Turnos").innerHTML = "Turno del jugador: "+ModificarTurno;
       
        
    }
    if(localStorage.getItem("TurnoGuardado")===1){
        
        
        document.getElementById("Turnos").innerHTML = "Turno del jugador: Jugador 2";
    }
    
    //if(TurnoActual+1 > Jugadores.length){
       // localStorage.setTimeout("TurnoAct",0);

//    }
*/

    const JugaUno = "Turno del Jugador 1";
    const JugaDos = "Turno del Jugador 2";
    var Turnos = 0;
    const TurnosUI = document.getElementById("Turnos");
    let arrayTurnos = [];
    
    const GuardarDB = () => {
        localStorage.setItem('Jugador', JSON.stringify(arrayTurnos));
        PintarDB();
    }
    const CrearTurno = (Turnazo) => {
        let item = {
            Turnazo: Turnazo,
        }
        arrayTurnos.push(item);
        return item;
    }

    const PintarDB = () =>{
        
        arrayTurnos = JSON.parse(localStorage.getItem('Jugador'));
        if(arrayTurnos === null){
            arrayTurnos = [];
          }else{
        
            arrayTurnos.forEach(element => {
        
              if(element.estado){
               // TurnosUITurnosUI.innerHTML += `<div class="alert alert-success" role="alert"><i class="material-icons float-left mr-2">accessibility</i><b>${element.actividad}</b> - ${element.estado}<span class="float-right"><i class="material-icons">done</i><i class="material-icons">delete</i></span></div>`
              }else{
                TurnosUI.innerHTML = `<b>${element.Turnazo}</b> `
              }
            });
        
          }
    }
    
    if(Turnos === 0){
        CrearTurno(JugaUno);
        GuardarDB();
        Turnos ++;
    }
    


    document.addEventListener('DOMContentLoaded', PintarDB);




    
    
  
    
    
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
        /*
        TurnoActual++;
        localStorage.setItem("TurnoAct",TurnoActual);
        if(localStorage.getItem("TurnoAct") === 1){
            let Turnazo = localStorage.getItem("TurnoAct");
            localStorage.setItem("TurnoGuardado",Turnazo);
            }
            let ConstanteDeIntegracion = localStorage.getItem("TurnoGuardado");
            
            localStorage.setItem("Turno",ConstanteDeIntegracion);
            console.log("El turno guardado es: ",localStorage.getItem("TurnoGuardado"));
       
        console.log();
        console.log(TurnoActual)
        console.log(Jugadores.length)
        */
        
       
        var NumeroRandom = Math.round(Math.random()*5);
        PosActualVar = NumeroRandom;
        localStorage.setItem("PosActual",PosActualVar);
        
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
                Abrir("JuegoAhorcado");
                TurnoVar = "JugadorDos";
                localStorage.setItem("Turno",TurnoVar);
                
            }
            if(NumeroRandom === 2){
                console.log("Hola 3")
                Abrir("trivia");
            }
            if (NumeroRandom === 3) {
                console.log("Hola 4")
                Abrir("Ruleta");
            }
            if (NumeroRandom === 4) {
                console.log("Hola 5")
                Abrir("asteroides");
            }
            if (NumeroRandom === 5) {
                console.log("Hola 6")
                Abrir("juegomamalon");
            }
    
            function Abrir(VentanaJuego){
                VentanaActual = window.location.replace("Juegos/"+VentanaJuego+"/"+VentanaJuego+".html","_self");
                console.log(VentanaActual)
                return VentanaActual;
            }
        },3000);
        

    }, {once : true});
    
})();
