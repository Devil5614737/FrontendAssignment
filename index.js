const apiLink="https://api.quotable.io/random?tags=technology,famous-quotes";
const quote_container=document.querySelector('.content');
const dice=document.querySelector('.diceIcon')

async function fetchData(){
const res=await fetch(apiLink);
const data=await res.json();
quote_container.textContent=`"${data.content}"`
console.log(data.content)
}
fetchData()
dice.addEventListener('click',()=>{

    fetchData()
})

