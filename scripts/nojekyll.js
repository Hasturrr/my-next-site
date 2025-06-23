// scripts/nojekyll.js
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'out', '.nojekyll');

fs.writeFileSync(filePath, '');
console.log('✅ .nojekyll created');
