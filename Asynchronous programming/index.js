// console.log(this);

// let x = 45 ;

// function testing(number){
//     var b = number *2;
//     return b;
// };

// const clore = testing(x);
// console.log(clore);

// function recursiveFun(){
//     console.log('hello');
//     recursiveFun()
// };
// recursiveFun();

//this below is a blocking function as it takes a long time to execute a function and the pagge hangs for a while

// function task(message) {
//     // emulate time consuming task
//     let n = 10000000000;
//     while (n > 0){
//         n--;
//     }
//     console.log(message);
// }

// console.log('Start script...');
// task('Call an API');
// console.log('Done!');

const userDetails = {
  userName: "Vivekanand",
  work: "student",
  car: "Mira",
  course: "MERN-stack",
};

function asyncEx(callback) {
  setTimeout(() => {
    callback(userDetails.userName);
  }, 2000);
}

function getWork(callback) {
  setTimeout(() => {
    callback(userDetails.work);
  }, 1500);
}

function getCar(callback) {
  setTimeout(() => {
    callback(userDetails.car);
  }, 1000);
}
function getCourse(callback) {
  setTimeout(() => {
    callback(userDetails.course);
  }, 500);
}

//Callback hell
//when we want something to run after something we can use that if we hadn't used that and kept calling the functions separetly then there would have been no sequence as we are getting course function in a least span of time.
//now there is also another drawback not everytime we get the api, sometimes we get the error and to render it using callbacks we would have to create another function.

// asyncEx((name) => {
//     console.log('The name is',name)
//     getWork((work) => {
//         console.log('He is a ',work)
//             getCar((car) =>{
//                 console.log('He has a ',car)
//                 getCourse((course) => {
//                     console.log('He is currently doing',course)
//                 })
//             })

//     })
// })

//In promise

function promiseExa() {
  const newPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(userDetails.userName);
    }, 2000);
  });
  return newPromise;
}
function promiseWork() {
    return new Promise(resolve => {
        setTimeout(() => {
          resolve(userDetails.work);
        }, 2000);
      });
  }
function promiseCar(){
    return new Promise(resolve => {
        setTimeout(() => {
          resolve(userDetails.car);
        }, 2000);
      });  
}
function promiseCourse(){
    return new Promise(resolve => {
        setTimeout(() => {
          resolve(userDetails.course);
        }, 2000);
      });  
}
// promiseExa().then(me => {
//     console.log("The name is", me);
//     return promiseWork()
// })
//   .then(me => {
//     console.log("He is a ", me);
//     return promiseCar()

// })
//   .then(me => {
//     console.log("He has a ", me);
//     return promiseCourse()
// })
//   .then(me =>  console.log("He is doing th course of ", me));

  
// async function displayUser(){
//     const userName = await promiseExa()
//     console.log('The name is',userName);
//     const userWork = await promiseWork();
//     console.log('He is a ',userWork);
//     const userCar = await promiseCar();
//     console.log('He has a ',userCar);
//     const userCourse = await promiseCourse();
//     console.log('He is doing a ',userCourse);
// };
// displayUser();

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function getUserDetail(key) {
  return delay(2000).then(() => userDetails[key]);
}

async function displayUser() {
  try {
      const userName = await getUserDetail('userName');
      console.log(`The name is ${userName}`);
      const userWork = await getUserDetail('work');
      console.log(`He is a ${userWork}`);
      const userCar = await getUserDetail('car');
      console.log(`He has a ${userCar}`);
      const userCourse = await getUserDetail('course');
      console.log(`He is doing a ${userCourse}`);
  } catch (error) {
      console.error(error);
  }
}

// displayUser();


function settingPromise(){
  return new Promise((resolve, reject) => {
    // resolve('successful')
    reject('error 404')
  })
}
settingPromise().then((me) => {
  console.log(me);
}).catch((er) => {
 console.log(er);
})

// const promiseEx = new Promise((resolve,reject) => {
//     console.log('data is being fetched');
//     setTimeout(() => {
//         reject(new Error(' 404'))
//         // resolve('Successful')
//     },2000)
// })
// promiseEx.then((me) => {
//     console.log(me)
// }).catch(er => console.log(er))
// promiseEx.catch((er) => {
//     console.log(er)
// })
