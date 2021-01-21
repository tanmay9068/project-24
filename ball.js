class Ball {
    constructor(x, y,radius) {
      var options = {
          'restitution':0.8,
          'friction':1,
          'density':1.0
      }
      Matter.Bodies.circle(x, y, radius, options)
     this.radius = radius
      
      //World.add(world, this.body);
    }
    display(){
      //var pos =this.body.position;
     // var angle = this.body.angle;
      push();
      //translate(pos.x, pos.y);
     // rotate(angle);
     // rectMode(CENTER);
      strokeWeight(4)
      stroke("red")
      fill("red");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };