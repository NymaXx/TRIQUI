class Rect extends Figure{
    constructor(tamX, tamY, posX, posY){
        super(tamX, tamY, posX, posY);
        
    }
 
    

    pintar(){
        line(posX-tamX,posY-tamX,posX+tamX,posX+tamY);
        line(posX+tamX,posY-tamX,posX-tamX,posY+tamY);
    }
}