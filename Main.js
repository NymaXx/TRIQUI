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
    for (let i = 0; i < matrizTriqui.length; i++) {
        for (let j = 0; j < matrizTriqui.length; j++) {

            fill(255, 255, 255);
            rect(posX * j, posY * i, 100, 100);

        }
    }
}

function draw() {

    for (let i = 0; i < matrizTriqui.length; i++) {
        for (let j = 0; j < matrizTriqui.length; j++) {


            strokeWeight(4);
            stroke(51);
            matrizTriqui[i].length;

        }
    }



}

function mousePressed() {
    if (XM) {

    };
}