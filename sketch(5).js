var colourPicker; // function scope
let strokeWeightSlider;
var bgColorPicker;

//scope key part to progrmming - which parts 
// of your code can see other parts of your code
//at any given time. 

function setup(){
    createCanvas(720,300);
    colourPicker = createColorPicker('deeppink');

    strokeWeightSlider = createSlider(1,10,5,1);

    bgColourPicker = createColorPicker('grey');

    var bgColorButton = createButton('Refresh');
    bgColorButton.mousePressed (repaint);
    background(bgColourPicker.value());
}


function draw(){
    //ellipse (mouseX, mouseY,  10);
    strokeWeight(strokeWeightSlider.value());
    stroke(colourPicker.value());

    //Copied from P5js.org/reference/mouseIsPressed
    if(mouseIsPressed){
        line(mouseX,mouseY, pmouseX, pmouseY);
    } 
    ///end remix
}
//let is cool new version of var

function repaint(){
    background(bgColourPicker.value());
    
}
