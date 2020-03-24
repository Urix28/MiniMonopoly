(function(){
    self.Board =  function(width,height){
		this.width = width;
		this.height = height;
		this.playing = false;
		this.game_over = false;
        this.puntosJugador1 = [];
        this.puntosJugador2 = [];
        this.jugadores= [];
        
        this.posInicialJugador1 = [];
        this.posInicialJugador2 = [];   
		this.playing = false;
    }
    self.Board.prototype = {
		get elements(){
            var elements = this.jugadores.map(function(jugador1){ return jugador1;});
            elements.push(this.jugadores);
            var elements = this.jugadores.map(function(jugador2){ return jugador2;});
            elements.push(this.jugadores);
			
			return elements;
		}
	}

})();

(function(){
	self.Jugadores = function(x,y,width,height,board){
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.board = board;
		this.board.jugadores.push(this);

		this.kind = "rectangle";
		


	}

	
})();


(function(){
	self.BoardView = function(canvas,board){
		this.canvas = canvas;
		this.canvas.width = board.width;
		this.canvas.height = board.height;
		this.board = board;
		this.ctx = canvas.getContext("2d");
		var img = new Image();
        img.src = "img/mario_corriendo.gif";
		this.ctx.drawImage(img, 0, 0);
	
	}
	self.BoardView.prototype = {
		clean: function(){
			this.ctx.clearRect(0,0,this.board.width,this.board.height);
		},
		draw: function(){
			for (var i = this.board.elements.length - 1; i >= 0; i--) {
				var el = this.board.elements[i];
				draw(this.ctx,el);
			};
		},
		
		play: function(){
			if(this.board.playing){
			this.clean();
			this.draw();
			this.check_collisions();
			this.board.ball.move();

			}
			
		}
	}
	

	function draw(ctx,element){
		
			switch(element.kind){
				case "rectangle":
					ctx.fillRect(element.x,element.y,element.width,element.height);
					break;

				

			}
			
	}

})();

	var board = new Board(800,400);
	var bar = new Jugadores(20, 120, 40, 100, board);

	var canvas = document.getElementById('canvas');
	var board_view = new BoardView(canvas,board);


window.requestAnimationFrame(controller);




board_view.draw();

window.requestAnimationFrame(controller);

function controller(){
	
	board_view.play();
	window.requestAnimationFrame(controller);
	

}