//OBJECT DESTRUCTUING 

const user3 = {
    //key:value- IAny Data type
    name:"Girish",
    age:25,
    city:"Mumbai",
  
}

//Old Way
const name1 = user3.name

//NEW way-destrcuting
const {name , age , city} = user3

//Rename - key while destruction

const {name:fullName, age:years} = user3
console.log(fullName)
console.log(years)


