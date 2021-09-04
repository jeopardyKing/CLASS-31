class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smoke = loadImage("sprites/smoke.png");
     
    //array 1 stores array2 in it create in display
    this.array1 = []
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
     
    //If condition tells to create smoke omage only if velocity > 10 and pos>200
    if(this.body.velocity.x>10 && this.body.position.x>200){
    
      //array 2 keeps on updating as birds bird position changes because it is sitred in display with is indraw function
    var array2 = [this.body.position.x,this.body.position.y];
     
    //adds array2 in array 1
    this.array1.push(array2); 
    }

    //for loop function for adding smoke trajectory of bord with gap
    for (var i = 0; i<this.array1.length; i++){

      image(this.smoke,this.array1[i][0],this.array1[i][1]);
    }

  }

}
