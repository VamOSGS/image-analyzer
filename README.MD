## Image-analyzer

#### Simple Javascript library for analyzing images.
![Screenshot](./rm/rm1.png)

#### Install it with node:

```bash
npm install react-preloaders --save
```

or

```bash
yarn add react-preloaders --save
```

#### or with link

```html
<script src="./https://unpkg.com/image-analyzer@0.1.0/lib/index.js"></script>
```

#### Usage

### ATTENTION IN THIS VERSION OF PACKAGE IMAGE NEED TO BE LOCAL

#### import in your js or link in html then use like this 

```js
const analyzer = new Analyzer(url);

analyzer
  .analyze()
  .then(colors => {
    // HERE YOU GOT ARRAY OF COLORS(hex)
    console.log(colors);
  })
  .catch(console.error);
```

## WORKING ON PROGRESS...
