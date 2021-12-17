let value = prompt("введите значение");
value = +value
if (isNaN(value)) {
    alert("Упс, кажется, вы ошиблись");


}else if (typeof value == "number") {
    let type = value % 2 ? "нечётный" : "чётный"
    console.log (type);
    alert (type);

}else alert("Упс, кажется, вы ошиблись")
console.log (value);