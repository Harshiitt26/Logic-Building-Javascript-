// 6 WRITE A FUNCTION THAT CALCULATE THE FACTORIAL OF A GIVEN NUMBER
function factorial1(n){
    let result = 1 
    for (let i = n; i > 0; i--){
        result *= i
    }
    return result
}
console.log(factorial1(5))

// same using RECURSION = means a function calling itself to solve a problem
function factorial2(n){
    if(n < 0) {
        throw new RangeError("INVALID INPUT")
    }
    if(n == 0 || n == 1) return 1

    return n*factorial2(n-1)
}
console.log(factorial2(5))
// console.log(factorial2(-5))

// 7 WRITE A FUNCTION THAT THELLS IF GIVEN YEAR IS A LEAP YEAR OR NOT (1700,1800,1900 are not leap yrs)
function leapYear(year){
    return (year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0) ? `${year} is a Leap Year` : `${year} is not a Leap Year`
}
console.log(leapYear(2000))

// 8 WRITE A FUNCTION THAT CALCULATES AND PRINTS THE SUM OF THE DIGITS OF A GIVEN NUMBER. EX 456 = 4+5+6 = 15
function sumOfDigits(n){
    let str = String(n).split("")
    let sum = 0 
    str.forEach(function (value){
        sum = sum + parseInt(value) // Number(value)
    })
    return sum
    for(let i = 0 ; i < str.length -1 ; i++){
        sum = sum + parseInt(str[i]) // Number(str[i])
    }
}
console.log(sumOfDigits(18723))

function sumOfDigits2(n){
    if(n<10){
        return n
    }
    return n%10 + sumOfDigits2(Math.floor(n/10))
}
console.log(sumOfDigits2(18723))

// 9 WRITE A FUNCTION THAT GENERATES AND PRINT A MULTIPLICATION TABLE FOR A GIVEN NUMBER UPTO SPECIFIED RANGE
function table(num,till){
    for(let i = 1 ; i <= till ; i++){
        console.log(`${num} * ${i} = ${num*i}`)
    }
    // for(let i = num ; i <= num*till ; i = i + num){
    //     console.log(i)
    // }
}
table(2,4)