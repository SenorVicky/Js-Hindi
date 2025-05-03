// const promiseOne=new Promise(function(resolve,reject) {
//     // Do an async tasks
//     // DB Calls, cryptography, network
    
//     setTimeout(() => {
//         console.log('Async task 1 is complete');
//         resolve();
        
//     }, 1000);
// }) 

// promiseOne.then(function() {
//     console.log('promise 1 Consumed ! ');
    
// })

// new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         console.log('Async Task2`');
//         resolve();
        
//     }, 1000);
// }).then(()=>{console.log('Async 2 resolved  !');
// })

// promise 3
// const promiseThree=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve({username:"chai",
//                 email:"abc@gmail.com"
//         })    
//     }, 1000);
// })


// promiseThree.then((user)=>{
//     console.log(` user Name is :${user.username} and Gmail is : ${user.email}`);
    
// })




// ==============> promises 4

// const promiseFour=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         let error=true;
//         if(!error) {
//             resolve({username:"Vikash", password:"1234"})
//         }else{
//             reject("ERROR : Something went Wrong ! ")
//         }
//     }, 1000);
// })

// promiseFour
//  .then((user)=>{
//     console.log(user);
//     return user.username
    
// }).then((userName)=>{
//     console.log(userName);
// }).catch((e)=>{
//     console.log(e);
    
// }).finally(()=>{
//     console.log('Execute Always');
    
// })


// // =============> PROMISE 5

// const promiseFive=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         let error=false;
//         if(!error) {
//             resolve({userName:"vikash",password:"1234"})
//         }
//         else{
//             reject('Error :  JS went Wrong !');
            
//         }
//     }, 1000);
// })


// async function consumePromiseFive() {
        
//     try {
//         const response =await promiseFive;
//         console.log(response);

//     } catch (error) {
//             console.log(error);
            
//     }
// }

// consumePromiseFive();

//-==================> FETCH Method

// async function getAllUsers() {
//     try {
//         const response=await fetch('https://jsonplaceholder.typicode.com/todos/1');
//         const data=await response.json()
//         console.log(` Data is ${data}`);
        
//     } catch (error) {
//         console.log('E:',error);
        
//     }
// }

// getAllUsers()

// console.log('=========================================>');


// // Second Approach

// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response)=>{
//    return response.json();
// })
// .then((data)=>console.log(data)
// )
// .catch((e)=>{
//     console.log(e);
    
// })