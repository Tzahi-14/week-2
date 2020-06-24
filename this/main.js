// const person = {
//     username: "Felicia",
//     introduce: function(){
//       console.log("Hi, I'm Felicia")
//     }
//   }

//   person.introduce() //prints "Hi, I'm Felicia"

// const counter = {
//     count: 0,

//     updateCounter: function () {
//       this.count += 1;
//     }
//   };

//   counter.updateCounter();
//   counter.updateCounter();
//   counter.updateCounter();

//   alert(counter.count);

// const cat = {
//     makeNoise: function () {
//       alert(this.noise);
//     },
//     noise: "Meow!"
//   };

//   const dog = {
//     makeNoise: cat.makeNoise,
//     noise: "Woof!"
//   };

//   cat.makeNoise();
//   dog.makeNoise();

// const makeNoiseFunction = function () {
//     alert(this.noise);
//   }

//   const cat = {
//     makeNoise: makeNoiseFunction,
//     noise: "Meow!"
//   };

//   const dog = {
//     makeNoise: makeNoiseFunction,
//     noise: "Woof!"
//   };

//   cat.makeNoise();
//   dog.makeNoise();

// const person = {
//     username: "Felicia",
//     introduce: function(){
//       console.log("Hi, I'm " + this.username)
//     }
//   }

//   person.introduce() //throws an error

// EXERCISE 1

// const person = {
//     hungry: true,
//     feed: function () {
//       if (this.hungry) {
//         this.hungry = false;
//         alert('Im no longer hungry!')
//       }
//     }
//   }

//   person.feed() //should alert "I'm no longer hungry"

// EXERCISE 2
//   const pump = function (amount) {
//     this.liters += amount;
//     console.log('You put ' + amount + ' liters in ' + this.name);
//   };

//   const garage = {
//     car1: {
//       name: 'Audi',
//       liters: 3,
//       fillTank: pump
//     },
//     car2: {
//       name: 'Mercedes',
//       liters: 1,
//       fillTank: pump
//     }
//   };

//   garage.car1.fillTank(2);
//   console.log('Audi should have 5 liters: ',  garage.car1.liters);

//   garage.car2.fillTank(30);
//   console.log('Mercedes should have 31 liters: ', garage.car2.liters);

// EXERCISE 3
// const pumpFuel = function (plane) {
//     plane.fuel += 1;
//   };

//   const airplane = {
//     fly: function () {
//       if (this.fuel < 2) {
//         return 'on the ground!';
//       }
//       else {
//         return 'flying!';
//       }
//     },
//     fuel: 0
//   };

//   console.log('The plane should not be able to fly (yet): ' + airplane.fly());

//   pumpFuel(airplane);
//   console.log('The plane should STILL not be able to fly: ' + airplane.fly());

//   pumpFuel(airplane);
//   console.log('Take off! ' + airplane.fly());

// // EXERCISE 4
// const tipJar = {
//     coinCount: 20,
//     tip: function () {
//         this.coinCount += 1;
//     },
//     stealCoins: function (num,num2) {
//         this.coinCount -= num*num2;
//     }
// };


// tipJar.tip();
// console.log('Tip jar should have 21 coins: ' + tipJar.coinCount);

// tipJar.stealCoins(3,7);
// console.log('Tip jar should have 18 coins: ' + tipJar.coinCount);

// tipJar.stealCoins(10);
// console.log('Tip jar should have 8 coins: ' + tipJar.coinCount);

const quiz = {
    code: function() {console.log(this.answers.c + ' is not the answer')},
    answers: {
        a: `answers`,
        b: 'this is not the answer',
        c: `this`,
        d: `21`,
        e: `both a and c`,
        f: 'both a and d'
    }
}
quiz.code()
