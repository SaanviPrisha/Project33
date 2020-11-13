const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var hexagon, slingShot;
var count = 0;

function setup(){
    var canvas = createCanvas(1500,700);
    engine = Engine.create();
    world = engine.world;


    ground1 = new Ground(600, 600, 280, 10);
    ground2 = new Ground(1000, 500, 280, 10);

    //Part-1, Level-1
    squariad1 = new Block(480, 580, 30, 50, 0);
    squariad2 = new Block(510, 580, 30, 50, 0);
    squariad3 = new Block(540, 580, 30, 50, 0);
    squariad4 = new Block(570, 580, 30, 50, 0);
    squariad5 = new Block(600, 580, 30, 50, 0);
    squariad6 = new Block(630, 580, 30, 50, 0);
    squariad7 = new Block(660, 580, 30, 50, 0);
    squariad8 = new Block(690, 580, 30, 50, 0);
    squariad9 = new Block(720, 580, 30, 50, 0);
    //Part - 1, Level - 2
    squariad10 = new Block(495, 520, 30, 50, 0);
    squariad11 = new Block(525, 520, 30, 50, 0);
    squariad12 = new Block(555, 520, 30, 50, 0);
    squariad13 = new Block(585, 520, 30, 50, 0);
    squariad14 = new Block(615, 520, 30, 50, 0);
    squariad15 = new Block(645, 520, 30, 50, 0);
    squariad16 = new Block(675, 520, 30, 50, 0);
    squariad17 = new Block(705, 520, 30, 50, 0);
    //Part - 1, Level - 3 
    squariad18 = new Block(510, 480, 30, 50, 0);
    squariad19 = new Block(540, 480, 30, 50, 0);
    squariad20 = new Block(570, 480, 30, 50, 0);
    squariad21 = new Block(600, 480, 30, 50, 0);
    squariad22 = new Block(630, 480, 30, 50, 0);
    squariad23 = new Block(660, 480, 30, 50, 0);
    squariad24 = new Block(690, 480, 30, 50, 0);
    //Part - 1, Level - 4
    squariad25 = new Block(525, 430, 30, 50, 0);
    squariad26 = new Block(555, 430, 30, 50, 0);
    squariad27 = new Block(585, 430, 30, 50, 0);
    squariad28 = new Block(615, 430, 30, 50, 0);
    squariad29 = new Block(645, 430, 30, 50, 0);
    squariad30 = new Block(675, 430, 30, 50, 0);
    //Part - 1, Level - 5
    squariad31 = new Block(540, 380, 30, 50, 0);
    squariad32 = new Block(570, 380, 30, 50, 0);
    squariad33 = new Block(600, 380, 30, 50, 0);
    squariad34 = new Block(630, 380, 30, 50, 0);
    squariad35 = new Block(660, 380, 30, 50, 0);
    //Part - 1, Level - 6
    squariad36 = new Block(555, 330, 30, 50, 0);
    squariad37 = new Block(585, 330, 30, 50, 0);
    squariad38 = new Block(615, 330, 30, 50, 0);
    squariad39 = new Block(645, 330, 30, 50, 0);
    //Part - 1, Level - 7
    squariad40 = new Block(570, 280, 30, 50, 0);
    squariad41 = new Block(600, 280, 30, 50, 0);
    squariad42 = new Block(630, 280, 30, 50, 0);
    //Part - 1, Level - 8
    squariad43 = new Block(585, 230, 30, 50, 0);
    squariad44 = new Block(615, 230, 30, 50, 0);
    //Part - 1, Level - 9 
    squariad45 = new Block(600, 180, 30, 50, 0);

    //Part - 2, Level - 1
    box1 = new Block(880, 480, 20, 30, 0);
    box2 = new Block(900, 480, 20, 30, 0);
    box3 = new Block(920, 480, 20, 30, 0);
    box4 = new Block(940, 480, 20, 30, 0);
    box5 = new Block(960, 480, 20, 30, 0);
    box6 = new Block(980, 480, 20, 30, 0);
    box7 = new Block(1000, 480, 20, 30, 0);
    box8 = new Block(1020, 480, 20, 30, 0);
    box9 = new Block(1040, 480, 20, 30, 0);
    box10 = new Block(1060, 480, 20, 30, 0);
    box11 = new Block(1080, 480, 20, 30, 0);
    box12 = new Block(1100, 480, 20, 30, 0);
    //Part - 2, Level - 2
    box13 = new Block(890, 450, 20, 30, 0);
    box14 = new Block(910, 450, 20, 30, 0);
    box15 = new Block(930, 450, 20, 30, 0);
    box16 = new Block(950, 450, 20, 30, 0);
    box17 = new Block(970, 450, 20, 30, 0);
    box18 = new Block(990, 450, 20, 30, 0);
    box19 = new Block(1010, 450, 20, 30, 0);
    box20 = new Block(1030, 450, 20, 30, 0);
    box21 = new Block(1050, 450, 20, 30, 0);
    box22 = new Block(1070, 450, 20, 30, 0);
    box23 = new Block(1090, 450, 20, 30, 0);
    //Part - 2, Level - 3
    box24 = new Block(900, 420, 20, 30, 0);
    box25 = new Block(920, 420, 20, 30, 0);
    box26 = new Block(940, 420, 20, 30, 0);
    box27 = new Block(960, 420, 20, 30, 0);
    box28 = new Block(980, 420, 20, 30, 0);
    box29 = new Block(1000, 420, 20, 30, 0);
    box30 = new Block(1020, 420, 20, 30, 0);
    box31 = new Block(1040, 420, 20, 30, 0);
    box32 = new Block(1060, 420, 20, 30, 0);
    box33 = new Block(1080, 420, 20, 30, 0);
    //Part - 2, Level - 4
    box34 = new Block(910, 390, 20, 30, 0);
    box35 = new Block(930, 390, 20, 30, 0);
    box36 = new Block(950, 390, 20, 30, 0);
    box37 = new Block(970, 390, 20, 30, 0);
    box38 = new Block(990, 390, 20, 30, 0);
    box39 = new Block(1010, 390, 20, 30, 0);
    box40 = new Block(1030, 390, 20, 30, 0);
    box41 = new Block(1050, 390, 20, 30, 0);
    box42 = new Block(1070, 390, 20, 30, 0);
    //Part - 2, Level - 5
    box43 = new Block(920, 360, 20, 30, 0);
    box44 = new Block(940, 360, 20, 30, 0);
    box45 = new Block(960, 360, 20, 30, 0);
    box46 = new Block(980, 360, 20, 30, 0);
    box47 = new Block(1000, 360, 20, 30, 0);
    box48 = new Block(1020, 360, 20, 30, 0);
    box49 = new Block(1040, 360, 20, 30, 0);
    box50 = new Block(1060, 360, 20, 30, 0);
    //Part - 2, Level - 6
    box51 = new Block(930, 330, 20, 30, 0);
    box52 = new Block(950, 330, 20, 30, 0);
    box53 = new Block(970, 330, 20, 30, 0);
    box54 = new Block(990, 330, 20, 30, 0);
    box55 = new Block(1010, 330, 20, 30, 0);
    box56 = new Block(1030, 330, 20, 30, 0);
    box57 = new Block(1050, 330, 20, 30, 0);
    //Part - 2, Level - 7
    box58 = new Block(940, 300, 20, 30, 0);
    box59 = new Block(960, 300, 20, 30, 0);
    box60 = new Block(980, 300, 20, 30, 0);
    box61 = new Block(1000, 300, 20, 30, 0);
    box62 = new Block(1020, 300, 20, 30, 0);
    box63 = new Block(1040, 300, 20, 30, 0);
    //Part - 2, Level - 8
    box64 = new Block(950, 270, 20, 30, 0);
    box65 = new Block(970, 270, 20, 30, 0);
    box66 = new Block(990, 270, 20, 30, 0);
    box67 = new Block(1010, 270, 20, 30, 0);
    box68 = new Block(1030, 270, 20, 30, 0);
    //Part - 2, Level - 9
    box69 = new Block(960, 240, 20, 30, 0);
    box70 = new Block(980, 240, 20, 30, 0);
    box71 = new Block(1000, 240, 20, 30, 0);
    box72 = new Block(1020, 240, 20, 30, 0);
    //Part - 2, Level - 10
    box73 = new Block(965, 210, 20, 30, 0);
    box74 = new Block(990, 210, 20, 30, 0);
    box75 = new Block(1010, 210, 20, 30, 0);
    //Part - 2, Level - 11
    box76 = new Block(980, 180, 20, 30, 0);
    box77 = new Block(1000, 180, 20, 30, 0);
    //Part - 2, Level - 12
    box78 = new Block(990, 150, 20, 30, 0);

    hexagon = new Hexagon(200,200);
    slingShot  = new Slingshot(hexagon.body,{x:300, y:200});
}
function draw(){
    background(0);
    Engine.update(engine);
    strokeWeight(4);

    ground1.display();
    ground2.display();

    squariad1.display();
    squariad2.display();
    squariad3.display();
    squariad4.display();
    squariad5.display();
    squariad6.display();
    squariad7.display();
    squariad8.display();
    squariad9.display();
    squariad10.display();
    squariad11.display();
    squariad12.display();
    squariad13.display();
    squariad14.display();
    squariad15.display();
    squariad16.display();
    squariad17.display();
    squariad18.display();
    squariad19.display();
    squariad20.display();
    squariad21.display();
    squariad22.display();
    squariad23.display();
    squariad24.display();
    squariad25.display();
    squariad26.display();
    squariad27.display();
    squariad28.display();
    squariad29.display();
    squariad30.display();
    squariad31.display();
    squariad32.display();
    squariad33.display();
    squariad34.display();
    squariad35.display();
    squariad36.display();
    squariad37.display();
    squariad38.display();
    squariad39.display();
    squariad40.display();
    squariad41.display();
    squariad42.display();
    squariad43.display();
    squariad44.display();
    squariad45.display();
    

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    box26.display();
    box27.display();
    box28.display();
    box29.display();
    box30.display();
    box31.display();
    box32.display();
    box33.display();
    box34.display();
    box35.display();
    box36.display();
    box37.display();
    box38.display();
    box39.display();
    box40.display();
    box41.display();
    box42.display();
    box43.display();
    box44.display();
    box45.display();
    box46.display();
    box47.display();
    box48.display();
    box49.display();
    box50.display();
    box51.display();
    box52.display();
    box53.display();
    box54.display();
    box55.display();
    box56.display();
    box57.display();
    box58.display();
    box18.display();
    box59.display();
    box60.display();
    box61.display();
    box62.display();
    box63.display();
    box64.display();
    box65.display();
    box66.display();
    box67.display()
    box68.display();
    box69.display();
    box70.display();
    box71.display();
    box72.display();
    box73.display();
    box74.display();
    box75.display();
    box76.display();
    box77.display();
    box78.display();

    hexagon.display();
    slingShot.display();

    squariad1.score();
    squariad2.score();
    squariad3.score();
    squariad4.score();
    squariad5.score();
    squariad6.score();
    squariad7.score();
    squariad8.score();
    squariad9.score();
    squariad10.score();
    squariad11.score();
    squariad12.score();
    squariad13.score();
    squariad14.score();
    squariad15.score();
    squariad16.score();
    squariad17.score();
    squariad18.score();
    squariad19.score();
    squariad20.score();
    squariad21.score();
    squariad22.score();
    squariad23.score();
    squariad24.score();
    squariad25.score();
    squariad26.score();
    squariad27.score();
    squariad28.score();
    squariad29.score();
    squariad30.score();
    squariad31.score();
    squariad32.score();
    squariad33.score();
    squariad34.score();
    squariad35.score();
    squariad36.score();
    squariad37.score();
    squariad38.score();
    squariad39.score();
    squariad40.score();
    squariad41.score();
    squariad42.score();
    squariad43.score();
    squariad44.score();
    squariad45.score();
    

    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
    box10.score();
    box11.score();
    box12.score();
    box13.score();
    box14.score();
    box15.score();
    box16.score();
    box17.score();
    box18.score();
    box19.score();
    box20.score();
    box21.score();
    box22.score();
    box23.score();
    box24.score();
    box25.score();
    box26.score();
    box27.score();
    box28.score();
    box29.score();
    box30.score();
    box31.score();
    box32.score();
    box33.score();
    box34.score();
    box35.score();
    box36.score();
    box37.score();
    box38.score();
    box39.score();
    box40.score();
    box41.score();
    box42.score();
    box43.score();
    box44.score();
    box45.score();
    box46.score();
    box47.score();
    box48.score();
    box49.score();
    box50.score();
    box51.score();
    box52.score();
    box53.score();
    box54.score();
    box55.score();
    box56.score();
    box57.score();
    box58.score();
    box18.score();
    box59.score();
    box60.score();
    box61.score();
    box62.score();
    box63.score();
    box64.score();
    box65.score();
    box66.score();
    box67.score()
    box68.score();
    box69.score();
    box70.score();
    box71.score();
    box72.score();
    box73.score();
    box74.score();
    box75.score();
    box76.score();
    box77.score();
    box78.score();

    textSize(20)
    text("Score: " + count, 1300, 100)
}
 function mouseDragged() {
     var options={
        x: mouseX,
        y: mouseY
     }
    Matter.Body.setPosition(hexagon.body, options)
 }
 function mouseReleased() {
    slingShot.fly();
 }
 function keyPressed() {
    if (keyCode === 32) {
      slingShot.attach(hexagon.body);
    }
  }
  