const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const dist = path.join(root, 'dist');
const files = [
  'robots.txt',
  'sitemap.xml',
  'site.webmanifest',
  'favicon.ico',
  'favicon-32x32.png',
  'apple-touch-icon.png',
  'pwa-192x192.png',
  'pwa-512x512.png',
  'og-image.png',
];

for (const file of files) {
  fs.copyFileSync(path.join(root, file), path.join(dist, file));
}
