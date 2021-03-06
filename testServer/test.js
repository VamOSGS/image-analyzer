import { Analyzer } from '../lib/index';

const url = document.querySelector('img').src;
const analyzer = new Analyzer(url);

analyzer.analyze().then((colors) => {
  console.log(colors);

  colors.forEach((color) => {
    const div = document.createElement('div');
    div.style.display = 'inline-block';
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.backgroundColor = `${color}`;
    document.getElementById('colors').appendChild(div);
  });
});
