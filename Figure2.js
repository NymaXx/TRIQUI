class Figure2 extends Figure{
    constructor(){
        super(tamX, tamY, posX, posY, turn);
        this.turn= 1;
    }
 
    

    pintar(){
        Rect(posX, posY, 50,50);
    }
}