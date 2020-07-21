const rl = require('readline')
const readline = rl.createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question('what is your name?', name => {
  console.log(`hello, ${ name }`)
  readline.close()
})