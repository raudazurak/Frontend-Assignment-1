import './style.css'

import 'bootstrap'

//Fetch from json

let books = await (await fetch('./books.json')).json()

displayBooks()
categoryFilters()

function categoryFilters() {
    document.querySelector('.filters').innerHTML = `
      <label><span>Filter by hobbies:</span>
        <select class="hobbyFilter">
          <option>all</option>
          <option>UX</option>
          <option>CSS</option>
          <option>HTML</option> 
        </select>
      </label>
    `;

}

//display all

//making the filters

//

function displayBooks(){

let htmlArray = books.map(({title, author,price})=> `
<div class="book">
<img class="book-img" src="https://source.unsplash.com/random/?wallpaper">
<div class="disc">
<h3>${title}</h3>
<p>${author}</p>
<p>${price} kr</p>
</div>
<button class="buy-btn">buy</button>
</div>
`);

document.querySelector('.bigs').innerHTML=htmlArray.join('');
}

