class box (){

constructor(x,y,width,height){
    var options={
        isStatic : true,friction : 0.99
    }
    this.bodies=Bodies.rectangle(x,y,width,height,options)
    World.add(world,this.bodies);
    this.width=width;
    this.height=height;
   }
  display() {
      var pos=this.bodies.position;
      push();
      rectMode(CENTER);
      fill("green");
      rect(pos.x,pos.y,this.width,this.height)
      pop();
  }
  
  
}
  