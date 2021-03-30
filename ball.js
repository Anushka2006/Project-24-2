class Ball{
    constructor(x,y, r){
        var options={
            restituition: 0.3,
            friction: 0.5,
            density: 1.0
        }
        this.r= r;
       this.body=Bodies.circle(x,y,(this.r-20)/2,options);
       World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
     
      fill("white");
      ellipse(0, 0, this.r,this.r);
      pop();
    }
}