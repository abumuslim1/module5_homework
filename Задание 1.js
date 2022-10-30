let n = +prompt('Введите число', '');

let v = Number(n);

if (typeof v == 'number') {
    alert('Число!');

} else {
    alert('НЕ чилсо!');
}

if (isNaN( v )) {
    alert( 'Введите число!' );
} else {
    alert( 'Верно!' );
}

if (n % 2) {
    console.log("Нечет");
} else {
    console.log("Чет");
}




