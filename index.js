const inquirer = require('inquirer')
const fs = require('fs')
// Section to Input title of project Needs to be the title of the Readme
inquirer
  .prompt([
    {
        type: 'input',
        message: 'What would you like to title this read.ME?',
        name: 'projectTitle',
    }
  ])
  .then((data) => {
    const fileName = `${data.projectTitle.toLowerCase().split(' ').join('')}.json`;

    fs.writeFile(fileName, JSON.stringify(data, null, '\t'), (err) => err ? console.log(err) : console.log('Success!')
    );
  })
//   .catch(error => {
//     if(error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else went wrong
//     }
//   });
//Description of project goes here (Needs to be a Header in the ReadME)
//Optional Table of Contents (Links between the sections)
//Installation? (Needs to be a Header in the ReadME)
//Usage (Needs to be a Header in the ReadME)
//License (Liscense choose from a list) Adds a badge near the top of the readme that explains what license its unter
//Contributing (Needs to be a Header in the ReadME)
//Tests (Needs to be a Header in the ReadME)
//Submit Questions (Adds Github account link and Email to submit questions for)