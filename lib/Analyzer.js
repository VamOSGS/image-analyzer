"use strict";

var _Canvas = require('./Canvas');

var Canvas = _Canvas.Canvas;

class Analyzer {
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

exports.Analyzer = Analyzer;