// const hour = document.getElementById('hour');
// const minute = document.getElementById('minute');
// const second = document.getElementById('second');


// setInterval(() => {
//     const dated = new Date();
//     const hrs =  dated.getHours();
//     // let hrs = 10;
//     const min = dated.getMinutes();
//     let sec = dated.getSeconds();
//     // if(hrs >= 13){
//     //     console.log(hrs)
//     //     dated.setHours(1);
//     // }
//     // let sec  = 5;
//     sec = sec.toString();
//     sec = sec.padStart(2,'0')
//     hour.textContent = hrs;
//     minute.textContent = min;
//     second.textContent = sec;
//     // Number(sec)
//  },1000);

//  const indDay = new Date(47,7,14);
//  const today = new Date(2024,7,14);
//  const diff = today.getTime();
//  const total = diff - indDay;
//  console.log(total);
//  const seconds = total * 0.001;
//  console.log(seconds)
//  const inMin = seconds/60;
//  console.log(inMin);
//  const inHour = inMin/60;
//  console.log(inHour);
//  const inDay = inHour/24;
//  console.log(inDay)
//  const month = inDay/30;
//  console.log(month);
//  const year = month/12;
//  console.log(Math.floor(year))

// function getPakistanTime() {
//     const now = new Date();
//     const pakistanOffset = 5; // Pakistan Standard Time is 5 hours ahead of UTC
//     const pakistanTime = new Date(now.getTime() + pakistanOffset * 60 * 60 * 1000);
//     return pakistanTime;
//    }
   
   // Function to update clock display
   function updateClock() {
    // const clock = document.getElementById('clock');
    const pakistanTime = new Date();
    console.log(pakistanTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit',second: '2-digit', hour12: true }))
    // clock.textContent = pakistanTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
   };
   updateClock()