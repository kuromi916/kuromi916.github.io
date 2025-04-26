


//dragable(), 1 0f 2 :https://p5js.org/reference/p5.Element/draggable/

let egg;
let oil;
let salt;
let pepper;
let CT;
// End Remix (1 of 2)


//loadImage(), 1 of 2: https://p5js.org/reference/p5/loadImage/
function preload(){
   bg = loadImage('Game Screen.PNG');
}
//End Remix 1 of 2

function setup(){
    createCanvas(windowWidth, windowHeight);
    background('lavender');

//loadImage(), 2 of 2:  https://p5js.org/reference/p5/loadImage/
    bg.resize(1400,windowHeight);
    image(bg, 0,0);

/*End Remix 2 of 2 
    I changed the default values to custom values that worked with my code.
    On line 25 and 26, I swiched the order around so that the image would resize then 
    appear. 
*/


// createImg(): https://p5js.org/reference/p5/createImg/
    let cookT = createImg('Cook_Top.PNG');
        cookT.size(1060,370);
        cookT.position(345,510);
// End Remix
// I only changed the default values to go with my code and my files. 


//dragable(), 2 0f 2 :https://p5js.org/reference/p5.Element/draggable/    
    
   CT = createDiv('CookTop');
    CT.position(500,700);
    CT.size(60,20);
    CT.style('background','lavender');

    egg = createDiv('egg');
    egg.position(100,700);
    egg.size(40,20);
    egg.style('background','yellow');
    egg.draggable();

     
    oil = createDiv('oil');
    oil.position(50,600);
    oil.size(20,20);
    oil.style('background','orchid');
    oil.draggable();

    
     
    salt = createDiv('salt');
    salt.position(150,800);
    salt.size(40,20);
    salt.style('background','lavender');
    salt.draggable();

     
    pepper = createDiv('pepper');
    pepper.position(300,650);
    pepper.size(50,20);
    pepper.style('background','grey');
    pepper.draggable();

    /* End Remix (2 of 2)
        For these sections, I just changed the values to go with my code;
        I changed the deault names, values etc to go with my code.  
    */


    // dragOver() https://p5js.org/reference/p5.Element/dragOver/

    CT.dragOver(checkFileType);
}

function checkFileType(){
    if(file.type === 'egg'){
        text('hello', 100, 50);
    }else{
        text('Try Again', 100, 50);
    }
}

/* End Remix
    For this part, I tried to make it so that when a specific div was 
    dragged over another specific div, it would write something. My 
    intention was to make it so that when one image was placed over another, 
    the image that was dragged would disappear and another would replace it.
    For testing purposes, I just used somthing simple like text generation
    to see if it worked before trying to add the images. Unfortunetly, it 
    didn't work.
*/
