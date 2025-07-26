let mydate = new Date()
console.log(mydate.toDateString()) // sat jul 26 2025
console.log(mydate.toISOString()) //2025-07-26T11:36:46.594Z
console.log(mydate.toJSON())
// console.table([mydate.toLocaleDateString(),mydate.toLocaleString(),mydate.toLocaleTimeString(),mydate.toString(),mydate.toTimeString(),mydate.toUTCString()])
/* 0       │ '7/26/2025'                                                      │
│ 1       │ '7/26/2025, 11:38:24 AM'                                         │
│ 2       │ '11:38:24 AM'                                                    │
│ 3       │ 'Sat Jul 26 2025 11:38:24 GMT+0000 (Coordinated Universal Time)' │
│ 4       │ '11:38:24 GMT+0000 (Coordinated Universal Time)'                 │
│ 5       │ 'Sat, 26 Jul 2025 11:38:24 GMT' */
console.log(typeof mydate) //object
let mycreatedate = new Date(2025,6,13)  // month count starts from zero eg:- jan -0
let createdate = new Date("2023-08-13") // month count starts from one only
let current = Date.now();
// console.log(current) 
// console.log(mycreatedate.getTime())
// console.log(Math.floor(Date.now()/1000));
// console.log(mycreatedate.toDateString())
// console.log(mycreatedate.toDateString())
let newdate = new Date()
console.log(newdate)
console.log(newdate.getMonth()+1)
console.log(newdate.getDay())

console.log(`${newdate.getDay()} and time ${newdate.getTime()}`)
console.log(newdate.toLocaleString('default',{
    weekday:"long",//Saturday
    weekday:"narrow",//S
    weekday:"short", //Sat
}));

