const list=document.querySelector("#list")

const baseUrl='https://fakestoreapi.com/products'

// function getProducts(){
//     fetch(baseUrl)
//     .then(res=>res.json())
//     .then(data=>{
//         console.log(data);
//         showProducts(data)
//     })
// }
getProducts()
//async await
async function getProducts() {
    try {
        const response= await fetch(baseUrl)
        const data=await response.json()
        console.log(data, 'new data');
        showProducts(data)
    } catch (err) {
        console.log(err);
        
    }
}

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