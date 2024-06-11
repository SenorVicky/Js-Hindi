// singleton

//object literals

const mySym=Symbol("key1")

const jsUser= {
    name: "Vikash",
    "full Name" : "Vikash Rajput",
    [mySym]:"key1",
    age: 23,
    location: "Aligarh",
    email:"vck@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["Monday", "Sunday"]
}

// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser["full Name"])
// console.log(jsUser[mySym])
// console.log(typeof(jsUser[mySym]))


// Object.freeze(jsUser)
// jsUser.email="rj@gmail.com"
// console.log(jsUser)

jsUser.greeting=function() {
    console.log("Hello Programmer !! ")
}

jsUser.greeting2=function() {
    console.log(`Hello Programmer , ${this.name} `)
}

console.log(jsUser.greeting())
console.log(jsUser.greeting2())