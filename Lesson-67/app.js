const list = document.querySelector('#list')
const inputs = document.querySelectorAll('input')
const add = document.querySelector('#add')

//CRUD Http methods
//C-Create POST
//R-Read-GET
//U-PUT
//D-DELETE

const url = 'https://69f2988fb15130b9735304e9.mockapi.io/products'

async function getProducts(){
    try {
        const res = await fetch(url)
        const data = await res.json()
        console.log(data)
        showProducts(data)
    } catch(err) {
        console.log(err)
    }
}

getProducts()

function showProducts(arr){
    for (const pr of arr) {
        list.innerHTML += `
        <li>
        <h4 onclick=delProduct(${pr.id})>${pr.title}</h4>
        <img src=${pr.image} />
        <button onclick="changeProduct(${pr.id})">Update</button>
        </li>
        `
    }
}

async function delProduct(id) {
    try {
        const res = await fetch(url+'/'+id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await res.json()
        console.log(data)
        getProducts()
    } catch(err){
        console.log(err)
    }
}

async function changeProduct(id) {
    const inputTitle = prompt("Enter title")
    const img = prompt("Enter image url")
    const res = await fetch(`${url}/${id}`, {
        method: 'PUT',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({title: inputTitle, image: img})
    })
    const data = await res.json()
    getProducts()
}