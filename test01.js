// alert('外部ファイル');
var a = 1;
alert(a);

// alert(a);
var b = 2;
var c = a + b;
alert(c);

var A = 'りんご';
var B = 'バナナ';
var C = A + B;
alert(C);

var fruits = ['りんご', 'バナナ'];
alert(fruits[0]); // 'りんご'がアラートされる
alert(fruits[1]); // 'バナナ'がアラートされる

var fruits = {'name': 'りんご', 'price': 100};
alert(fruits['name']); // 'りんご'がアラートされる
alert(fruits.name); // 'りんご'がアラートされる
alert(fruits['price']); // 100がアラートされる
alert(fruits.price); // 100がアラートされる

var fruits = [
  {'name': 'りんご', 'price': 100},
  {'name': 'バナナ', 'price': 150},
  {'name': 'いちご', 'price': 200},
];
alert(fruits[1].price); // 'バナナ'の金額

var answer = prompt('1 + 1は?');
alert(answer);
