class Snowflake {
    constructor(x, y, r) {
        var options = {
            density : 1,
            resistution : 0.2,
            friction : 1
        };

    this.r = r;

    this.body = Bodies.circle(x, y, this.r, options);
    this.image = loadImage("background.png");

    World.add(world, this.body);
    };

    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        noStroke();
        imageMode(CENTER);
        image(this.image, 0, 0, this.r,this.r);
        pop();
    };
};