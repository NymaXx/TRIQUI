let posX, posY;
let matrizTriqui = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];


function setup() {
    createCanvas(500, 500);
    posX = 100;
    posY = 100;
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {

            fill(0, 0, 0);
            rect(posX * i, posY * i, (posX * i) + 100, (posY * i) + 100);

        }
    }
}

function draw() {

    for (let i = 0; i < matrizTriqui.length; i++) {
        for (let j = 0; j < matrizTriqui.length; j++) {

            matrizTriqui(i).pintar;

        }
    }



}

function mousePressed() {
    if (at) {

    };
}