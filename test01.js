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

var answer = prompt('1 + 1は?');
alert(answer);

var answer = prompt('1 + 1は?');
if (answer == 2){
  alert('正解');
}else {
  alert('不正解');
}

var answer = prompt('りんごとバナナどちらが好きですか？');
if (answer == 'りんご'){
  alert('りんごは英語でappleです');
}else if(answer == 'バナナ'){
  alertt('バナナは英語でbananaです');
}else{
  alert('りんご or バナナを入力してください');
}
