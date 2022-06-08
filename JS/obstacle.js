class Obstacle {
    constructor() {
      this.w = random(W/2, 2/4*W); // between 1/3 and 2/3 of W
      this.h = 100;
  
      this.x = random(0, W-this.w);
      this.y = -this.h;
    }
}