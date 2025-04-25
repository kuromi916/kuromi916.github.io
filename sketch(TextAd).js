
function setup(){
  createCanvas(windowWidth, 1500);
  background("lavender");

  // text() - https://p5js.org/reference/p5/text/
  textSize(50);
  fill('pink');
  stroke(0);
  strokeWeight(4);
  text('Simple Grocery List:', 300, 100);
  line(850, 125, 200, 125);

  textSize(20)
  fill('lavender');
  text('Create your shopping lists with ease!',350,150);

  textSize(20)
  fill('lavender');
  text('Images from Adobe Stock',400,1450);
  //End Remix
  // Changed the values to go with my code and reused the format for other parts. 


  let img1 = createImg('basket1.png');
  img1.size(200,200);
  img1.position(80,40);

  let img2 = createImg('basket2.png');
  img2.size(200,200);
  img2.position(770,20);


   
  //Section 1 : Dairy/Dairy Free Products

  textSize(30);
  fill('white');
  stroke(0);
  strokeWeight(4);
  text('Dairy/Dairy-Free Products:', 90, 260);

  rect(100, 300, 300, 400, 20);
  
// createInput(): https://p5js.org/reference/p5/createInput/

  myInput1 = createInput('Item #1');
  myInput1.position(130, 350);
  myInput1.size(250,10);

  myInput2 = createInput('Item #2');
  myInput2.position(130, 370);
  myInput2.size(250,10);
  
  myInput3 = createInput('Item #3');
  myInput3.position(130, 390);
  myInput3.size(250,10);
   //End Remix
  //Changed the values to go with my code then did it again for each section.

  let button1 = createButton('Add Row');
  button1.position(120, 720);
  button1.mousePressed(createRow);
 

 // Section 1 End 

 //Section 2: Veggies & Produce:

 textSize(30);
 fill('mint');
 stroke(0);
 strokeWeight(4);
 text('Veggies & Produce:', 600, 260);

 rect(580, 300, 300, 400, 20);

 myInput4 = createInput('Item #1');
  myInput4.position(610, 350);
  myInput4.size(250,10);

  myInput5 = createInput('Item #2');
  myInput5.position(610, 370);
  myInput5.size(250,10);
  
  myInput6 = createInput('Item #3');
  myInput6.position(610, 390);
  myInput6.size(250,10);

  let button2 = createButton('Add Row');
  button2.position(610, 720);
  button2.mousePressed(createRow2);
// End Section 2

//Section 3: Dry Goods/Pantry: 

textSize(30);
  fill('white');
  stroke(0);
  strokeWeight(4);
  text('Dry Goods/Pantry:', 120, 900);

  rect(100, 930, 300, 400, 20);

  myInput7 = createInput('Item #1');
  myInput7.position(130, 980);
  myInput7.size(250,10);

  myInput8 = createInput('Item #2');
  myInput8.position(130, 1000);
  myInput8.size(250,10);
  
  myInput9 = createInput('Item #3');
  myInput9.position(130, 1020);
  myInput9.size(250,10);

  let button3 = createButton('Add Row');
  button3.position(120, 1360);
  button3.mousePressed(createRow3);

//End Section 3:

///Section 4: Other

textSize(30);
 fill('mint');
 stroke(0);
 strokeWeight(4);
 text('Other:', 680, 900);

 rect(580, 930, 300, 400, 20);

 myInput10 = createInput('Item #1');
 myInput10.position(610, 980);
 myInput10.size(250,10);

 myInput11 = createInput('Item #2');
 myInput11.position(610, 1000);
 myInput11.size(250,10);
 
 myInput12 = createInput('Item #3');
 myInput12.position(610, 1020);
 myInput12.size(250,10);


 // createButton():https://p5js.org/reference/p5/createButton/
 let button4 = createButton('Add Row');
  button4.position(610, 1360);
  button4.mousePressed(createRow4);

}

//Section 1 button:
function createRow(){

  myInput = createInput('New Item');
  myInput.position(130, 410);
  myInput.size(250,10);
  /*Note: I couldn't figure out how to add more than
  one row. I started out by creating the
  myInput and changed  the position. I know I would need
  to create a new function that would add 20 to the y 
  value of myInput.position everytime the button would 
  be pressed. From there I would then need to code it so 
  the code would keep track of how many times the button 
  was pressed, in order to know when to change said y value.
  I tried coding this but it didn't work, so
  I just stuck with one.
  */
}
//End Remix
// I mostly just change the values to go with my code,
// then did it three other times for the other buttons.

// End Section 1 Button

// Section 2 Button:
function createRow2(){

  myInput = createInput('New Item');
  myInput.position(610, 410);
  myInput.size(250,10);
  
if(button2.mouse === true);{

  Input = createInput('New Item');
  Input.position(610, 430);
  Input.size(250,10);

}
}
//End Section 2 button

//Section 3 Button:
function createRow3(){

  myInput = createInput('New Item');
  myInput.position(130, 1040);
  myInput.size(250,10);
  
if(button3.mouse === true);{

  Input = createInput('New Item');
  Input.position(130, 1040);
  Input.size(250,10);
}
}
//End Section 3 Button


//Section 4 Button:
function createRow4(){

  myInput = createInput('New Item');
  myInput.position(610, 1040);
  myInput.size(250,10);
  
if(button4.mouse === true);{

  Input = createInput('New Item');
  Input.position(610, 1040);
  Input.size(250,10);
}
}
//End Section 4 Button