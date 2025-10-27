import { HeatBypassCore } from "./heatBypassCore";

export class EdenPhysics {
  constructor(canvas) {
    this.canvas = canvas;
    this.player = { x: 100, y: 100, vx: 0, vy: 0, size: 20 };
    this.gravity = 9.8;
    this.heatBypass = new HeatBypassCore();
  }

  update(dt, keys) {
    const speed = 180;
    if (keys["ArrowLeft"] || keys["a"]) this.player.vx = -speed;
    else if (keys["ArrowRight"] || keys["d"]) this.player.vx = speed;
    else this.player.vx = 0;

    if ((keys["ArrowUp"] || keys["w"]) && this.player.y >= this.canvas.height - this.player.size)
      this.player.vy = -320;

    // physics integration
    this.player.vy += this.gravity * 30 * dt;
    this.player.x += this.player.vx * dt;
    this.player.y += this.player.vy * dt;

    // floor collision
    if (this.player.y > this.canvas.height - this.player.size) {
      this.player.y = this.canvas.height - this.player.size;
      this.player.vy = 0;
    }

    this.heatBypass.adapt(dt);
  }

  render(ctx) {
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    ctx.fillStyle = "#00ffbb";
    ctx.beginPath();
    ctx.arc(this.player.x, this.player.y, this.player.size, 0, Math.PI * 2);
    ctx.fill();
  }
}
