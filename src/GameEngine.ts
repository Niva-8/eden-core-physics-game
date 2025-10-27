export class GameEngine {
  private ctx: CanvasRenderingContext2D
  private animationFrame: number = 0

  constructor(private canvas: HTMLCanvasElement) {
    this.ctx = canvas.getContext('2d')!
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }

  start() {
    const loop = () => {
      this.clear()
      this.update()
      this.draw()
      this.animationFrame = requestAnimationFrame(loop)
    }
    loop()
  }

  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
  }

  update() {
    // Eden-based logic or physics here
  }

  draw() {
    this.ctx.fillStyle = '#14E956'
    this.ctx.fillRect(100, 100, 200, 200)
  }

  triggerScrollEventEffect() {
    this.ctx.fillStyle = 'gold'
    this.ctx.fillRect(Math.random() * 400, Math.random() * 400, 80, 80)
  }
}
