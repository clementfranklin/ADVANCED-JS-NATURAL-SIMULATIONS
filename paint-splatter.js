
var generator = new Random(2);
var standardDeviation=5;
var mean=0;

var Walker = function() {
    this.x = width/2;
    this.y = height/2;
};

Walker.prototype.display = function(){ 
    
var r = random(1,255);
var r1 = random (1,255);
var r2= random (1,255);

    strokeWeight(20);
    stroke(r, r2, r1);
    point(this.x, this.y);
};

// Randomly move up, down, left, right, or stay in one place
Walker.prototype.walk = function() {
    
    var xStepSize = generator.nextGaussian() * standardDeviation + mean;
    var yStepSize = generator.nextGaussian() * standardDeviation + mean;
  
    this.x += xStepSize;
    this.y += yStepSize;
    
    if(this.x > 400){
        this.x = width/2;
    }
    if(this.y > 400){
        this.y = height/2;
    }
};

var w = new Walker();

draw = function() {
    
    for(var i = 0; i < 20; i++){
         w.walk();
         i++;
        // println(i);
    }
   
    w.display();
};
