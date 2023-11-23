
//Exercise level 2
//Question 13
let yr = prompt("Enter birth year: ")
const today = new Date().getFullYear()
let age = today - yr 
if (yr > today){
    console.log('You are from the future')
}
else if(yr == 0){
    console.log('please enter your birth day')

}
else{
    if (age>=18){
        console.log(`You are ${age}. You are old enough to drive`)
    }
    else{
        console.log(`You are ${age}. You will be allowed to drive after ${18-age} years.`)
    }
} 
    
  

//Question 14
let input = prompt("Enter the number of years you live: ")
let toSecond = 365*24*60*60 
console.log(`you lived ${input*toSecond} seconds from year ${today-input}.`)//the variable today initallized in line 5


//Question 15
const date = new Date()
let year = date.getFullYear()
let month = date.getMonth()
let day = date.getDay()
let hour = date.getHours()
let min = date.getMinutes()
console.log(`${year}-${month}-${day} ${hour}:${min}`)
console.log(`${day}-${month}-${year} ${hour}:${min}`)
console.log(`${day}/${month}/${year} ${hour}:${min}`)


//Exercise level 3
//Question 1

//all the information taken from question number 15
if (hour < 10){
    hour.toString();
    hour = '0'+ hour 
}
if (min < 10){
    min.toString();
    min = '0' + min
}
console.log(`${year}-${month}-${day} ${hour}:${min}`)