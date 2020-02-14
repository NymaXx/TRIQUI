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
let playerr1 = [];
let playerr2 = [];
let ganarUno;
let ganarDos;
let victoria1;
let victoria2;



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
            fill(color);
            rect(posX * j, posY * i, 100, 100);
            player1 = new Rect(100,100,j*100,i*100);
            player2 = new Circle(100,100,j*100,i*100);
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
                for(let a=0;a<player2.length;a++){
                    player2(a).pintar();
                }
                //Aquí se recorre el arreglo de circulos
            } else if(matrizTriqui[i][j] == 1) {
                line(j*100, i*100, (j*100)+100, (i*100)+100);
                line(j*100, (i*100)+100, (j*100)+100, i*100);
            }
        }
    }


//condicionales de todas las posibilidades de ganar para player1
    for (let i = 0; i < matrizTriqui.length; i++) {
        for (let j = 0; j < matrizTriqui.length; j++) {
             if ( matrizTriqui [0] [0] == 1 && matrizTriqui [0] [1] == 1 && matrizTriqui [0][2]==1){
                victoria1 = true
                }
                if(victoria1 == true){
                    textSize(30);
                    text("ganador player1",70,150);
                    victoria2 =false;
                }
            }
        }   

        for (let i = 0; i < matrizTriqui.length; i++) {
            for (let j = 0; j < matrizTriqui.length; j++) {
                 if ( matrizTriqui [1] [0] == 1 && matrizTriqui [1] [1] == 1 && matrizTriqui [1][2]==1){
                    victoria1 = true
                    }
                    if(victoria1 == true){
                        textSize(30);
                        text("ganador player1",70,150);
                        victoria2 =false;
                    }
                }
            }


        for (let i = 0; i < matrizTriqui.length; i++) {
            for (let j = 0; j < matrizTriqui.length; j++) {
                if ( matrizTriqui [2] [0] == 1 && matrizTriqui [2] [1] == 1 && matrizTriqui [2][2]==1){
                    victoria1 = true
                     }
                 if(victoria1 == true){
                    textSize(30);
                    text("ganador player1",70,150);
                    victoria2 =false;
                
                }
            }
        }


                    for (let i = 0; i < matrizTriqui.length; i++) {
        for (let j = 0; j < matrizTriqui.length; j++) {
             if ( matrizTriqui [0] [0] == 1 && matrizTriqui [0] [1] == 1 && matrizTriqui [0][2]==1){
                victoria1 = true
                }
                if(victoria1 == true){
                    textSize(30);
                    text("ganador player1",70,150);
                    victoria2 =false;
                }
            }
        }   

        for (let i = 0; i < matrizTriqui.length; i++) {
            for (let j = 0; j < matrizTriqui.length; j++) {
                 if ( matrizTriqui [1] [0] == 1 && matrizTriqui [1] [1] == 1 && matrizTriqui [1][2]==1){
                    victoria1 = true
                    }
                    if(victoria1 == true){
                        textSize(30);
                        text("ganador player1",70,150);
                        victoria2 =false;
                    }
                }
            }


        for (let i = 0; i < matrizTriqui.length; i++) {
            for (let j = 0; j < matrizTriqui.length; j++) {
                if ( matrizTriqui [2] [0] == 1 && matrizTriqui [2] [1] == 1 && matrizTriqui [2][2]==1){
                    victoria1 = true
                     }
                 if(victoria1 == true){
                    textSize(30);
                    text("ganador player1",70,150);
                    victoria2 =false;
                        }
                    }
                }

        for (let i = 0; i < matrizTriqui.length; i++) {
            for (let j = 0; j < matrizTriqui.length; j++) {
                if ( matrizTriqui [0] [0] == 1 && matrizTriqui [1] [0] == 1 && matrizTriqui [2][0]==1){
                    victoria1 = true
                        }
                    if(victoria1 == true){
                     textSize(30);
                     text("ganador player1",70,150);
                     victoria2 =false;
                         }
                     }
               }

        for (let i = 0; i < matrizTriqui.length; i++) {
            for (let j = 0; j < matrizTriqui.length; j++) {
                 if ( matrizTriqui [0] [1] == 1 && matrizTriqui [1] [1] == 1 && matrizTriqui [2][1]==1){
                        victoria1 = true
                            }
                    if(victoria1 == true){
                     textSize(30);
                     text("ganador player1",70,150);
                     victoria2 =false;
                             }
                         }
                   }


        for (let i = 0; i < matrizTriqui.length; i++) {
             for (let j = 0; j < matrizTriqui.length; j++) {
                    if ( matrizTriqui [0] [2] == 1 && matrizTriqui [1] [2] == 1 && matrizTriqui [2][2]==1){
                         victoria1 = true
                               }
                    if(victoria1 == true){
                    textSize(30);
                     text("ganador player1",70,150);
                     victoria2 =false;
                                     }
                                 }
                           }
                        
                    
                

        for (let i = 0; i < matrizTriqui.length; i++) {
            for (let j = 0; j < matrizTriqui.length; j++) {
                if ( matrizTriqui [0] [0] == 1 && matrizTriqui [1] [0] == 1 && matrizTriqui [2][0]==1){
                    victoria1 = true
                        }
                    if(victoria1 == true){
                     textSize(30);
                     victoria2 =false;
                         }
                     }
               }

        for (let i = 0; i < matrizTriqui.length; i++) {
            for (let j = 0; j < matrizTriqui.length; j++) {
                 if ( matrizTriqui [0] [1] == 1 && matrizTriqui [1] [1] == 1 && matrizTriqui [2][1]==1){
                        victoria1 = true
                            }
                    if(victoria1 == true){
                     textSize(30);
                     text("ganador player1",70,150);
                     victoria2 =false;
                             }
                         }
                   }


        for (let i = 0; i < matrizTriqui.length; i++) {
             for (let j = 0; j < matrizTriqui.length; j++) {
                    if ( matrizTriqui [0] [2] == 1 && matrizTriqui [1] [2] == 1 && matrizTriqui [2][2]==1){
                         victoria1 = true
                               }
                    if(victoria1 == true){
                    textSize(30);
                     text("ganador player1",70,150);
                     victoria2 =false;
                                     }
                                 }
                           }
    //condicionales para ganador player 2

    for (let i = 0; i < matrizTriqui.length; i++) {
        for (let j = 0; j < matrizTriqui.length; j++) {
             if ( matrizTriqui [0] [0] == 2 && matrizTriqui [0] [1] == 2 && matrizTriqui [0][2]==2){
                victoria2 = true
                }
                if(victoria2 == true){
                    textSize(30);
                    text("ganador player2",70,150);
                    victoria1 =false;
                }
            }
        }   

        for (let i = 0; i < matrizTriqui.length; i++) {
            for (let j = 0; j < matrizTriqui.length; j++) {
                 if ( matrizTriqui [1] [0] == 2 && matrizTriqui [1] [1] == 2 && matrizTriqui [1][2]==2){
                    victoria2 = true
                    }
                    if(victoria2 == true){
                        textSize(30);
                        text("ganador player2",70,150);
                        victoria1 =false;
                    }
                }
            }


        for (let i = 0; i < matrizTriqui.length; i++) {
            for (let j = 0; j < matrizTriqui.length; j++) {
                if ( matrizTriqui [2] [0] == 2 && matrizTriqui [2] [1] == 2 && matrizTriqui [2][2]==2){
                    victoria2 = true
                     }
                 if(victoria2 == true){
                    textSize(30);
                    text("ganador player2",70,150);
                    victoria1 =false;
                        }
                    }
                }

        for (let i = 0; i < matrizTriqui.length; i++) {
            for (let j = 0; j < matrizTriqui.length; j++) {
                if ( matrizTriqui [0] [0] == 2 && matrizTriqui [1] [0] == 2 && matrizTriqui [2][0]==2){
                    victoria2 = true
                        }
                    if(victoria2 == true){
                     textSize(30);
                     text("ganador player2",70,150);
                     victoria1 =false;
                         }
                     }
               }

        for (let i = 0; i < matrizTriqui.length; i++) {
            for (let j = 0; j < matrizTriqui.length; j++) {
                 if ( matrizTriqui [0] [1] == 2 && matrizTriqui [1] [1] == 2 && matrizTriqui [2][1]==2){
                        victoria2 = true
                            }
                    if(victoria2 == true){
                     textSize(30);
                     text("ganador player2",70,150);
                     victoria1 =false;
                             }
                         }
                   }


        for (let i = 0; i < matrizTriqui.length; i++) {
             for (let j = 0; j < matrizTriqui.length; j++) {
                    if ( matrizTriqui [0] [2] == 2 && matrizTriqui [1] [2] == 2 && matrizTriqui [2][2]==2){
                         victoria2 = true
                               }
                    if(victoria2 == true){
                    textSize(30);
                     text("ganador player2",70,150);
                     victoria1 =false;
                                     }
                                 }
                           }

            for (let i = 0; i < matrizTriqui.length; i++) {
                     for (let j = 0; j < matrizTriqui.length; j++) {   
                    if(victoria1==false && victoria2==false){
                        textSize(30);
                     text("eempate",70,150);
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