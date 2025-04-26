



function setup(){
    let cvn = createCanvas(windowWidth,3000);
    background('lavender');
    cvn.position('fixed', 0,0);
    //cvn.style(z-index: 10);

    let titleImg = createImg("My Website.PNG");
    titleImg.position(0,0);
    titleImg.size(1020,300);


    let catImg = createImg('cute cat.jpg');
    catImg.position(100,500);
    catImg.size(500,500);
    textSize(16);
    rect(130, 1015, 400, 30, 20);
    text('A cute cat I found on pintrest!', 220,1035);
    
    let Laufey = createImg('LaufeyCover.png');
    Laufey.position(900,500);
    Laufey.size(500,500);

    let B2 = createA('"https://www.youtube.com/watch?v=0AEi7Rg7nS0&list=RD0AEi7Rg7nS0&start_radio=1&rv=vI1NpvSWTy"', ' One of my favourite songs - Bored by Laufey')
    B2.position(1000,1020);
    rect(985, 1015, 310, 30, 20);  // x, y , width, height , curve
    


    textSize(32);
    fill('pink');
    stroke(0);
    strokeWeight(4);
    text('- Assignments -', 640, 1300);

    let B3 = createA('index(CitingCode).html', ' Citing Code')
    B3.position(700,1400);


    let B4 = createA('Index(TextAd).html', ' Text Adventure"in P5.js with Events');
    B4.position(650,1450);

    let B5 = createA('index(p5+Arrays).html', 'P5 + Arrays');
    B5.position(700,1500);

    let B6 = createA('index(Final).html', 'Final Project');
    B6.position(700,1550);

    rect(550, 1350, 400, 300, 20);
    

    textSize(32);
    fill('pink');
    stroke(0);
    strokeWeight(4);
    text('- Labs -', 690, 1800);


    let B7 = createA('index(3).html', 'Lab 1:Patterns from Iteration')
    B7.position(660,1900);

    let B8 = createA('index(4).html', 'Lab 2: Objects')
    B8.position(700,1950);

    let B9 = createA('index(5).html', 'Lab 3:Graphical User Interface (GUI)')
    B9.position(630,2000);
    
    let B10 = createA('index(Lab_4).html', 'Lab 4:Multimedia')
    B10.position(690,2050);

    let B11 = createA('index(Lab_5).html', 'Lab 5: JSON')
    B11.position(700,2100);

    rect(550, 1850, 400, 300, 20);
}

