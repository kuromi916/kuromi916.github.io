0;//you can use double slash to make comments, means jave won't try to execute this part
    //no difference between integers and floats (float= not a whoole number)
134151855;
12341.1515;
Infinity; //infinity is a number in java
-13434
-Infinity; // cheers to Mr.Walker for going over infinities 
-0; // different number from 0 

var kitty; //short for variable - declared a variable to store space in memory

kitty = 5; // definition - you define that datatype

var kitty = 24; // semi colons are end of statment, this line has a declaoration and definition

console.log(kitty); //java is case sensitive

kitty = kitty; // assignment operator, assignment value of the right value with the container (reads L-->R)\

console.log(kitty);

var doggy; // declared a variable but not defined a value
console.log(doggy); // undefined

//numbers,undefined, strings
//strings=collections of text in code

var prose = 'x'; // is a string delimiter
var moreprose = "i said 'somthing' slkjf";
// you can use both single and double quotes but you have to end it with the same one you started with '+"" = not okay
// you can use the single or double within eachother too
// no difference between the function of single and double quotes - just allows the flexibility
// SIDE NOTE: java script stores numbers under the hood as binary so 32 1s or 0s is 32 bits

//boleans are either true or false

var x =false;
x = false;

// dark blue = key word in java
// light blue = variable names
//you can't overwrite key words in java, so using key word as variable name = syntax error

//objects
//objects are defined with curly brackets
var ball ={}; //empty objects
ball = null; //nul is a datatype in java, like undefiened but only haoppens after there is an action involving objects

// operators - +
5 + 5;//this is a statment
kitty = 5 + 5;
var kitty; //becomes undefined, redeclared the variable, bc referring to a new place in memory
// var is a key word in java, short word in the machine to give us new ram 

kitty = 5 + "5"; //string concenation operator
console.log(kitty);

console.log(kitty + "x");