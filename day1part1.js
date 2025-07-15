// 1 - PRINT "HELLO WORLD"
console.log("Hello World!")

// 2 - WRITE A FUNCTION THAT TAKES TWO NUMBERS AS INPUT AND PRINT THEIR SUM.
function sum(a,b){
    return a+b
}
console.log(sum(6,7))

// 3 WRITE A FUNCTION THAT CALCULATES THE AREA OF A RECTANGLE , GIVEN ITS LENGTH BREADTH
function area(l,b){
    if(l <= 0 || b <= 0) {
        throw new RangeError ("INVALID INPUT")
    }
    return l*b
}
console.log(area(6,7))
// console.log(area(-6,7))

// 4  WRITE A FUNCTION THAT TELLS IF THE GIVEN INPUT IS EVEN OR ODD
function oddEve(num){
    return num%2 === 0 ? "even" : "odd"
}
console.log(oddEve(-11))

// WRITE A FUNCTION THAT FINDS AND RETURNS THE SMALLEST NUMBER AMONG GIVEN THREE NUMBERS
function smallest1(a,b,c){
    let small = a
    b<small ? small = b : null
    c<small ? small = c : null
    return small
}
console.log(smallest1(-2,-2,-2))

function smallest2(a,b,c){
    if(a<b && a<c) return a
    if(b<a && b<a) return b
    return c
}
console.log(smallest2(-2,-2,-2))

// 5 WRITE A FUNCTION THAT RETURNS THE REVERSE OF A STRING
function reverse1(str){
    if(typeof str !== "string"){
        throw new Error("INVALID INPUT")
    }
    return str.split("").reverse().join("")
}
console.log(reverse1("naman"))
// console.log(reverse1(5))

function reverse2(str){
    let result = ""
    for(let i = str.length-1 ; i >= 0 ; i--){
        // console.log(str[i])
        result = result + str[i]
    }
    return result
}
console.log(reverse2("naman"))