var colourPicker; 
let strokeWeightSlider;
var bgColorPicker;

//Copied from p5js.org/examples/repetition-kaleidoscope/ (1 of 3)
let symmetry = 6;
let angle = 360 / symmetry;
///End Remix (1 of 3)


function setup(){

//Copied from p5js.org/examples/repetition-kaleidoscope/ (2 of 3)
    describe(
        `Dark grey canvas that reflects the lines drawn within it in ${symmetry} sections.`
      );
      createCanvas(720, 400);
      angleMode(DEGREES);
      background(50);
/// End Remix (2 of 3)

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

 //Copied from p5js.org/reference/mouseIsPressed
    if(mouseIsPressed){
        line(mouseX,mouseY, pmouseX, pmouseY);
    } 
///End remix
//For this part, I used the code from class, as well
//the general information and code from the p5.js website for reference.
// By using ifMousePressed, the user can draw only when clicking and
// holding the mouse button down. This altered code takes the concept 
//presented in the p5.js mouseIsPressed (example 2) and changes it so that
// instead of going from a white box to a black box when the mouse is pressed,
//the user can create a line that follows the location of their cursor.  



 //Copied from p5js.org/examples/repetition-kaleidoscope/ (3 of 3)
  translate(width / 2, height / 2);
  
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
  
    let lineStartX = mouseX - width / 2;
    let lineStartY = mouseY - height / 2;
    let lineEndX = pmouseX - width / 2;
    let lineEndY = pmouseY - height / 2;

   
    if (mouseIsPressed === true) {
      
      for (let i = 0; i < symmetry; i++) {
        rotate(angle);
        stroke(255);
        strokeWeight(3);
        line(lineStartX, lineStartY, lineEndX, lineEndY);

        
        push();
        scale(1, -1);
        line(lineStartX, lineStartY, lineEndX, lineEndY);
        pop();
      }
    }
  }
}
//End Remix (3 of 3)
// I didn't make any changed to the code itself aside from excluding the notes
//I declaired the variables at top outside the function setup as per the instructions in the tutorial


function repaint(){
    background(bgColourPicker.value());  
}


/* Author's Note - 4. Extend the Code
For this project, I wanted to combine both of the codes.
This is shown through the change in graphics;
Even though the use is creating a pattern with the kalediscope,
they can still see their original cursor path because of the mouseIsPressed function outside
of the kaleidescope's code. mouseIsPressed is also apart of the kaleidoscope's 
code by default (specifically(word for word) line 61).

Personal Note: scope key part to progrmming - which parts 
of your code can see other parts of your code
at any given time. 
*/