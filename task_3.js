let string = "Скрипт написал сам";
let strcnt = string.length;
let x = 1;
let newstr = "";
for(1; x <= strcnt;x++){
    newstr = newstr + string[string.length - x];
}
console.log(newstr);
