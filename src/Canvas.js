import { loadImage } from './utils';

export class Canvas {
  constructor(url) {
    this.url = url;
  }

  init() {
    const canvas = document.getElementById('image-analyzer');
    if (!canvas) {
      this.canvas = document.createElement('canvas');
      this.context = this.canvas.getContext('2d');
      this.canvas.id = 'image-analyzer';
      this.canvas.width = 500;
      this.canvas.height = 500;
      document.body.appendChild(this.canvas);
    } else {
      this.canvas = canvas;
    }
  }

  draw() {
    loadImage(this.url).then((image) => {
      this.image = image;
      this.imgResolutionRatio = image.width / image.height;
      this.context.drawImage(image, 0, 0, 200 * this.imgResolutionRatio, 200);
    });
  }
}
