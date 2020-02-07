
let f;

function setup(){
    createCanvas(500,500);
    f = new Figure1(50,50,50,50,0);
}

function draw(){
rect(200,100,205,500);
rect(300,100,305,500);
rect(100,200,500,205);
rect(100,300,500,305);

f.pintar();
}

