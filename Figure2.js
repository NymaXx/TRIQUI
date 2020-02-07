class Figure2 extends Figure{
    constructor(tamX, tamY, posX, posY, turn){
        super(tamX, tamY, posX, posY, turn);
        
    }
 
    

    pintar(){
        Rect(posX, posY, 50,50);
    }
}