var allthekitties = [];
var currentkitty = 0;
var kittyposition = {x: 100, y: 100, w:100, h:100};

function preload(){
    let url = 'https://api.thecatapi.com/v1/images/search';
    loadJSON(url, successCallback);
}

function successCallback(data){
    console.log(data);
    for(kitty of data){
        var kitty = createImg(kitty.url);
        kitty.hide();
        allthekitties.push(kitty);
    }
}

function setup(){
    
    createCanvas(600, 350);
    background('lavender');
    text('Random Images are from thecatapi.com',20,10);
}

function draw(){

    
    text(allthekitties.length, 10,10);
   

    image( allthekitties[currentkitty], kittyposition.x, kittyposition.y, kittyposition.w, kittyposition.h);
}

function mousePressed(){
    // if we click the kitty, increment currentKitty and change position
    if( mouseX > kittyposition.x && mouseX < kittyposition.x+kittyposition.h
        && mouseY > kittyposition.y && mouseY < kittyposition.y+kittyposition.h){
        currentkitty++;
        currentkitty = currentkitty % allthekitties.length;
        kittyposition.x = random(width-kittyposition.w);
        kittyposition.y = random(height-kittyposition.h);
    }
}