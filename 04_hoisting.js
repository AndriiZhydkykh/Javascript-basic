console.log(sum(1,41))
function sum(a,b){
    return a+b
}
//К функциям можно обращатся до того как мы их определили
console.log(i)// undefined
var i=42
console.log(i)

//console.log(num)// error
//let num =42
//console.log(num)

//Functiom Declaration - мы можем вызывать функцию где угодно до или после нее
console.log(square(25))
function square(num){
    return num**2// num возведенная в степень 2
}
//Function Expression
console.log(square(25))//Будет ошибка
var square1=function(num){
    return num **2
}
console.log(square(25))//Будет работать