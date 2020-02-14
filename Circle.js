class Circle extends Figure{
    constructor(tamX, tamY, posX, posY){
        super(tamX, tamY, posX, posY);
        this.tamX = tamX;
        this.tamY = tamY;
        this.posX = posX;
        this.posY = posY;
    }
    

 
    pintar(){
        ellipseMode(CORNER);
        fill(255);
        ellipse(this.posX, this.posY, this.tamX, this.tamY);
    }

    
}