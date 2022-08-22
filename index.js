const apiLink="https://api.quotable.io/random?tags=technology,famous-quotes";
const quote_container=document.querySelector('.content');

async function fetchData(){
const res=await fetch(apiLink);
const data=await res.json();
quote_container.textContent=`"${data.content}"`
console.log(data.content)
}

fetchData()
