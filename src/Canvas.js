import { loadImage, rgbToHex } from './utils';

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
    const { height, width } = this.canvas;
    this.pixels = this.context.getImageData(0, 0, width, height);
    const rgb = { r: 0, g: 0, b: 0 };
    const pixelInterval = 5;
    let count = 0;

    const { data } = this.pixels;
    for (let i = pixelInterval * 4; i < data.length; i += pixelInterval * 4) {
      count++;
      rgb.r += data[i];
      rgb.g += data[i + 1];
      rgb.b += data[i + 2];
    }
    rgb.r = Math.floor(rgb.r / count);
    rgb.g = Math.floor(rgb.g / count);
    rgb.b = Math.floor(rgb.b / count);
    return [rgbToHex(rgb.r, rgb.g, rgb.b)];
  }
}
