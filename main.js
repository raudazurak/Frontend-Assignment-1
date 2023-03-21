import './style.css'

import 'bootstrap'

//Fetch from json

let
  chosencategoryFilter = 'all',
  chosenSortOption,  
  ratioChoice,
  total = 0,
  view,
  htmlArr,
  categories = [],
  cart = [];
  

let books = await (await fetch('./books.json')).json()
let forAll = books

getCategories()
categoryFilters()
sortingOptions()
settingLevel()
shoppingCart()
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
          <option>title</option>
          <option>price</option>
          <option>author</option>
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

function shoppingCart() {


document.querySelector('.shop').innerHTML = `
<p>Shopping Cart</p>
<div class="items"></div>
<div class="final"></div>

`
document.querySelector('.shop').addEventListener(
  'click',
  event => {
    if(cart.length === 0){
      document.querySelector('.items').innerHTML = `
      <hr/>
      <p>Your cart is empty</p>
      <hr/>
      `
      document.querySelector('.final').innerHTML = `
      <p>Total: ${total}kr</p>
      `
    }else{
       
      htmlArr = cart.map(({
      titleP, priceP
      }) => `
        <p>${titleP} ${priceP} 1</p>
        <hr/>      
      `)
      document.querySelector('.items').innerHTML = htmlArr.join('')
      document.querySelector('.final').innerHTML = `
      <p>Total: ${total}kr</p>
      `
    }})

    
  
    
       

    

  
}


function sortedPrice(ratioChoice){
  if(ratioChoice === 'ascending'){
  books.sort(({ price: aPrice }, { price: bPrice }) =>
  aPrice > bPrice ? 1 : -1)
  console.log(books)
  return books
  }else if(ratioChoice === 'descending'){
  books.sort(({ price: aPrice }, { price: bPrice }) =>
  aPrice > bPrice ? -1 : 1)
  console.log(books)
  return books
}}

function sortedTitle(ratioChoice){
  if(ratioChoice === 'ascending'){
  books.sort(({ title: aTitle }, { title: bTitle }) =>
  aTitle > bTitle ? 1 : -1)
  console.log(books)
  return books
  }else if(ratioChoice === 'descending'){
  books.sort(({ title: aTitle }, { title: bTitle }) =>
  aTitle > bTitle ? -1 : 1)
  console.log(books)
  return books
}

}

function sortedAuthor(ratioChoice){
  if(ratioChoice === 'ascending'){
  books.sort(({ author: aAuthor }, { author: bAuthor }) =>
  aAuthor > bAuthor ? 1 : -1)
  console.log(books)
  return books
  }else if(ratioChoice === 'descending'){
  books.sort(({ author: aAuthor }, { author: bAuthor }) =>
  aAuthor > bAuthor ? -1 : 1)
  console.log(books)
  return books
}

}

 function filterEffect(){
    if(chosencategoryFilter === 'all'){
      books = forAll
      displayBooks()
      console.log("me")
    }else if(chosencategoryFilter === 'UX' || chosencategoryFilter === 'CSS'
    || chosencategoryFilter === 'HTML' || chosencategoryFilter === 'JavaScript'
    ){
      books = books.filter(({category}) => chosencategoryFilter === category)
        
        document.querySelector('.sortOption').addEventListener(
          'change',
          event => {
            chosenSortOption = event.target.value;
          console.log(chosenSortOption)
          
          //take it to its own function and sort
        })
        document.querySelector('.level').addEventListener(
          'change',
          event => {
            ratioChoice = event.target.value;
            if(chosenSortOption === 'price'){books = sortedPrice(ratioChoice)}
           else if(chosenSortOption === 'title'){books = sortedTitle(ratioChoice)}
           else if(chosenSortOption === 'author'){books = sortedAuthor(ratioChoice)}
          console.log(ratioChoice)
          
          displayBooks()

        })
        
    }
    
 }
//display all

//making the filters

//

function displayBooks(){

let htmlArray = books.map(({ title, author,price,description})=>

`
<div class="book">
<img class="book-img" src="https://source.unsplash.com/random/?wallpaper">
<div class="disc">
<h3>${title}</h3>
<p>${author}</p>
<p>${price} kr</p>
<div class="info">${description}</div>
</div>
<button class="buy-btn">buy</button>
</div>
`

);

document.querySelector('.bigs').innerHTML=htmlArray.join('');
var x = document.querySelectorAll('.info')
var i
for (i = 0; i < x.length; i++) {
  x[i].style.display = "none";
}

//InfoDisplay()

buying()
}





/*function InfoDisplay(){
 var view = document.querySelectorAll('.disc')
 for (let index = 0; index < view.length; index++) {
  const element = array[index];
  element.addEventListener('click', event => {
    var toView = event.target
    var view = toView.parentElement
  if( document.querySelector('.info').
    style.display === "none"){
      document.querySelector('.info').style.display = "block"
      console.log( document.querySelectorAll('.info'))
      
    }else{
      document.querySelector('.info').style.display = "none"
    }}
  )
  
 }}*/

 
 
 
    
function buying(){

  var products = document.querySelectorAll('.buy-btn')
  for (let index = 0; index < products.length; index++) {
    const element = products[index];
    element.addEventListener('click', event => {

      var button = event.target
      var buyP = button.parentElement
      console.log(button)
      console.log(buyP)
    
    
      var addTitle = buyP.querySelector('h3').innerText
      console.log(addTitle)
      var twoValues = buyP.querySelectorAll('.disc p')
      var addAuthor = twoValues[0].innerText
      var addPrice = twoValues[1].innerText
      addPrice = addPrice.split(' ')
      var p = addPrice[0]
      
  
      let purchase = {
        titleP: addTitle,
        authorP: addAuthor,
        priceP: Number(p)
      }
  
      cart.push(purchase)
      console.log(purchase.priceP)
      total += purchase.priceP
      console.log(total)
  
      console.log(cart)
  
    })}
  }
    
    
 



