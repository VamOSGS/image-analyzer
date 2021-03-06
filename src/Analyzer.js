import { Canvas } from './Canvas';

export class Analyzer {
  constructor(url, quantity) {
    this.url = url;
    this.quantity = quantity;
    this.canvas = new Canvas(this.url);
    this.canvas.init();
  }

  analyze() {
    return this.canvas.draw().then(() => this.canvas.getColors());
  }
}
