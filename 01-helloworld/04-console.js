// const x = 1
// const y = 2
// const z = 3
// console.count(
//   'x 的值为 ' + x + ' 且已经检查了几次？'
// )
// console.count(
//   'x 的值为 ' + x + ' 且已经检查了几次？'
// )
// console.count(
//   'y 的值为 ' + y + ' 且已经检查了几次？'
// )

// const oranges = ['橙子', '苹果']
// const apples = ['苹果']
// oranges.forEach(fruit => {
//   console.count(fruit)
// })
// apples.forEach(fruit => {
//   console.count(fruit)
// })

// const function2 = () => console.trace()
// const function1 = () => function2()
// function1()

// const doSomething = () => {
//   let sum = 0
//   for(let i = 0; i < 1000; i++) {
//     sum++
//   }
//   return sum
// }

// const measureDoingSomething = () => {
//   console.time('doSomething()')
//   doSomething()
//   console.timeEnd('doSomething()')  
// }

// measureDoingSomething()

// const chalk = require('chalk')
// console.log(chalk.blue.bgRed.bold('hello') + ' world')

const progressBar = require('progress')

const bar = new progressBar(':bar', { total: 40 })

const timer = setInterval(() => {
  bar.tick()
  if (bar.complete) {
    console.log('\ncomplete\n')
    clearInterval(timer)
  }
}, 100);