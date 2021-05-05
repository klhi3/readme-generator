const inquirer = require('inquirer');
const fs = require('fs');


//prompted for information about my application repository

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of application repository?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'describe your project:',
      },
    // {
    //     type: 'input',
    //     name: 'title',
    //     message: 'What is the title?',
    //   },

    // {
    //   type: 'checkbox',
    //   message: 'What languages do you know?',
    //   name: 'stack',
    //   choices: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
    // },
    // {
    //   type: 'list',
    //   message: 'What is your preferred method of communication?',
    //   name: 'contact',
    //   choices: ['email', 'phone', 'telekinesis'],
    // },
  ])
  .then((data) => {
    const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });
