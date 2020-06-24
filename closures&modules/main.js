// Exercise 1

// const StringFormatter = function () {
//     const capitalizeFirst = function (string) {
//         console.log(string[0].toUpperCase() + string.slice(1))

//     }
//     const skewerCase = function (str) {
//         console.log(str.replace(/\s+/g, '-'))
//     }
//     return {
//         upCase: capitalizeFirst,
//         dash: skewerCase
//     }
// }
// const formatter = StringFormatter()
// formatter.upCase("dorothy") //should print Dorothy
// formatter.dash("blue box") //should print blue-box

// Exercise 2

// const Bank = function() {
//     let money = 500
//     const depositCash = function(cash){
//         money = money + cash
//         return money ;
//     }
//     const checkBalance = function (){
//         console.log(money)
//     }
//     return {
//         deposit: depositCash ,
//         showBalance: checkBalance
//     }
// }
// const bank = Bank()
// bank.deposit(200)
// bank.deposit(250)
// bank.showBalance() //should print 950

// Exercise 3

// const SongsManager = function (){

// }



// const songsManager = SongsManager()
// songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
// songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
// songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")

// songsManager.getSong("sax") // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ








// let _memories = ["that time at band camp", "yesterday's breakfast"]
    
// const Brain = function(){
//     const dayDream = () => _memories
//     const experience = memory => _memories.push(memory)
//     const forget = memory => _memories.splice(_memories.indexOf(memory), 1)
//     const spazz = () => console.log("bleurg")

//     return{
//         reminisce: dayDream,
//         live: experience,
//         blank: forget,
//         freakOut: spazz
//     }
// }

// const brain = Brain()
// brain.freakOut()



// const UsersModule = function () {
//     const _users = ['Aaron', 'Avi'];

//     const addUser = function (user) {
//         _users.push(user)
//     }

//     const listUsers = function () {
//         for (let user of _users) {
//             console.log(user)
//         }
//     }

//     return {
//         addUser: addUser,
//         listUsers: listUsers
//     }
// }

// const usersModule = UsersModule()
// usersModule.addUser('Narkis')
// usersModule.listUsers()



// const mathOperations = function () {

//     const add = function (x, y) {
//         return x + y;
//     }

//     const subtract = function (x, y) {
//         return x - y;
//     }

//     const multiply = function (x, y) {
//         return x * y;
//     }

//     const divide = function (x, y) {
//         return x / y;
//     }

//     return {

//         add: add,
//         sub: subtract,
//         mult: multiply,
//         div: divide
//     }
// }

// const m = mathOperations()
// console.log(m)
// console.log(m.sub(8, 5))




// const r = function () {
//     let x = 2

//     const say = function () {
//         console.log(x)
//         x++

//     }

//     return {
//         sayName: say
//     }

// }


// const y = r()
// y.sayName()
// y.sayName()


// let x = 7


// const e = (v) => {
//     let u = 8




//     return u+v
// }

// const z = e(4)
// const s = e(9)


// const createPerson = function(name, age){
//     const person = {
//         personName: name, 
//         personAge: age
//     }

//     return person
// }

// const person = createPerson("Elon", 42)
// console.log(person)

// const mathOperations = function(){
//     const add = function(x, y){
//         return x + y
//     }
//     return add
// }
// const math = mathOperations()
// console.log(math(1,2))

// const foo = function () {
//     const x = 1

//     const bar = function () {
//       console.log(x) //notice this inner function using the outer function's variable
//     }

//     return bar
//   }

//   const baz = foo() //out here, x doesn't exist
//   baz() //but when we invoke baz, we're printing x!

// const family = function (){
//     const members = []
//     const birth = function(name) {
//         members.push(name)
//         console.log(members)
//     }
//     return birth
// }

// const giveBirth = family ()
// giveBirth("Tzahi")
// giveBirth("Dikla")
// giveBirth("Leo")


