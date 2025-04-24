

// Code from Week 8 's class - See Week8-secondHalf Module for more (1 of 2)
var heartImg;
var explode =[];

function preload(){
    heartImg = loadImage("heart.png"); // Image from Adobe Stock

}

function createHearts(x,y){
    var originx = x;
    var originy = y;
    for(var i = 0; i < 40; i++){
        var heart = {
            x: originx,
            y: originy,
            xspeed: random(-2,2),
            yspeed: random(-2,2),
            alpha: 255,
            //excluded colour, not needed because of image
            draw: function(){
                //stroke, not needed because of image
                strokeWeight(2);
                //stroke(this.colour); - not needed because of image
                image(heartImg,this.x, this.y, 100,100);
                this.update();
            },
            update: function(){
                this.x += this.xspeed;
                this.y += this.yspeed;
                this.yspeed += 0.05;
                this.alpha -= 2;
                //this.colour.setAlpha(this.alpha);
            },
    };
    explode.push(heart);
 }
}
/*End Remix
    For this project, I used the code from Week 8 as a base.
    In order to work with my idea, I modified the "firework" 
    and "ember" to "explode" and "heart" in order to 
    better differentiate between Week 8's code and my project. 
    I specficially changed "ember" to "heart" because I wanted
    to use a heart image instead of drawing triangles. I excluded
    parts of the orginal code in order to change certain functions;
    I only wanted the hearts to apear from three different points
    rather than completely random ones. I also made it so that the 
    hearts would only be triggered when the user clicks the "scratch?"
    buttons. Another change I made was not interupting the appearance of
    hearts after the button is pressed. I did this because I though it
    suits my continuting appeciation of cats. Aside from those major,
    changes, the only other things I modified were the smaller things
    like matching variables and variable placement etc. 
*/

function setup(){
    createCanvas(windowWidth, windowHeight);
    background("lavender");
    


//createImg(): https://p5js.org/reference/p5/createImg/

let titleImg = createImg('Cute_Cats.PNG');
titleImg.position(100,10);
titleImg.size(1100,250);

let img1  = createImg('Cat 1 .png');// Image from Adobe Stock
img1.position (50,400);
img1.size(400,300);

let img2 = createImg('Cat 2.png')// Image from Adobe Stock
img2.position (500,400);
img2.size(300,300);

let img3 = createImg('Cat 3 .png');// Image from Adobe Stock
img3.position(838,380);
img3.size(400,300);

/*End Remix
    I changed the values to work with my code. 
*/


//createButton(): https://p5js.org/reference/p5/createButton/
let button1 = createButton ('scratch?');
button1.position(200,700);
button1.mousePressed(function(){
    for(var i=0; i<5; i++){
        createHearts(100,120);
    }
});

let button2 = createButton ('scratch?');
button2.position(620,700);
button2.mousePressed(function(){
    for(var i=0; i<5; i++){
        createHearts(600,120);
    }
});


let button3 = createButton ('scratch?');
button3.position(1030,700);
button3.mousePressed(function(){
    for(var i=0; i<5; i++){
        createHearts(1000,120);
    }
});
/*End remix
    I changed the example values to work with my idea and I incerted 
    the for loop with my values from the 
*/
}

// Code from Week 8 's class - See Week8-secondHalf Module for more (2 of 2)
function draw(){
    
    for(hh of explode){
        hh.draw();
    }
/*End Remix
    I changed the values to work with my code. 
*/
}

