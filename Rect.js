class Rect extends Figure{
    constructor(tamX, tamY, posX, posY){
        super(tamX, tamY, posX, posY);
        this.tamX = tamX;
        this.tamY = tamY;
        this.posX = posX;
        this.posY = posY;
    }
 
    

    pintar(){
        fill(255); 
        line(this.posX,this.posY,this.posX+this.tamX,this.posY+this.tamY);
        line(this.posX,this.posY+this.tamX,this.posX+this.tamX,this.posY);
    }
}