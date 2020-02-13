class Circle extends Figure{
    constructor(tamX, tamY, posX, posY){
        super(tamX, tamY, posX, posY);
        this.tamX = tamX;
        this.tamY = tamY;
        this.posX = posX;
        this.posY = posY;
    }
    

 
    pintar(){
        ellipse(this.posX,posY,this.tamX,this.tamY);
    }

    
}