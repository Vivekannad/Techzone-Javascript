const div = document.querySelector('.top');
// console.log(div);
const children = div.children;
const first = children.item(0);
const last = first.nextElementSibling;
// console.log(last.lastElementChild);
// console.log(last.firstElementChild);
const firstSib = last.previousElementSibling;
const parent = firstSib.parentElement;
const vivek = firstSib.children;
// console.log(first)
// console.log(first.innerText = '      hello    ');
// console.log(first.textContent = 'hello there  ');

/*
const newe = document.createElement('p');
newe.innerText = 'Well hello,there';
first.append(newe);
*/
// console.log(first.lastElementChild.lastElementChild.innerHTML = '<p> New, one here </p>')
// const anchor = document.createElement('a');
// anchor.innerHTML = 'hello there';
const lastest = first.lastElementChild;
// lastest.append(anchor)
lastest.innerHTML += '<a>hello there!</a>'
// lastest.setAttribute('class','new-one');
lastest.lastElementChild.href = 'new-one';
lastest.lastElementChild.className = 'anchor';
// console.log(lastest.lastElementChild);

// console.log(lastest.getAttribute('class'))

lastest.classList.add('new-class');
// console.log(`Before`,lastest.classList);
lastest.classList.remove('new-class');
// console.log( `After`, lastest);

const styling = lastest.firstElementChild;
console.log(styling);
styling.style.color = 'blue';
styling.style.backgroundColor = 'black';