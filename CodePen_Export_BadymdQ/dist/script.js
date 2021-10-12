console.clear()
var num1 = 10
var num2 = 20
var num3 = 15.25
var num4 = '22'

console.log(typeof(num2))
console.log(typeof(num3))
console.log(typeof(num4))
console.log(typeof(num5))

sum = num1+num2+num3
console.log(sum)

sub = num2-num1
console.log(sub)

mul = num1 * num2 
console.log(mul)

div = num3/num1
console.log(div)
var num1 = 12
var num2 = 20
var num3 = 15.5

console.log(typeof(num3))

// Addition
var sum = num1 + num2 + num3
console.log(sum)

//Subtraction
var sub = num3 - num1
console.log(sub)

//Multiplication
var mul = num1 * num2
console.log(mul)

//Division
var div = num2 / num1
console.log(div)

// div by zero

var divByZero = num2/0
console.log(divByZero)
console.log(typeof(divByZero))

console.log(typeof(divByString))

//mul by string

var mulByString = num1 * 'a'
console.log((mulByString))
console.log(typeof(mulByString))

var myString = 'javascript'
console.log(myString)
console.log(typeof(myString))

var secondString = 'javascript is object oriented cross platform'
console.log(typeof(secondString))

var doubleQuoteString = "javascript is \"object oriented\" cross platform"
console.log((doubleQuoteString))

var singleQuoteString = 'javascript is \'object oriented\' \'cross platform\''
console.log((singleQuoteString))

var doubleQuoteString2 = "javascript is 'object oriented' cross platform"
console.log((doubleQuoteString2))

var singleQuoteString2 = 'javascript is "object oriented" "cross platform"'
console.log((singleQuoteString2))

var myFirstString = 'Javascript is a object oriented, javascript is a cross platform'

console.log(myFirstString.length)

console.log(myFirstString.indexOf('Javascript'))
console.log(myFirstString.indexOf('cross'))

console.log(myFirstString.lastIndexOf('javascript'))
console.log(myFirstString.lastIndexOf('platform'))

console.log(myFirstString.slice(0,21))
console.log(myFirstString.slice(11,40))
console.log(myFirstString.slice(-20))
console.log(myFirstString.slice(11))

console.log(myFirstString.substr(8,30))
console.log(myFirstString.substr(31,60))
console.log(myFirstString.substr(-20))

console.log(myFirstString.toUpperCase())

console.log(myFirstString.toLowerCase())

var firstName = 'javascript is a'
var lastName = 'cross platform'

console.log(firstName.concat(lastName))
console.log(firstName.concat(lastName,' ',myFirstString))


console.log(firstName + lastName + myFirstString)

console.log(myFirstString.charAt(25))

var extraSpace = "       javascript          "
console.log(extraSpace)
console.log(extraSpace.trim())

console.log(myFirstString.split(" "))
console.log(myFirstString.split(","))
console.log(myFirstString.split(""))
console.log(myFirstString.split(','))

var num1 = 20
var num2 = 20.55

// tostring

console.log(num1.toString())
console.log(typeof(num2.toString()))

var strNum1 = '10'
var strNum2 = '22.55'

// parseInt

console.log(parseInt(strNum1))
console.log(parseInt(strNum2))

//parseFloat

console.log(parseFloat(strNum2))

var  strNum3 =  15.543672888
 
// toFixed

console.log(parseFloat(strNum3))
console.log(strNum3.toFixed(2))
console.log(strNum3.toFixed(10))