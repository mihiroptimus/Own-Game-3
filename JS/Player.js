class Plane extends BaseClass {
  constructor(x,y){
  if(height/20 >40){
    super(x,y,height/20,height/20);
  }else if(height/20 <40){
    super(x + 400,y,30,50);
  }
  if(direction === "left"){
    
  }
    
    this.image = loadImage("images/planeRight.png");
    

}
  
  
  display() {

    super.display();
  
  }

  changeImage(img){
    this.image = img;

  }
}
