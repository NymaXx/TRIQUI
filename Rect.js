class Rect extends Figure{
    constructor(tamX, tamY, posX, posY){
        super(tamX, tamY, posX, posY);
        this.tamX = tamX;
        this.tamY = tamY;
        this.posX = posX;
        this.posY = posY;
    }
 
    

    pintar(){
        line(this.posX-this.tamX/2,this.posY-this.tamX/2,this.posX+this.tamX/2,this.posX+this.tamY/2);
        line(this.posX+this.tamX/2,this.posY-this.tamX/2,this.posX-this.tamX/2,this.posY+this.tamY/2);
    }
}