import './style.css'

import 'bootstrap'

//Fetch from json

let books = await (await fetch('./books.json')).json()

displayBooks()

//display all

//

function displayBooks(){

let htmlArray = books.map(({title, author,price})=> `
<div class="book">
<h3>${title}</h3>
<p>${author}</p>
<p>${price} kr</p>
</div>
`);

document.querySelector('.bigs').innerHTML=htmlArray.join('');
}

