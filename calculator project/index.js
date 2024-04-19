const show = document.querySelectorAll('.box');
const first = document.getElementById('line-1');
const equalSign = document.getElementById('equals');
const clear = document.getElementById('clear');
// show[0].addEventListener('click', (e) => {
//     console.log(e.target.innerText)
// });
// show.forEach((val,i) => {
//     show[i].addEventListener('click', (e) => {
//         first.innerHTML += `<p class = 'par'>${e.target.innerText}</p>`
//     })

// });
const pa = document.createElement('p');
for(let i = 0; i < show.length-2; i++){
    show[i].addEventListener('click', (e) => {
        // first.innerText = `${e.target.innerText}`   
        pa.innerText += `${e.target.innerText}`;
        first.appendChild(pa);
        console.log(pa.innerText)
    })}

equalSign.addEventListener('click', () => {
    // console.log('Equals',pa.innerText)
   const a = eval(pa.innerText);
   pa.innerText = a;
   console.log('equals', a)
})    
clear.addEventListener('click', () => {
    pa.innerText = ''
})
const x = 5;
const y = 10;
const z = `${x} * ${y}`;
console.log(eval(z))