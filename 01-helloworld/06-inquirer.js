const inquirer = require('inquirer')

const questions = [
  {
    type: 'input',
    name: 'name',
    message: 'what is your name? '
  },
  {
    type: 'input',
    name: 'age',
    message: 'how old are you? '
  }
]

inquirer.prompt(questions).then(answers => {
  console.log(`hello ${answers['age']} 岁的 ${ answers['name'] }`)
})
