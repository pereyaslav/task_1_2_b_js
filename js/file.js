var arrName = new Array(5);
for (var i = 0; i < arrName.length; i++) {
    arrName[i] = prompt('Введите  элемент массива', '');
}
console.log(arrName);
var nameUser = prompt('Введите имя пользователя', '');

var flag = 0;
for (var i = 0; i < arrName.length; i++) {
    if (arrName[i] == nameUser) {
        flag = 1;
    }
}

if (flag == 1) {
    alert(nameUser + ", вы успешно вошли");
} else {
    alert('Ошибка');
}