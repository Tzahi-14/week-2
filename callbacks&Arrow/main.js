// let users = []

// const getData = function () {
//     setTimeout(function () {
//         users = [{ name: "Rick" }, { name: "Morty" }]
//         console.log("Got users")
//     }, 3000)
// }

// const displayData = function () {
//     console.log("Going to display users")
//     for (user of users) {
//         console.log(user.name)
//     }
// }

// getData()
// displayData()

// const first = function (callback) { //receive the function as a parameter
//     setTimeout(function () {
//         console.log("should be first")
//         callback() //this is the `second` function being invoked
//     }, 3000)
// }

// const second = function () {
//     console.log("should be second")
// }

// first(second) //pass the second function to the first, as an argument


// let users = []

// const getData = function (display) {
//     setTimeout(function () {
//         users = [{ name: "Rick" }, { name: "Morty" }]
//         console.log("Got users")
//         display()
//     }, 3000);
// }

// const displayData = function () {
//     console.log("Going to display: " + users)
//     for (user of users) {
//         console.log(user.name)
//     }
// }

// getData(displayData)

// let users = []

// const getData = function (display) {
//   setTimeout ( function () {
//     users = [{name: "Rick"}, {name: "Morty"}]
//     console.log("Got users")
//     display()
//   }, 3000)
// }

// const displayData = function () {
//   console.log("Going to display: " + users)
//   for (user of users) {
//     console.log(user.name)
//   }
// }



// getData(displayData)


// const doSomething = function(){
//     console.log("something")
//   }
  
//   setTimeout(doSomething, 3000) //will invoke doSomething in 3 seconds

//   const timer = function(){
//     console.log(new Date())
//   }
  
//   setInterval(timer, 1000)

  
//   setInterval( function () {
//     console.log( new Date () )
//   }, 1000)

// Create an arrow function called square that receives a number and console logs its square. 

// square(4) // should print 16

// const square = number => console.log(number*number)
// square (4)



// const getFormalTitle = (title, name) => title + " " + name
// formalTitle = getFormalTitle("Madamme", "Lellouche")
// console.log(formalTitle) //returns "Maddame Lellouche"

// const suspenseBuilder = {
//     name: "El Mysterio",
//     displayName: function () {

//         console.log("You are going to see the name in 3 seconds...")

//         setTimeout(function () { //normal function
//             ﻿console.log("The name is: " + this.name)
//         }, 3000)

//     }
// }

// suspenseBuilder.displayName()
