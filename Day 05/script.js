
//Exercise level 2
//Question 2

    
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
text = text.split(/[^\w\s]/).join('')
text2array = text.split(' ')
console.log('The number of words in the sentence is: ' + text2array.length)
 
//Question 5

let webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux']
let sass = webTechs.indexOf('Sass')

if (sass == -1){
    console.log('Sass does not exist')
    webTechs.push('Sass')
    console.log(webTechs.join('\t'))
}
else{
    console.log('Sass is a CSS preprocess')
}
//there is another methode using includes() command
  

//Question 6

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)

console.log(fullStack)

//Exercise level 3
//Question 1

const ages = [19, 22, 19, 29, 20, 27, 26, 23, 23, 28]
ages.sort()
let min = ages[0]
let max = ages[ages.length-1]

let midFloor = Math.floor(ages.length/2)
let arraySum = 0;
//Min and Max age in the array
console.log(`The min age is ${min} and max age is ${max}`)

//Median age in the array
if (ages.length % 2 ==0){
    console.log('Median age is: ' +  (ages[midFloor -1] + ages[midFloor])/2)
}
else{
    console.log('Median age is: ' + ages[midFloor])
}
 
//Averae age in the array
for (let i = 0; i < ages.length; i++){
    arraySum += ages[i]
}

let averageAge = arraySum / ages.length
console.log('Average age is: ' + averageAge)

//Range of the age in the array
let range = max -min 
console.log('Range of the age is: ' + range)

//cCompare the value of (min - average) and (max - average)
console.log('Min - Average: ' + Math.abs(min - averageAge))
console.log('Max - Average: ' + Math.abs(max - averageAge))

const countries = [
    'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda', 'Argentina',
    'Armenia', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados',
    'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana',
    'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cabo Verde', 'Cambodia', 'Cameroon',
    'Canada', 'Central African Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Congo',
    'Costa Rica', 'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica',
    'Dominican Republic', 'East Timor', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea',
    'Estonia', 'Eswatini', 'Ethiopia', 'Fiji', 'Finland', 'France', 'Gabon', 'Gambia', 'Georgia', 'Germany',
    'Ghana', 'Greece', 'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Honduras',
    'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy', 'Jamaica',
    'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Korea, North', 'Korea, South', 'Kosovo',
    'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein',
    'Lithuania', 'Luxembourg', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands',
    'Mauritania', 'Mauritius', 'Mexico', 'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Morocco',
    'Mozambique', 'Myanmar', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger',
    'Nigeria', 'North Macedonia', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Panama', 'Papua New Guinea', 'Paraguay',
    'Peru', 'Philippines', 'Poland', 'Portugal', 'Qatar', 'Romania', 'Russia', 'Rwanda', 'Saint Kitts and Nevis',
    'Saint Lucia', 'Saint Vincent and the Grenadines', 'Samoa', 'San Marino', 'Sao Tome and Principe', 'Saudi Arabia',
    'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands',
    'Somalia', 'South Africa', 'South Sudan', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Sweden', 'Switzerland',
    'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunisia',
    'Turkey', 'Turkmenistan', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom',
    'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City', 'Venezuela', 'Vietnam', 'Yemen', 'Zambia',
    'Zimbabwe'
  ]
//Slice 10 countries from the above array
console.log('The first 10 country sliced: \n\n' +  countries.slice(0, 10).join('\n'))

//Question 2
let midIndex = Math.floor(countries.length/2)
if (countries.length % 2 ==0){
    console.log('Mid countries are: ' +  countries[midIndex -1] + ' and ' + countries[midIndex])
}
else{
    console.log('Mid country is: ' + countries[midIndex])
}


//Question 3
if (countries.length % 2 ==0){
    console.log('First Half country: \n\n' +  countries.slice(0, midIndex).join('   ') + ' \n\n\n Second Half country: \n\n' + countries.slice(midIndex, countries.length-1).join('   '))
}
else{
    console.log('First Half country: \n\n' + countries.slice(0, midIndex + 1).join('   ') + ' \n\n\n Second Half country: \n\n' + countries.slice(midIndex + 1, countries.length-1).join('   '))
}