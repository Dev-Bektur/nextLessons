const list=document.querySelector('#list')

// fetch
// Promise


function getData(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(data=>{
        console.log(data);
        showData(data)
    })
}

getData()

function showData(arr){
    for (const item of arr) {
        list.innerHTML+=`
        <li>${item.name}- Company: ${item.company.name}</li>
        `
    }
}