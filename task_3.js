let string = "Скрипт написал сам";
let strCnt = string.length;
let x = 1;
let newStr = "";
for(1; x <= strCnt;x++){
    newStr = newStr + string[string.length - x];
}
console.log(newStr);


// вернулся сюда, используя знания массивов, после модуля 5.5 

let string2 = "Скрипт написал сам";
let arrayFromString = string2.split ('');
arrayFromString.reverse();
let newStr2 = arrayFromString.join('');
console.log(newStr2);
