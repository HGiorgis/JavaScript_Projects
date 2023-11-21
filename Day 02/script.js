
//Exercise: level 1

//Q18
let statement = 'You cannot end a sentence with \
because because because is a conjunction'
console.log(statement.lastIndexOf('because'))


//Q25
let string = "30 Days Of JavaScript"
console.log(string.repeat(2))

    /*/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/*/

    
//Exercise: level 2

//Q6
let sentence = "I hope this course is not full of jargon."
index = sentence.search(/jargon/gi)
checker = "jargon"
if (checker == sentence.substr(index, checker.length)){
    console.log("true")
}
else{
    console.log("false")
}


//Q11
console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125");


//Q12
let str = 'You cannot end a sentence with\
because because because is a conjunction'
console.log(str.substr(str.indexOf('because'), ('because '.length)*3))



 //Exercise: level 3

 //Q2
let match = 'You cannot end a sentence with \
because because because is a conjunction'
check = match.match(/because/gi)
console.log(check.length)
