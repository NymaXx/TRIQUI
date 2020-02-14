let posX, posY;
let w,h;
let color;
let x,y;
let matrizTriqui = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];
let player1;
let player2;
let turno;
let circulos = [];


function setup() {
    
    createCanvas(500, 500);
    
    turno = true;
    posX = 100;
    posY = 100;
    color = 255;
    ellipseMode(CORNER);
    for (let i = 0; i < matrizTriqui.length; i++) {
        for (let j = 0; j < matrizTriqui.length; j++) {
            x = w * i + w/2;
            y = h * j + h/2;
            w = 25;
            h = 25;
            circulos = new Circle();
            fill(color);
            rect(posX * j, posY * i, 100, 100);
        }
    }
}

function draw() {
    
    
    for (let i = 0; i < matrizTriqui.length; i++) {
        for (let j = 0; j < matrizTriqui.length; j++) {
           
            fill(color);
            rect(posX * j, posY * i, 100, 100);
            strokeWeight(4);
            stroke(51);

            if(matrizTriqui[i][j] == 2) {
                ellipse(j*100, i*100, 100, 100);
                //Aquí se recorre el arreglo de circulos
            } else if(matrizTriqui[i][j] == 1) {
                line(j*100, i*100, (j*100)+100, (i*100)+100);
                line(j*100, (i*100)+100, (j*100)+100, i*100);
            }
        }
    }

    
    
}

function mousePressed() {
    for (let i = 0; i < matrizTriqui.length; i++) {
        for (let j = 0; j < matrizTriqui.length; j++) {
        
            if(mouseX > j*100 && mouseX < (j*100)+100 && mouseY > i*100 && mouseY < (i*100)+100 && matrizTriqui[i][j] == 0){
                //Cambio de turno, inicia en true es decir inicia el jugador uno, luego al dar click cambia el estado y pasa a jugar el segundo jugador
                if(turno) {
                    matrizTriqui[i][j] = 1;
                    //Agregar circulo al arreglo
                    turno = false;
                } else {
                    matrizTriqui[i][j] = 2;
                    turno = true;
                }
                
                console.log(matrizTriqui[i][j]);
            }
        }
    }


    
}