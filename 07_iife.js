//Immediate invoke Function Expression
/* let result=[]
for (var i=0; i<5; i++){
    result.push(function(){
        console.log(i)
    })
}
result[0]() */

/* let result1=[]
for (var i=0; i<5; i++){
    (function() {
        var j = i
        result1.push( function() {console.log(j)} )
    })() 
}

result1[3]()  */