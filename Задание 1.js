let n = +prompt('Введите число', '');

if (isNaN( n )) {
    alert( 'Введите число!' );
} else {
    alert( 'Верно!' );
}

if (n % 2) {
    console.log("Нечет");
} else {
    console.log("Чет");
}

