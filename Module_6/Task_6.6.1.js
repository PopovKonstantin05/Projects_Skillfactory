const userWord = prompt("Введите слово или словосочетание для проверки:");
const userWordEnd = userWord.replaceAll(' ', '');
let sum = 0;

for(let i=0; i<=userWordEnd.length-1; i++){
  if(userWordEnd[i] === userWordEnd[userWordEnd.length-1-i] || userWordEnd[i].toUpperCase() === userWordEnd[userWordEnd.length-1-i] || userWordEnd[i] === userWordEnd[userWordEnd.length-1-i].toUpperCase()){
    sum++;
  }
}

if(sum === userWordEnd.length){
  console.log(`Слово ${userWord} является палиндромом`);
} else {
  console.log(`Слово ${userWord} не является палиндромом`);
}