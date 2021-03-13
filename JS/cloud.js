class Cloud {
    constructor(x,y,width,height) {
      var cloud = createSprite(x, y, width, height)
      cloud.addImage(cloudImage);
      cloud.scale = 0.035;
      var rand = Math.round(random(1, 10));
      switch(rand){
        case 1: cloudGroup1.add(cloud);
        break;
        
        case 2: cloudGroup2.add(cloud);
        break;
        
        case 3: cloudGroup3.add(cloud);
        break;
        
        case 4: cloudGroup4.add(cloud);
        break;
        
        case 5: cloudGroup5.add(cloud);
        break;
        
        case 6: cloudGroup6.add(cloud);
        break;
        
        case 7: cloudGroup7.add(cloud);
        break;
        
        case 8: cloudGroup8.add(cloud);
        break;
        
        case 9: cloudGroup9.add(cloud);
        break;
        
        case 10: cloudGroup10.add(cloud);
        break;
      }
    }
  };

  function createCloud(x,y,width,height){
      var cloud = new Cloud(x,y,width,height);
      cloud.scale = 0.040;
      cloud.scale = 0.050;
      cloud.scale = 0.045;
      cloud.scale = 0.040;
      cloud.scale = 0.035;
      return cloud;
  }