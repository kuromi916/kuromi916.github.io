

function setup (){
    createCanvas(windowWidth,windowHeight);
}

function draw(){
    background(0,10,60, 10);
    fill('crimson');
    stroke('orange');
    for(var i = 0; i < 500; i++){
        rect((i*10)%width,(i*10)%height,10,10);
    }
    fill('violet');
    stroke('pink');
    if(mouseX < 200){
        rect(mouseX, mouseY,100,100);
        }else{
            rect(mouseX,mouseY,50,50,25);
        }
    
}