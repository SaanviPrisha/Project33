class Hexagon  {
    constructor(x,y){
      var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }
          this.body = Bodies.circle(50, 200, 20, options);
          World.add(world, this.body);

      this.image = loadImage("Hexagon.png")
    }
  
    display() {
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      image(this.image, 0, 0, 40, 40)
      pop();
    }
  }
  