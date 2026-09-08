const user = {
    name:"Girish",
    age:25,
    city:"Mumbai"
}

//Get all Keys-
Object.keys(user)


//get all values-
Object.values(user)

//key:value-
Object.entries(user)

//Loop through
for(const[key,value] of Object.entries(user)){

    console.log(`${key} : ${value}`)
}


//Merge - Combinne

const defaults = {theme:"light" , lang:"en"}

const userP = {theme:"dark"}

const final = Object.assign({} , defaults,userP) //Old

const final2 = {...defaults,...userP}
console.log(final2)  //theme:"Dark"
