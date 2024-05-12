let quoteEl=document.getElementById("quote")
let authorE1=document.getElementById('author')



async function quoteApi(){
    let response= await fetch("https://api.quotable.io/random")
   
    let quote =await response.json()
      console.log(quote)
    quoteEl.innerText=quote.content
    authorE1.innerText=quote.author
}  



let btnE1=document.getElementById('getQuote')

btnE1.addEventListener('click',()=>{
    quoteApi()
})