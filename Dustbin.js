class Dustbin{
    constructor(x, y){
        var options = {
            isStatic:true
        }
        this.x = x;
        this.y = y;
        this.angle = 0;
        this.bottom = Bodies.rectangle(this.x, this.y, 200, 20, options);
        World.add(world, this.bottom);
        this.left = Bodies.rectangle(this.x-100, this.y-50, 20, 100, options);
        Matter.Body.setAngle(this.left, this.angle);
        World.add(world, this.left);
        this.right = Bodies.rectangle(this.x+100, this.y-50, 20, 100, options);
        Matter.Body.setAngle(this.right, -1*this.angle);
        World.add(world, this.right);
        this.image = loadImage("dustbingreen.png");
    }
    display(){
        push();
        translate(this.left.position.x, this.left.position.y);
        rectMode(CENTER);
        angleMode(RADIANS);
        stroke(255);
        fill(255);
        rotate(this.angle);
        rect(0, 0, 20, 100);
        pop();

        push();
        translate(this.right.position.x, this.right.position.y);
        rectMode(CENTER);
        angleMode(RADIANS);
        stroke(255);
        fill(255);
        rotate(-1*this.angle);
        rect(0, 0, 20, 100);
        pop();

        push();
        translate(this.bottom.position.x, this.bottom.position.y);
        rectMode(CENTER);
        stroke(255);
        fill(255);
        imageMode(CENTER);
        image(this.image, 0, -107, 200, 214);
        pop();
    }
}