const init = () => {
  let form=document.querySelector('form')
  form.addEventListener('submit', (e)=>{
e.preventDefault()
const input=document.querySelector('input#searchByID')
fetch(`http://localhost:3001/movies/${input.value}`)
.then(res=>res.json())
.then(movies=>{
    let title=document.querySelector("section#movieDetails h4")
    let summary=document.querySelector("section#movieDetails p")
title.innerText=movies.title;
summary.innerText=movies.summary;
})
})
}
document.addEventListener('DOMContentLoaded', init);