// Cкоуп указывает на доступность переменных
function funcA(){
    let a=1
    function funcB(){
        let b=2
        function funcC(){
            let c = 3
            console.log('funcC :',a,b,c)
        }
        funcC()
        console.log('funcB',a,b)
    }
    funcB()
        console.log('funcA',a)
}
funcA()
//Внутри функций переменные которые внутри видят переменные выше 
//не видят это называется scope тоесть переменные находятся в scope функции