const path = require('path');
const fs = require('fs');

const files = ['.bash_profile', 'kjkjhh', '.npmrc'];

files.forEach(file => {
  try {
    const filePath = path.resolve(process.env.HOME, file);
    const data = fs.readFileSync(filePath);
    console.log(`File [${file}] data is`, data);
  } catch (err) {
    console.log(`File [${file}] read err: [${err}]`);
  }
});
