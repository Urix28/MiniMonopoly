(function(){
    var canvas = document.getElementById("Mario")
    var ctx = canvas.getContext("2d");
    
    var imagen = new Image();
    imagen.src = "img/mario1.gif";
    console.log(imagen);
    imagen.onload = function(){
        ctx.drawImage(imagen,0,0);
    } 
})();
