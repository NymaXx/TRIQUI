let posX, posY;
let w, h;
let color;
let x, y;
let matrizTriqui = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];
let player1 = [];
let player2 = [];
let turno;
let playerr1 = [];
let playerr2 = [];
let ganarUno;
let ganarDos;
let victoria1;
let victoria2;



function setup() {

    createCanvas(500, 500);

    victoria1 = false;
    victoria2 = false;

    turno = true;
    posX = 100;
    posY = 100;
    color = 255;
    ellipseMode(CORNER);
    for (let i = 0; i < matrizTriqui.length; i++) {
        for (let j = 0; j < matrizTriqui.length; j++) {
            x = w * i + w / 2;
            y = h * j + h / 2;
            w = 25;
            h = 25;
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

            if (matrizTriqui[i][j] == 2) {
                for (let a = 0; a < player2.length; a++) {
                    player2[a].pintar();
                }
                //Aquí se recorre el arreglo de circulos
            } else if (matrizTriqui[i][j] == 1) {
                for (let a = 0; a < player1.length; a++) {
                    player1[a].pintar();
                }
            }
        }
    }
    //modelos de victoria
    for (let i = 0; i < matrizTriqui.length; i++) {
        ganarUno = 0;
        for (let j = 0; j < matrizTriqui.length; j++) {

            //condicion de victoria horizontal player1
            if (matrizTriqui[i][j] == 1) {
                ganarUno++;
            }
            if (ganarUno == 3) {
                victoria1 = true; 0;
            }
            if (victoria1 == true) {
                textSize(30);
                text("ganador player1", 70, 150);
            }

        }
    }
    for (let j = 0; j < matrizTriqui.length; j++) {
        ganarUno = 0;
        for (let i = 0; i < matrizTriqui.length; i++) {

            //condicion de victoria vertical player1
            if (matrizTriqui[i][j] == 1) {
                ganarUno++;
            }
            if (ganarUno == 3) {
                victoria1 = true; 0;
            }
            if (victoria1 == true) {
                textSize(30);
                text("ganador player1", 70, 150);
            }

        }
    }
    for (let i = 0; i < matrizTriqui.length; i++) {
        ganarDos = 0;
        for (let j = 0; j < matrizTriqui.length; j++) {

            //condicion de victoria horizontal player2
            if (matrizTriqui[i][j] == 2) {
                ganarDos++;
            }
            if (ganarDos == 3) {
                victoria2 = true; 0;
            }
            if (victoria2 == true) {
                textSize(30);
                text("ganador player2", 70, 150);
            }

        }
    }
    for (let j = 0; j < matrizTriqui.length; j++) {
        ganarDos = 0;
        for (let i = 0; i < matrizTriqui.length; i++) {

            //condicion de victoria vertical player2
            if (matrizTriqui[i][j] == 2) {
                ganarDos++;
            }
            if (ganarDos == 3) {
                victoria2 = true; 0;
            }
            if (victoria2 == true) {
                textSize(30);
                text("ganador player2", 70, 150);
            }

        }
    }

}

function mousePressed() {

    for (let i = 0; i < matrizTriqui.length; i++) {
        for (let j = 0; j < matrizTriqui.length; j++) {


            if (mouseX > j * 100 && mouseX < (j * 100) + 100 && mouseY > i * 100 && mouseY < (i * 100) + 100 && matrizTriqui[i][j] == 0) {
                //Cambio de turno, inicia en true es decir inicia el jugador uno, luego al dar click cambia el estado y pasa a jugar el segundo jugador
                if (turno) {
                    matrizTriqui[i][j] = 1;
                    //Agregar circulo al arreglo

                    player1.push(new Rect(100, 100, j * 100, i * 100));


                    turno = false;
                } else {
                    matrizTriqui[i][j] = 2;
                    //Agregar equis al arreglo
                    for (let a = 0; a < player1.length; a++) {
                        player2.push(new Circle(100, 100, j * 100, i * 100));
                        console.log("fvfv");
                    }

                    turno = true;
                }

                console.log(matrizTriqui[i][j]);
            }
        }
    }



}