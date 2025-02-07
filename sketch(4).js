var redBrick = {
    x:0,
    y:0,
    w:30,
    h:30, // don't put a comma after last key value pair
    xSpeed:1,
    ySpeed:1,
    colour:'red',
    draw:function(){
        fill(this.colour)
        rect(this.x, this.y, this.w,this.h);
    },
    move: function(){
        this.x +=  this.xSpeed;
        redBrick.y +=   redBrick.ySpeed;

        if( this.x < 0|| this .x > width - this.w){
            this.xSpeed *=-1;
        }
    
        if(  this.y > height ||   this.y < 0 ){
            this .ySpeed*= -1;
        }
    }
};

var blueBrick = {
    x:40,
    y:50,
    w:30,
    h:30, // don't put a comma after last key value pair
    xSpeed:1,
    ySpeed:1,
    colour:'blue',
    draw:function(){
        fill(this.colour)
        rect(this.x, this.y, this.w,this.h);
    },
    move: function(){
        this.x +=  this.xSpeed;
        redBrick.y +=   redBrick.ySpeed;

        if( this.x < 0|| this .x > width){
            this.xSpeed *=-1;
        }
    
        if(  this.y > height ||   this.y < 0 ){
            this .ySpeed*= -1;
        }
    }
};
// this = is a way to say dear, java, only look in here when looking for somthing
// || is the bolean ore

//  redBrick.x++ returns current calue the increments
//++  redBrick.x increments value and then returns

function setup(){
    createCanvas(720,280)
}

function draw(){
    background('grey');
    redBrick.draw();
    redBrick.move();
    blueBrick.draw();
    blueBrick.move();
}


