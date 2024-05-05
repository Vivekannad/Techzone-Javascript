// localStorage.setItem('username','vivekanand');
// const local = localStorage.getItem('username')
// console.log(local);
// localStorage.removeItem('username')
// localStorage.clear()

let array = ['vivek','anand','Chimrani'];
console.log(array,'BEFORE');
// console.log(typeof JSON.stringify(array));

// console.log(typeof JSON.parse(JSON.stringify(array)))
array = JSON.stringify(array);
localStorage.setItem('names',array);

let an = localStorage.getItem('names');
an = JSON.parse(an);
// console.log(an);
an.splice(1,2,'kumar');
// console.log(an);

const input = document.getElementById('input');
// input.focus()
// input.setSelectionRange(0,0);
// document.addEventListener('DOMContentLoaded',() => {
//     input.focus()
//     input.setSelectionRange(0,0);
    
// })
input.value = 'Hello, world!';
input.selectionStart = 0;
input.selectionEnd = 0;