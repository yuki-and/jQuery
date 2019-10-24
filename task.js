//課題１
var number = prompt(5);
if (number >= 0){
  alert('正の数');
}else{
  alert('負の数');
}

// 課題２
var number = prompt(5);
if (number >= 0){
  alert('正の数');
}else if (number < 0){
  alert('負の数');
}else{
  alert('数値を入力してください');
}

// 課題３
var animals = ['パンダ', 'ライオン', 'キリン'];
var i = 0;
while (i < animals.length){
  alert(animals[i]);
  i++;
}
