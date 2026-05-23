let a= Number(prompt('Mời bạn nhập vào số a:'));
let b= Number(prompt('Mời bạn nhập vào số b:'));
let c = prompt('Mời bạn nhập vào các phép tính(+, -, *, /):');
let math;
switch (c) {
  case '+':
    math = a + b;
    break;
  case '-':
    math = a - b;
    break;
  case '*':
    math = a * b;
    break;
  case '/':
    math = b !== 0 ? a / b : 'Không thể chia cho 0';
    break;
  default:
    math = 'Phép tính không hợp lệ';
}
alert('Kết quả của phép tính trên: ' + math);