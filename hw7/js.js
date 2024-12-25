//1
let name = 'Vlada';
let age = 25;
console.log( name, age);

//2
let str1 = 'text';
let str2 = ' text';
let str3 = str1 + str2;

//3
let num1 = 5;
let num2 = 15;
console.log(num1 + num2);
//
let num3 = prompt('Введіть перше число для того щоб виконати множення');
let num4 = prompt('Введіть друге число');
let answ = num3 * num4;
alert(answ);

//4
let Str = '21';
let Num = +Str;
console.log(Num);

//5
let str = 'text';
let numb = 7;
console.log(typeof str, Boolean(str));
console.log(typeof numb, Boolean (numb));

//** alert (typeof null);
//null - ОТДЕЛЬНЫЙ тип данных среди других типв (bool, number, string, BigInt, undefined and Obj).
//null НЕ является объектом. Это специальное значение с отдельным типом, используется только для значения null в тех случаях,
//когда нужно акцентировать внимание, что переменная не содержит в себе никакого значения.
// То, что езультатом вызова typeof null является "object" - это официально признанная ошибка в typeof (ошибка в языке / баг), 
// ведущая начало с времён создания JavaScript и сохранённая для совместимости существующего кода с новыми версиями языка.
//Такая ошибка произошла потому что еще в первой версии языка значения переменных хранились в 32-битных ячейках:
// 29-31 бит: само значение;
// 1-3 бита: метка типа данных;
// Было всего пять вариантов метки типа:
// 000: object;
// 1: integer;
// 010: double;
// 100: string;
// 110: boolean;
// Также было два специальных зарезервированных значения:
// undefined (JSVAL_VOID) и null (JSVAL_NULL) — указатель на NULL (machine code NULL pointer), то есть, метка объекта и ссылка на то, что его численное представление равно нулю.
// И получилось, что typeof стал определять null как object — он проверял метку типа, которая сообщала ему, что null — это не что иное, как object.












