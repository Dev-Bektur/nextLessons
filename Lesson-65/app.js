const list=document.querySelector("#list")

const baseUrl='https://fakestoreapi.com/products'

function getProducts(){
    fetch(baseUrl)
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        showProducts(data)
    })
}
getProducts()

function showProducts(arr){
    for (const product of arr) {
        list.innerHTML+=`
        <li><span>${product.title}</span>
        <p>${product.description}</p>
        <img src=${product.image} />
        </li>
        `
    }
}