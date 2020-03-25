const ruleta = document.querySelector("#ruleta");

ruleta.addEventListener("click",girar);

dinero = 5;

function girar(){
    if (dinero >= 0) {
    	let rand = Math.random()*7200; 
    	sumarPuntos(-1);
        calcular(rand);
    }  
    else {
        alert("no te queda suficiente dinero has perdido");
        setTimeout(() => {
            window.location.replace("../../index.html");
            
            
        }, 100);
    }
}
function sumarPuntos(p){
	dinero += p;
    document.querySelector("#dinero").innerHTML = "Dinero: $" + dinero + "USD";
}


function calcular(rand){
    valor = rand / 360;
    valor = (valor - parseInt(valor.toString().split(".")[0])) * 360;
    ruleta.style.transform = "rotate("+rand+"deg)";
    setTimeout(()=>{
    switch(true){
    	case valor > 0 && valor <= 45:
    	    alert("Has sumado un punto");
            sumarPuntos(1);
    	    break;
    	case valor > 45 && valor <= 90:
    	    alert("¡Has ganado!Wuuuu :D");
    	    setTimeout(() => {
                window.location.replace("../../index.html");
                
                
            }, 100);
    	    break;
        case valor > 90 && valor <= 135:
            alert("¡Has perdido!Buuuu D:");
            setTimeout(() => {
                window.location.replace("../../index.html");
                
                
            }, 100);

            break; 
        case valor > 135 && valor <= 180:
            alert("No has ganado ni sumado, mas suerte");
            sumarPuntos(0);
            break;
        case valor > 180 && valor <= 225:
            alert("Has perdido 2 puntos, que mala suerte! D:");
            sumarPuntos(-2);
            break;
        case valor > 225 && valor <= 270:
            alert("No has sumado puntos");
            break;
        case valor > 270 && valor <= 315:
            alert("Has ganado 2 puntos, que buena suerte tienes!");
            sumarPuntos(2);
            break;
        case valor > 315 && valor <= 360:
            alert("No has ganado ni sumado, mas suerte");
            sumarPuntos(0);
            break;
    }},5000);
}