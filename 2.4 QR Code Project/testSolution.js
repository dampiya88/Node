import inquirer from 'inquirer';
var qr = require('qr-image');

inquirer
  .prompt([
    console.log("Please enter website name")
  ])
  .then((answers) => {
    var qr_svg = qr.image(answers, { type: 'svg' });
    qr_svg.pipe(require('fs').createWriteStream('qr_svg.svg'));
    
    var svg_string = qr.imageSync(answers, { type: 'svg' });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });