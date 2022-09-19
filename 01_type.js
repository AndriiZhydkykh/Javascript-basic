//null, undefined, boolean, number,string,object,symbol
console.log(typeof 0) // number
console.log(typeof false)//boolean
console.log(typeof 'Javascript')//string
console.log(typeof undefined)//undefined функции которые ничего не возвращают по умолчанию возвращают undefind
console.log(typeof Math)//object
console.log(typeof Symbol('JS'))//symbol
console.log(typeof null) //object но на самом деле nun
console.log(typeof function(){})//object - но показывает function

// Приведение типов
let language='Javascript'
if (language){
    console.log('The best language is :', language)
}
//'',0,null,undefined,Nan,false - все будет false

//Строки и числа
console.log(1 +'2')//результат строка 12//string
console.log(""-1 +0)// Получим -1 как число//number
console.log("3"*8)//24 число//number
console.log(4+10+'px')//14px string
console.log('px'+4+10)//px410 string
console.log('42'-40)// 2 number
console.log('42px'-40)//Nun
//==vs=== 
// == -сравниевает по значению с приведением сравниваемых к одному типу
//=== - просто сравнивает по значению без приведения к типу
console.log(2=='2')//true
console.log(2==='2')//false
//Всегда рекомендуется использовать ===
//============
