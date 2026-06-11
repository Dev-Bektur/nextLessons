const jokeBtn=document.querySelector('#btn')
const text=document.querySelector('#text')

const _baseUrl="https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Christmas"
function getJoke(){
    fetch(_baseUrl)
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        showData(data)
    })
}

getJoke()

function showData(obj){
    text.innerHTML=obj.setup || obj.joke
}
jokeBtn.onclick=()=>{
    getJoke()
}