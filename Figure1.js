class Figure1 extends Figure{
    constructor(){
        super(tamX, tamY, posX, posY, turn);
        this.turn = 0;
    }
    

 
    pintar(){
        ellipse(posX, posY, 50,50);
    }
}