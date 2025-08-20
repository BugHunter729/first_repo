const promise1 = new Promise(function(resolve,reject){
         // do an async task
         // db calls,cryptpgraphy,ntwrk
         setTimeout(function(){
            console.log('Async task is complete');
            resolve()
         },1000)
})
promise1.then(function(){
    console.log("Promise Consumed")
})
new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log("Asyncs task 2 ")
        resolve(); 
    }, 1000);
}).then(function(){
    console.log("Promise Consumed")
})

const promise3 = new Promise(function(resolve,reject){
    setTimeout(function(){
      resolve({username:"Chai",email:"kavya@example.com"})
    },1000)
})
promise3.then(function(user){
    console.log(user)
})


const promise4 = new Promise(function(resolve,reject){
    setTimeout(() => {
        let error = true;
        if(error){
            resolve({username:"kavya",password:"123"})
        }
        else {
            reject('ERROR: Something went wrong')
        }
    }, 1000);
})
promise4.then((user)=>{
   console.log(user);
   return user.username;
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error)
}).finally(()=>{
    console.log("The promise is either resolved or rejected")
})


const promise5 = new Promise(function(resolve,reject){
    setTimeout(() => {
        let error=true;
        if(!error){
            resolve({username:"Harsh Raj",email:"harsh@example.com"})

        }else {
            reject("Error");

        }
        
    }, 1000);
})

async function consumePromise5() {
    try {
         const response = await promise5;
    console.log(response)
        
    } catch (error) {
        console.log(error)
    }
}
consumePromise5();

async function getallusers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    console.log(typeof response)
    const data = await response.json();
    // console.log(typeof data)
    console.log(data[0].name)
// you can use try and catch block also
}
getallusers()



fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => {
   return response.json();
}).then((data)=>{
    console.log(data)
}).catch((error) => {
    console.log(error) 
});

