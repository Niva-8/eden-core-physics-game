// Simulates intelligent frame pacing to prevent thermal throttling
export class HeatBypassCore {
  constructor() {
    this.lastTempEstimate = 30;
    this.coolRate = 0.1;
  }

  adapt(dt) {
    // Fake adaptive cycle: if frame rate drops, lighten physics load
    this.lastTempEstimate += (Math.random() - 0.5) * 0.2;
    if (this.lastTempEstimate > 42) this.coolRate += 0.01;
    if (this.lastTempEstimate < 38) this.coolRate -= 0.01;
    this.coolRate = Math.max(0, Math.min(0.2, this.coolRate));
  }
}
