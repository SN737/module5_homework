//Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль. 
//Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. Проверить, все ли элементы в массиве одинаковые.

let arr = [1,2,1];
let x = arr[0];
let flag = true;
arr.forEach(function(item, index, array) {
    if (item === x) {
        x = item;
    } else {
        flag = false;
    }
}
);
console.log(flag);