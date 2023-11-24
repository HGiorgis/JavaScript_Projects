
//Exercise level 2
//Question 1

    

let result = prompt("Enter your result: ")  
switch (true){
    case result <= 100 && result >= 80:
        console.log(`A`)
        break
    case result <= 79 && result >= 70:
        console.log(`B`)
        break
    case result <= 69 && result >= 60:
        console.log(`C`)
        break
    case result <= 59 && result >= 50:
        console.log(`D`)
        break
    case result <= 49 && result >= 0:
            console.log(`F`)
        break
    default: 
        console.log('There is no such result')
    }    
   
  
  
 
//Question 2

let month = prompt('please insert the month').toLowerCase()
 
if (month == 'september'|| month == 'october'|| month == 'november'){
    console.log('Autumn')
}
else if (month == 'december'|| month ==  'january'|| month == 'february'){
    console.log('Winter') 
}
else if (month == 'march'|| month == 'april'|| month == 'may'){
    console.log('Spring')
}
else if (month == 'june'|| month == 'july'|| month == 'august'){
    console.log('Summer')
}
else{
    console.log('Please insert the right month to calculate the season')
}
  
//Question 3

let day = prompt('What is the day today? ').toLowerCase()


switch(true){
    case day == 'monday' || day == 'tuesday' || day == 'wednesday' || day == 'thursday' || day == 'friday':
        console.log(`${day} is a working day.`)
        break
    case day == 'saturday' || day == 'sunday':
        console.log(`${day} is a weekend.`)
        break
    default:
        console.log(`invalid input: ${day} is not a day`) 
} 




//Exercise level 3
//Question 1
 
let m = prompt('Enter a month: ').toLowerCase()

let d = null 
switch (true){
    case m == 'january':
        d = 31
        break
    case m == 'february':
        d = 28
        break
    case m == 'march':
        d = 31
        break
    case m == 'april':
        d = 30
        break
    case m == 'may':
        d = 31
        break
    case m == 'june':
        d = 30
        break
    case m == 'july':
        d = 31
        break
    case m == 'august':
        d = 31
        break
    case m == 'september':
        d = 30
        break
    case m == 'october':
        d = 31
        break
    case m == 'november':
        d = 30
        break
    case m == 'december':
        d = 31
        break
    default:
        console.log('invalid input')
}
console.log(`${m} has ${d} days`)
    