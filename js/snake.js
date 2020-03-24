
var velocidad = 90;
var tamano = 20;

class objeto {
	constructor(){
		this.tamano = tamano;
	}
	choque(obj){
		var difx = Math.abs(this.x - obj.x);
		var dify = Math.abs(this.y - obj.y);
		if(difx >= 0 && difx < tamano && dify >= 0 && dify < tamano){
			return true;
		} else {
			return false;
		}
	}
}

class Cola extends objeto {
	constructor(x,y){
		super();
		this.x = x;
		this.y = y;
		this.siguiente = null;
	}
	dibujar(ctx){
		if(this.siguiente != null){
			this.siguiente.dibujar(ctx);
		}
		ctx.fillStyle = "#ff0000";
		ctx.fillRect(this.x, this.y, this.tamano, this.tamano);
	}
	setxy(x,y){
		if(this.siguiente != null){
			this.siguiente.setxy(this.x, this.y);
		}
		this.x = x;
		this.y = y;
	}
	meter(){
		if(this.siguiente == null){
			this.siguiente = new Cola(this.x, this.y);
		} else {
			this.siguiente.meter();
		}
	}
	verSiguiente(){
		return this.siguiente;
	}
}

class Comida extends objeto {
	constructor(){
		super();
		this.x = this.generar();
		this.y = this.generar();
	}
	generar(){
		var num = (Math.floor(Math.random() * 26))*20;
		return num;
	}
	colocar(){
		this.x = this.generar();
		this.y = this.generar();
	
	}
	dibujar(ctx){
		ctx.fillStyle = "#00ff50";
		ctx.fillRect(this.x, this.y, this.tamano, this.tamano);
	}
}

var cabeza = new Cola(20,20);
var comida = new Comida();
var ejex = true;
var ejey = true;
var xdir = 0;
var ydir = 0;


function movimiento(){
	var nx = cabeza.x+xdir;
	var ny = cabeza.y+ydir;
	cabeza.setxy(nx,ny);
}
function control(event){
	var cod = event.keyCode;
	if(ejex){
		if(cod == 38){
			ydir = -tamano;
			xdir = 0;
			ejex = false;
			ejey = true;
		}
		if(cod == 40){
			ydir = tamano;
			xdir = 0;
			ejex = false;
			ejey = true;
		}
	}
	if(ejey){
		if(cod == 37){
			ydir = 0;
			xdir = -tamano;
			ejey = false;
			ejex = true;
		}
		if(cod == 39){
			ydir = 0;
			xdir = tamano;
			ejey = false;
			ejex = true;
		}
	}
}

function findeJuego(){
	xdir = 0;
	ydir = 0;
	ejex = true;
	ejey = true;
	cabeza = new Cola(40,40);
	comida = new Comida();
	alert("Perdiste UnU "  );
}
function choquepared(){
	if(cabeza.x < 0 || cabeza.x > 590 || cabeza.y < 0 || cabeza.y > 590){
		findeJuego();
	}
}
function choquecuerpo(){
	var temp = null;
	try{
		temp = cabeza.verSiguiente().verSiguiente();
	}catch(err){
		temp = null;
	}
	while(temp != null){
		if(cabeza.choque(temp)){
			
			findeJuego();
		} else {
			temp = temp.verSiguiente();
		}
	}
}

function dibujar(){
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	ctx.clearRect(0,0, canvas.width, canvas.height);
	//aquí abajo va todo el dibujo
	cabeza.dibujar(ctx);
	comida.dibujar(ctx);
}
function main(){
	var puntos= 0;
	choquecuerpo();
	choquepared();
	dibujar();
	movimiento();
	if(cabeza.choque(comida)){
		
		comida.colocar();
		cabeza.meter();
	}
}
setInterval("main()", velocidad);

