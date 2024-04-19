const identity = document.getElementById('name');
const pass = document.getElementById('password');
const form = document.getElementById('form');
const error = document.querySelectorAll('.para');
const phone = document.getElementById('phone');

form.addEventListener('submit', (e) => {
    e.preventDefault()
        if(identity.value.length === 0 ){
            error[0].classList.remove('para');
            
         };
         if(identity.value.length > 0 && identity.value.length <= 4){
            identity.classList.add('border')
         } else{
            identity.classList.add('green')
         };
        //  if(identity.value.lang !== 'en'){
        //     alert('Put that in English')
        //  }
        //  if(!(isNaN(identity.value))){
        //     alert('Put in alphabets')
        // }
        for(i in identity.value){
            if(identity.value.charCodeAt(i) < 65){
                alert('Put in alphabets');
                break;
            }
        }        
        if(pass.value.length === 0){
            error[1].classList.remove('para')
         };
         if(pass.value.length > 0 && pass.value.length <=4){
            pass.classList.add('border');
         } else{
            pass.classList.add('green')
         };
         let redec = '';
         console.log(pass.value)
         for(code in pass.value){
            if(!(pass.value.charCodeAt(code) > 40  && pass.value.charCodeAt(code) < 60 && pass.value.charCodeAt(code) > 65  && pass.value.charCodeAt(code) < 122)){
                console.log('Invalid input');
                break;
            } 
            // if(!(pass.value.charCodeAt(code) > 65  && pass.value.charCodeAt(code) < 122)){
            //     console.log('put alphabets also');
            //     break;
            // }
         }
        //  if(isNaN(phone.value)){
        //     alert('Not preceed')
        //  }
         for(let num in phone.value){
            //  if(!(phone.value.charCodeAt(num) > 40  && phone.value.charCodeAt(num) < 60)){
            //     alert('put in numbers')
            //  }
        }
});


// identity.addEventListener('focus',(e) => {
//     identity.classList.add('border');
// });
// identity.addEventListener('blur',() => {
//     identity.classList.remove('border')
// })

// const c = identity.value.includes(identity.value > 40  && identity.value.charCodeAt(num) < 60);
// console.log(c);



// firstName.addEventListener('keyup',(e) => {
//    if(e.target.value.length < 4){
//        e.target.style.borderColor = 'orange'
//        para.classList.remove('hide');
//    }else{
//        e.target.style.borderColor = 'green';        
//        para.classList.add('hide')
//    }
// });

// lastName.addEventListener('keyup',(e) => {
//    if(e.target.value.length < 4){
//        e.target.style.borderColor = 'orange'
//        // last.classList.remove('hide');
//        para2.classList.remove('hide');
//    }else{
//        e.target.style.borderColor = 'green';        
//        // last.classList.add('hide')
//        para2.classList.add('hide')
//    }
// });

// email.addEventListener('keyup',(e) => {
// // console.log(e)
// // if(e.key !== '@'){
// //     para3.classList.remove('hide');
// // } else{
// //     // para3.classList.add('hide');
// //     para3.className = 'hid';
// // }
// if(e.target.value.indexOf('@') == -1){
//    e.target.style.borderColor = 'orange'
//    para3.classList.remove('hide')
// } else{
//    e.target.style.borderColor = 'green';        
//    para3.classList.add('hide');
// }
// })

// password.addEventListener('keyup',(e) => {
//    e.target.value.indexOf()

// });

// phone.addEventListener('keyup',(e) => {
//   const num =  Number(e.key);
//    // console.log(typeof e.target.value)
//    console.log(num);
//    if(num != NaN){
//        e.target.style.borderColor = 'green'
//    }else{
//        e.target.style.borderColor = 'orange'
//    }
// });

// form.addEventListener('submit',(e) => {
// e.preventDefault();
//    const firstN = e.target.user;
//    const lastN = e.target.last;
//    const email = e.target.email;
//    const pass = e.target.pass;
//    if(firstN === '' || lastN === ''){
//        alert('Submit carefully')
//    } else{
//        form.reset()
//    }
// })