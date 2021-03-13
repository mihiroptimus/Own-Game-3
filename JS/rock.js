class Rock {
    constructor(x,y,width,height) {
      var rock = createSprite(x, y, width, height)
      rock.addImage(rockImage);
      coinModifier = createSprite(x, y - 50, 10, 10);
      coinModifier.addImage(coinModifierImg);
      coinModifier.scale = 0.2;
      coinModifierGroup.add(coinModifier);
    }
  };

  function createRock(x,y,width,height){
      var rock = new Rock(x,y,width,height);
      rock.scale = 0.040;
      rock.scale = 0.050;
      rock.scale = 0.045;
      rock.scale = 0.040;
      rock.scale = 0.035;
      return rock;
  }