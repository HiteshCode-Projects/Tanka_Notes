const fruits = ["apple","banana","mango"]

const fruit = fruits[0]

//New Way
const [ first, second,third] = fruits

//Skip Item[firstindex,lastindex]
const [a,c] = fruits
console.log(a,c)  //apple , mango

//Swap Variable

let x = 1 , y =2

[x,y] = [y,x]
console.log(x,y)


//Spread Operator - ... 3 dots : It Make a copy of Array data
//COpy Array
const fruits1 = ["apple","banana","mango"]

const morfruits = [...fruits1 , "Watermelon" , "orange"]


//Combine Array
const p = [1,2,3]
const q = [4,5,6]

const combined = [...p , ...q]


//Copy/Update and Object
const user4 = {name :"Tanka" , age :25}
const updatedUser = {...user4 , age:26 , city:"France"}

console.log(user4)


const num = [1,2,5,6,9,4]
console.log(Math.max(...num))



//REST OPERATOR - SAME SYNTAX , OPP JOB- ALLOW YOU TO PASS MULTIPLE VLAUE OF PARAMETER

function sum(...num){
    return num.reduce(  (total , numuber) => total + numuber )
}

sum(1,2)
sum(1,2,3,4,5)
sum(10)

