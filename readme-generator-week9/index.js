const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown.js');
const questions = [{
    type: "input",
    name: "author",
    message: "Name of the author?"
  },
  {
    type: "input",
    name: "username",
    message: "Github username?"
  },
  {
    type: "input",
    name: "email",
    message: "Email address?"
  },
  {
    type: "input",
    name: "title",
    message: "Project title?"
  },
  {
    type: "input",
    name: "description",
    message: "Description of your project."
  },
  {
    type: "input",
    name: "installation",
    message: "How to install dependencies"
  },
  {
    type: "input",
    name: "usage",
    message: "How should the user be using the repo?"
  },
  {
    type: "list",
    name: "license",
    message: "What kind of license should your project have?",
    choices: ["MIT", "Apache 2.0", "GPLv2"]
  },
  {
    type: "input",
    name: "contribute",
    message: "Would you like other developers to contribute?"
  },
  {
    type: "input",
    name: "tests",
    message: "Run tests for your application."
  }
];


prompt = () => {
  inquirer
    .prompt(questions)
    .then((answers) => {
      let markdown = generateMarkdown(answers)
      console.log(markdown)
      writeFile(markdown)
    })
    .catch((error) => {
      if (error.isTtyError) {
      } else {
      }
    });
}

const writeFile = fileContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile('your-README.md', fileContent, err => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: 'File created!'
      });
    });
  });
};

function init() {
  prompt();
}

init();