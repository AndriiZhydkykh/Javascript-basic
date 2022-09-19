//Замыкания
function sayHelloTo(name){
    const message ='Hello' +name
    
    return function(){
        console.log(message)
    }
}
const helloToElena = sayHelloTo("Elena")
console.log(helloToElena)
helloToElena()// мы замкаем функцию и получаем message с первой функции хотя не должны

//Практическое применение у замыканий
function createFrameworkManager(){
    const fw=['Angular','React']
    return {
        print:function(){
        console.log(fw.join(' '))//join Убирает скобки 
        },
        add:function(framework){
            fw.push(framework)
        }
    }
}
const manager=createFrameworkManager()
//console.log(manager)
//console.log(fw)//Будет ошибка
//manager.print()//Получаем ['Angular','React']
manager.add('VueJS')// Получаем 
manager.print()

//setTimeout

const fib =[1,2,3,5,8,13]
for (var i=0; i < fib.length; i++){//работать не будет, нужно написать let вместо  var
    setTimeout(function(){
        console.log(`fib[${i}]=${fib[i]}`)
    },1500 )
}
//Что бы работал такой код ег онудно замкнуть
const fib1 =[1,2,3,5,8,13]
    for (var i=0; i < fib1.length; i++){
        (function(j){
            setTimeout(function(){
                console.log(`fib1[${j}]=${fib1[j]}`)
            },1500 )
        })(i)
    }