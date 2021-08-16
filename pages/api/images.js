// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import fs from 'fs'
import path from 'path'

const imagesDir = 'gallery_images';

const dir = path.resolve('./public', imagesDir);
const images = fs.readdirSync(dir);
images.splice(42);

export default function handler(req, res) {
  res.status(200).json({ images });
}
