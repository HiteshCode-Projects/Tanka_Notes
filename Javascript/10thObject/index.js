//OBJECT : Collection of Properties 
// key : value pair

const user = {
    //key:value- IAny Data type
    name:"Girish",
    age:25,
    city:"Mumbai",
    isStuddent:true,
    skills : ["HTML" , "CSS" , "JS"]  //skill-key : Value-Array
}

//Access The Data
console.log(user.name)  //ObjectName.keyname
console.log(user['city'])  //ObjectName['keyName']

console.log(user.skills[0])

//Modify Prop
user.age = 27  
user.email = "abc@gmail.com"

//remove
delete user.isStuddent




//Methods - function Inside Object
const user1 = {
    //key:value- IAny Data type
    name:"Girish",
    age:25,
    city:"Mumbai",
    isStuddent:true,
    greet:function(){
        console.log(`Hello i am ${this.name}`)
    },

    introduce(){
        console.log(`my age ${this.age} yrs`)
    }
}

user.greet()
user.introduce()


//Nested object
const user2 = {
    //key:value- IAny Data type
    name:"Girish",
    age:25,
    city:"Mumbai",
    pincode:"560001",

    contact:{
        email:"abc2gmail.com",
     
    phone:{
        home:"11000011",
        mobile:8438573895
    }    
    }
}

//Access
console.log(user.city)

console.log(user.contact.phone.mobile)

//IN API YOU WILL FORMAT OF STORING Data
