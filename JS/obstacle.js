class Obstacle {
  constructor() {
    this.x = 550;
    this.y = 508;
    this.width = 70;
    this.height = 200;

    const image = document.createElement("img");
    image.src =
      "https://res.cloudinary.com/du5v6izdd/image/upload/v1654929516/Game/Marine_b23ib8.png";
    image.onload = () => {
      this.marine = image;
    };
  }
  left() {
    return this.x;
  }

  right() {
    return this.x + this.width;
  }

  top() {
    return this.y;
  }

  bottom() {
    return this.y + this.height;
  }

  crashWith(mimich) {
    return (
      this.bottom() >mimich.top() &&
      this.top() <mimich.bottom() &&
      this.right() >mimich.left() &&
      this.left() <mimich.right()
    );
  }
  drawObstacle() {
    if (!this.marine) return;
    ctx.drawImage(this.marine, this.x, this.y, this.width, this.height);
  }
}