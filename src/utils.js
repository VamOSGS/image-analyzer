export function loadImage(url) {
  return new Promise((resolve) => {
    const image = new Image();
    image.addEventListener('load', () => {
      resolve(image);
    });
    image.src = url;
  }).catch(err => console.log(err));
}

export function rgbToHex(r, g, b) {
  const rh = (rgb) => {
    let hex = Number(rgb).toString(16);
    if (hex.length < 2) {
      hex = `0${hex}`;
    }
    return hex;
  };
  const red = rh(r);
  const green = rh(g);
  const blue = rh(b);
  return red + green + blue;
}
