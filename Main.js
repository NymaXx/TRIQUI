let posX, posY;
let color;
let matrizTriqui = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];


function setup() {
    createCanvas(500, 500);
    posX = 100;
    posY = 100;
    color = 255;
    for (let i = 0; i < matrizTriqui.length; i++) {
        for (let j = 0; j < matrizTriqui.length; j++) {

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
            
        }
    }



}

function mousePressed() {
    for (let i = 0; i < matrizTriqui.length; i++) {
        for (let j = 0; j < matrizTriqui.length; j++) {
            console.log(color);
            if(matrizTriqui[j][i]==1){
                color=0;
            } else {
                color=255;
            }

            if(matrizTriqui[j][i]==0 ){
                matrizTriqui[j][i]=1;
            }
            
            
        }
}

}