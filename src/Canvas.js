import { loadImage } from './utils';

export class Canvas {
  constructor(url) {
    this.url = url;
    this.size = 50;
  }

  init() {
    const canvas = document.getElementById('image-analyzer');
    if (!canvas) {
      this.canvas = document.createElement('canvas');
      this.context = this.canvas.getContext('2d');
      this.canvas.id = 'image-analyzer';
      this.canvas.width = this.size;
      this.canvas.height = this.size;
      document.body.appendChild(this.canvas);
    } else {
      this.canvas = canvas;
    }
  }

  draw() {
    return loadImage(this.url).then((image) => {
      this.image = image;
      this.imgResolutionRatio = image.width / image.height;
      this.canvas.width = this.size * this.imgResolutionRatio;
      this.context.drawImage(image, 0, 0, this.size * this.imgResolutionRatio, this.size);
    });
  }

  getColors() {
    const { width, height } = this.canvas;
    const stepSize = 5;
    const rgb = { r: 0, g: 0, b: 0 };
    this.pixels = this.context.getImageData(0, 0, width, height);
    const { data } = this.pixels;
    // Object.keys(rgb).map(i => (rgb[i] = Math.floor(rgb[i] / count)));
    console.log(rgb);
  }
}
