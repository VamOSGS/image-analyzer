"use strict";

function loadImage(url) {
  return new Promise(resolve => {
    const image = new Image();
    image.src = url;
    image.addEventListener('load', () => {
      resolve(image);
    });
  }).catch(err => console.error(err));
}

exports.loadImage = loadImage;

function rgbToHex(r, g, b) {
  const rh = rgb => {
    let hex = Number(rgb).toString(16);

    if (hex.length < 2) {
      hex = `0${hex}`;
    }

    return hex;
  };

  const red = rh(r);
  const green = rh(g);
  const blue = rh(b);
  return `#${red}${green}${blue}`;
}

exports.rgbToHex = rgbToHex;