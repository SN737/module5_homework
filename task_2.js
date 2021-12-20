let x = undefined;
let type = typeof x;
if (type == 'number') {
    alert( 'X - Число' );
} else if (type == 'string') {
    alert( 'X - Строка' );
} else if (type  == 'boolean') {
    alert( 'X - логический тип' );
} else { alert ('Тип x не определён');
}