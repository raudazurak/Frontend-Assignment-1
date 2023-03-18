import './style.css'

import 'bootstrap'

//Fetch from json

let
  chosencategoryFilter = 'all',
  chosenSortOption,  
  ratioChoice,
  categories = [];

let books = await (await fetch('./books.json')).json()

getCategories()
categoryFilters()
sortingOptions()
settingLevel()
displayBooks()

function getCategories() {
    let withDuplicates = books.map(book => book.category);
    categories = [...new Set(withDuplicates)];
    categories.sort();}


function categoryFilters() {
    document.querySelector('.filters').innerHTML = `
      <label><span>Filter by categories</span>
        <select class="categoryFilter">
          <option>all</option>
          ${categories.map(category => `<option>${category}</option>`).join('')}   
        </select>
      </label>
    `;

    document.querySelector('.categoryFilter').addEventListener(
        'change',
        event => {
          chosencategoryFilter = event.target.value;
          filterEffect();
        }
      );

}

function sortingOptions() {
    document.querySelector('.sortOptions').innerHTML = `
      <label><span>sort by</span>
        <select class="sortOption">
          <option>Title</option>
          <option>Price</option>
          <option>Author</option>
        </select>
      </label>
      
    `; 

   }

function settingLevel() {
    document.querySelector('.level').innerHTML = `
    <label>
          <select class="choice">
            <option>ascending</option>
            <option>descending</option>
          </select>
        </label>
    `}


 function filterEffect(){
    if(chosencategoryFilter === 'all'){
        console.log("me")
    }else if(chosencategoryFilter === 'UX' || chosencategoryFilter === 'CSS'
    || chosencategoryFilter === 'HTML' || chosencategoryFilter === 'JavaScript'
    ){
        console.log(books.filter(({category}) => chosencategoryFilter === category))
        document.querySelector('.sortOption').addEventListener(
          'change',
          event => {
            chosenSortOption = event.target.value;
          console.log(chosenSortOption)
          
        })
        
    }
    
 }
//display all

//making the filters

//

function displayBooks(){

let htmlArray = books.map(({title, author,price})=>

`
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

