class Heli {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.rand = Math.round(random(1,2));

      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      this.width = 1000
      this.height = 10

    }
  };
  function drawHeli(){
    helicopters.forEach(element => {
        element.display();
    });
}
  function createHeli(x,y,width,height){
      var heli = new Heli(x,y,width,height);
      helicopters.push(heli);
      return heli;
  }