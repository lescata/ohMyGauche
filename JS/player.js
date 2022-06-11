class Melanchon {
  constructor() {
    this.x = 50; // coordoné X de la creation du joueur
    this.y = 650; // coordoné Y de la creation du joueur
    this.w = 100;
    this.h = 220;

    this.vx = 0; //vitesse sur axe X
    this.vy = 0; //vitesse sur axe Y

    const image = document.createElement("img"); // <img>
    image.src =
      "https://res.cloudinary.com/du5v6izdd/image/upload/v1654538042/Game/mimich_pgapjp.png"; // telechargement GO
    image.onload = () => {
      this.mimichImage = image;
    };
  }
  left() {
    return this.x;
  }

  right() {
    return this.x + this.w;
  }

  top() {
    return this.y;
  }

  bottom() {
    return this.y + this.h;
  }

  jump() {
    if (this.vy !== 0) {
      // ne saute pas si pas sur le sol
      return;
    }
    this.vy = -40; // grand saut, might need to reduce
  }
  forward() {
    this.vx = 8; //avance de 5px
  }
  backward() {
    this.vx = -5; //recule de 5px
  }
  update() {
    this.vy += gravity;

    let sol = H;

    if (this.vy > maxspeed) {
      this.vy = maxspeed;
    }

    this.x += this.vx;
    this.y += this.vy;

    if (this.x > 550) {
      this.x = 520;
    }
    if (this.x < -40) {
      this.vx = 0;
    }

    if (this.y + this.h > sol) {
      console.log("floor limit reach");
      this.y = sol - this.h;
      this.vy = 0;
    }
  }

  paint() {
    //ctx.fillRect(this.x, this.y, this.w, this.h); // rect
    ctx.drawImage(this.mimichImage, this.x, this.y, this.w, this.h);

    //if (!this.mimichImage) return
    // ctx.drawImage(  )
  }
}
