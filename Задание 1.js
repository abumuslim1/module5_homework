let n = +prompt('Введите число', '');

let v = Number(n);

if (typeof v == 'number') {
    alert('Число!');

} else {
    alert('НЕ чилсо!');
}

if (isNaN( v )) {
    alert( 'Упс, кажется вы ошиблись' );
} else {
    alert( 'Верно!' );
}

if (v % 2) {
    console.log("Нечет");
} else {
    console.log("Чет");
}