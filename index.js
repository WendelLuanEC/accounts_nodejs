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

    if(action === 'Criar conta'){
      createAccount()
    }

  })
    .catch(err => console.log(err))
}

// create an account

function createAccount() {
  console.log(chalk.bgGreen.black('Parabéns por escolher o nosso banco!'))
  console.log(chalk.green('Defina as opções de conta a seguir'))
}



