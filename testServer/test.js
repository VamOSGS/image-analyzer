import { Analyzer } from '../src';

const url = document.querySelector('img').src;
const analyzer = new Analyzer(url, 3);

analyzer.analyze();
