window.onload = function () {
  var oBtn = document.getElementById("btn1");
  oBtn.onclick = function (ev) {// 首先这个 ev 是一个形参，这里你用什么变量名来表示这个形参第都是可以的，看示例一。
    var e = ev || window.event; // 这里使用或运算来处理兼容性问题和你之前问我的那个使用三目运算符处理兼容性问题都是可以的，原理就是利用了或运算的短路操作。看示例二。
    console.log(e);
  };
};

// -----------------------------------------------示例一
function sum1 (a, b) {
  return a + b
}
sum1(1, 2)

function sum2 (num1, num2) {
  return num1 + num2
}
sum2(1, 2)

// 上述两个函数 sum1 和 sum2 是功能相同的两个函数
// 区别就是，调用这两个函数的时候，在 sum1 中我是用了 a, b 这两个符号来分别代替了 1, 2
// 在 sum2 中我用了 sum1, sum2 这两个符号来分别代替了 1, 2

// -----------------------------------------------示例二
// 声明一个函数，函数的功能描述:
// 在控制台输出一个字符，输出的时候需要在字符前面拼接一个  $ 符号，或者传入的自定义符号(如果有自定义符号则拼接自定义符号)。
var defaultHeader = '$'

function printchar (char, charHeader) {
  var thisHeader = charHeader || defaultHeader
  console.log(thisHeader + char)
}

printchar('a', '#') // 输出 #a
printchar('a') // 输出 $a

// 或运算返回的是第一个非零的值，并且在判断出第一个非零值之后不再继续判断。所以第一个调用的时候 thisHeader 的值是 charHeader 的值为 #
// 第二个调用的时候，因为 charHeader 我并没有传值，所以他的值为 undefined， 所以或运算会继续往后执行判断，判断到 defaultHeader 的值为非零值的时候会把 defaultHeader 的值 $ 赋给 thisHeader