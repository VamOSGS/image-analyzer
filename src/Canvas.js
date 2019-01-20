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
      this.canvas.style.display = 'none';
      document.body.appendChild(this.canvas);
    } else {
      this.canvas = canvas;
    }
  }

  draw() {
    return loadImage(this.url)
      .then((image) => {
        this.image = image;
        this.imgResolutionRatio = image.width / image.height;
        this.context.drawImage(image, 0, 0, this.size, this.size);
        console.log(this.canvas.toDataURL());
      })
      .catch(console.log);
  }

  // eslint-disable-next-line class-methods-use-this
  getAvgColor(data) {
    const rgb = { r: 0, g: 0, b: 0 };
    const stepSize = 5;
    const rgbKeys = Object.keys(rgb);
    let count = 0;
    for (let i = stepSize * 4; i < data.length; i += stepSize * 4) {
      count++;
      for (let j = 0; j < rgbKeys.length; j++) {
        rgb[rgbKeys[j]] += data[i + j];
      }
    }
    rgbKeys.forEach(key => (rgb[key] = Math.floor(rgb[key] / count)));
    return rgbToHex(rgb.r, rgb.g, rgb.b);
    // return `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
  }

  getColors() {
    const { height, width } = this.canvas;
    const parts = [
      [width / 4, height / 4, width / 4, height / 4],
      [0, 0, width / 2, height / 2],
      [width / 2, 0, width / 2, height / 2],
      [0, height / 2, width / 2, height / 2],
      [width / 2, height / 2, width / 2, height / 2],
    ];
    this.pixels = this.context.getImageData(0, 0, width, height);
    return parts.map((n, k) => this.getAvgColor(this.context.getImageData(...parts[k]).data));
  }
}
