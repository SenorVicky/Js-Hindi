let myDate=new Date()

// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())
// console.log(typeof myDate)
 
// let myCreatedDate=new Date(2024,6,9) // (yy-mm-dd)

// let myCreatedDate=new Date(2024,0,23,7,3) //( yy-mm-dd | hour-minuts)

// let myCreatedDate=new Date("2024-6-11") //(YY-MM-DD)

// let myCreatedDate=new Date("06-10-2024") //(mm-dd-yy)

// let myTimeStamp= Date.now()

// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())

// // console.log(Math.floor(Date.now()/1000))

let newDate=new Date()

// console.log(newDate.getMonth() + " " + newDate.getDate()+ " "+ newDate.getFullYear())

newDate.toLocaleString('defualt',{
    weekday:"long",
})

