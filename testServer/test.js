import { Analyzer } from '../src';

const url = document.querySelector('img').src;
const analyzer = new Analyzer(url, 3);
analyzer.analyze().then((colors) => {
  colors.forEach((color) => {
    const div = document.createElement('div');
    div.style.width = '50px';
    div.style.height = '50px';
    console.log(color);
    div.style.backgroundColor = `#${color}`;
    document.body.appendChild(div);
  });
});
