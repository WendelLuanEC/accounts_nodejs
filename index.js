const fs = require('fs')
const inquirer = require('inquirer')
const chalk = require('chalk')

operation()

function operation() {
  inquirer.prompt([
    {
      type: 'list',
      name: 'action',
      message: 'o que você deseja fazer?',
      choices: ['Criar conta', 'Consultar saldo', 'Depositar', 'Sair']
    }
  ]).then((answer) => {

    const action = answer['action']
    console.log(action)

  })
    .catch(err => console.log(err))
}