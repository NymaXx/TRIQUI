class Circle extends Figure{
    constructor(tamX, tamY, posX, posY, turn){
        super(tamX, tamY, posX, posY, turn);
        
    }
    

 
    pintar(){
        ellipse(posX,posY, tamX,tamY);
    }

    
}