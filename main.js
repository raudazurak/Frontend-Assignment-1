import './style.css'

//import 'bootstrap'

//Fetch from json

let
  chosencategoryFilter = 'all',
  chosenSortOption = '',  
  ratioChoice = '',
  total = 0,
  view,
  htmlArr,
  categories = [],
  cart = [];
  

let books = await (await fetch('./books.json')).json()
let forAll = books


displayBooks()
await showNavbar()
await showFooter()

searchGrab()
getCategories()
categoryFilters()
sortingOptions()
shoppingCart()
settingLevel()





async function showNavbar(){
const fetchText = async url => ( await (await(fetch(url))).text())
.replace(/<script.+?vite\/client.+?<\/script>/g, '')

let src = '/nav.html'
let html = await fetchText(src)

document.querySelector('header').innerHTML  = html}

async function showFooter(){
  const fetchText = async url => ( await (await(fetch(url))).text())
  .replace(/<script.+?vite\/client.+?<\/script>/g, '')
  
  let src = '/footer.html'
  let html = await fetchText(src)
  
  document.querySelector('.foot').innerHTML  = html}
  

  function searchGrab(){

    
   // console.log(finder)
   let searcher =  document.querySelector('.greek')
   searcher.addEventListener('click', 
   event =>{
    //let finder = document.querySelector('.cherry').placeholder
    console.log('buns')
    
   while(finder != 'Search....'){
    console.log('pink')
    //books = books.filter(({category}) => chosencategoryFilter === category)

    forAll = forAll.filter(({title}) => console.log(title)) 
    break
   }
  
  })}

function getCategories() {
    let withDuplicates = books.map(book => book.category);
    categories = [...new Set(withDuplicates)];
    categories.sort();}


function categoryFilters() {
   
  let pure = document.querySelector('.filters')
  console.log(chosencategoryFilter)

  console.log('ornaments')
  pure.addEventListener('click',
  event =>{
    let crew = event.target
    let cat = crew.innerText
    chosencategoryFilter = cat
    console.log(cat)
    console.log('between')
    filterEffect()
    })
  
  
  

}

function sortingOptions() {
  let sOpt = document.querySelector('.sortOptions')
  console.log(chosenSortOption)

  console.log('blues')
  sOpt.addEventListener('click',
  event =>{
    let crew = event.target
    let cat = crew.innerText
    chosenSortOption = cat
    console.log(cat)
    console.log('between')
    

   })}

function settingLevel() {
  let setL = document.querySelector('.levels')
  console.log(chosenSortOption)

  console.log('collard greens')
  setL.addEventListener('click',
  event =>{
    let crew = event.target
    let cat = crew.innerText
    ratioChoice = cat
    console.log(cat)
    console.log('between')

    while(chosenSortOption != ''){
    

    if(chosenSortOption === 'price'){
      console.log('boring')
      books = sortedPrice(ratioChoice)}
    else if(chosenSortOption === 'title'){books = sortedTitle(ratioChoice)}
    else if(chosenSortOption === 'author'){books = sortedAuthor(ratioChoice)}
    console.log('oranges in the chat')
    displayBooks()
    break
  }

    })}

function shoppingCart() {

const cast = document.querySelector('.bring')
console.log(cast);
cast.addEventListener(
  'click',
  event => {
    if(document.querySelector('.items').innerHTML==="" && document.querySelector('.final').innerHTML===""){
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
      titleP, priceP, quantity, rowSum
      }) => `
        <p>${titleP} ${quantity} ${priceP}kr  ${rowSum}kr</p>
        
        
        <hr/>      
      `)
      document.querySelector('.items').innerHTML = htmlArr.join('')
      document.querySelector('.final').innerHTML = `
      <p><span>Total:</span> ${total}kr</p>
      `
    }}else{
      document.querySelector('.items').innerHTML="" 
      document.querySelector('.final').innerHTML=""
    }
  })

    
  
    
       

    
 
  
}


function sortedPrice(ratioChoice){
  if(ratioChoice === 'ascending'){
    console.log('blue')
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
console.log(chosencategoryFilter)
  if(chosencategoryFilter === 'all'){
    books = forAll
    displayBooks()
    console.log("me")
  }else if(chosencategoryFilter === 'UX' || chosencategoryFilter === 'CSS'
  || chosencategoryFilter === 'HTML' || chosencategoryFilter === 'JavaScript'
  ){
    console.log('brew')
    books = books.filter(({category}) => chosencategoryFilter === category)
 
  displayBooks()

  }
    
 }


function displayBooks(){

let htmlArray = books.map(({ id,title, author,price,description})=>

`
<div class="book">

<img class="book-img" src="/images/${id}.jpg">
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

InfoDisplay()

buying()
}





function InfoDisplay(){
 var view = document.querySelectorAll('.disc')
 for (let index = 0; index < view.length; index++) {
  const element = view[index];
  element.addEventListener('click', event => {
    var toView = event.target
    var infoD = toView.parentElement
  if( infoD.querySelector('.info').
    style.display === "none"){
      infoD.querySelector('.info').style.display = "block"
      
    }else{
      infoD.querySelector('.info').style.display = "none"
    }}
  )
  
 }}

 
 
 
    
function buying(){

  var products = document.querySelectorAll('.buy-btn')
  for (let index = 0; index < products.length; index++) {
    const element = products[index];
    element.addEventListener('click', event => {

      var button = event.target
      var buyP = button.parentElement
      
    
    
      var addTitle = buyP.querySelector('h3').innerText
      var twoValues = buyP.querySelectorAll('.disc p')
      var addAuthor = twoValues[0].innerText
      var addPrice = twoValues[1].innerText
      addPrice = addPrice.split(' ')
      var p = addPrice[0]
      
  
      let purchase = {
        quantity: 1,
        titleP: addTitle,
        authorP: addAuthor,
        priceP: Number(p),
        rowSum: Number(p)
      }


    var inSide = false
      
    if(cart.length > 0){      

      cart.forEach(element => {
        if(element.titleP === purchase.titleP && element.authorP === purchase.authorP
          && element.priceP === purchase.priceP){
            element.quantity++ 
            element.rowSum += element.priceP
            inSide = true
            console.log(inSide)
          }})
      if(inSide === false){
        cart.push(purchase)
      }
      
      console.log(inSide)
    }else{
        cart.push(purchase)
      }

      

      total += purchase.priceP

  
      console.log(total)
  
      console.log(cart)
  
    })}
  }
    
    
 



