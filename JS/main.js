const ctx = document.querySelector('canvas').getContext('2d')

class Melanchon {
  constructor() {
    this.x = 50
    this.y = 650
    this.w = 50
    this.h = 50
    
    const img = document.createElement('img')
    img.src = 'https://res.cloudinary.com/dtqr57xyj/image/upload/v1653500499/238-2382454_green-ghost-clipart-hd-png-download_copy.png'
    
    img.onload = () => {
      console.log('Melanchon Download sucessfull')
      this.draw()
    }
    
    this.img = img
  }
  
  draw() {
    ctx.drawImage(this.img, this.x, this.y)
  }
}



const melanchon1 = new Melanchon()
console.log('fantom1=', melanchon1)

document.addEventListener('keydown', function (event) {
  console.log('keyCode=', event)
  
  if (event.key === 'ArrowRight') {
    ctx.clearRect(0,0,550,700)
    melanchon1.x += 20
    melanchon1.draw()
  }
  if (event.key === 'ArrowLeft') {
    ctx.clearRect(0,0,550,700)
    melanchon1.x -= 20
    melanchon1.draw()
  }
  
  if (event.key === 'ArrowDown') {
    ctx.clearRect(0,0,550,700)
    melanchon1.y += 20
    melanchon1.draw()
  }
  if (event.key === 'ArrowUp') {
    ctx.clearRect(0,0,550,700)
    melanchon1.y -= 20
    melanchon1.draw()
  }
})