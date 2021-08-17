const fs = require('fs');
const path = require('path');
const sizeOf = require('image-size');

const imagesDir = 'gallery_images';
const dir = path.resolve('./public', imagesDir);
const imageNames = fs.readdirSync(dir);

const images = imageNames.map(imgName => {
  const dimensions = sizeOf(`${dir}\\${imgName}`);
  return {
    src: `/gallery_images/${imgName}`,
    width: dimensions.width,
    height: dimensions.height,
  }
});

fs.writeFileSync('./imagesData.json', JSON.stringify(images, null, 2), {
  flag: 'w',
});

console.log('bye');
