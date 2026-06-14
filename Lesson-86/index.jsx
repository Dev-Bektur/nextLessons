// // index.html ================================
// <!doctype html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>countries</title>
//     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet">
//   </head>
//   <body>
//     <div id="root"></div>
//     <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"></script>
//     <script type="module" src="/src/main.jsx"></script>
//   </body>
// </html>


// {/* card.css */} =============================
// .card {
//     width: 15rem;
// }

// {/* Card.jsx */} =============================
// import React from 'react'
// import './Card.css'

// const Card = ({...country}) => {
//   return (
//     <div>
//         <div className="card">
//             <div className="card-body">
//                 <h5 className="card-title">{country.name.official}</h5>
//                 <p className="card-text">{country.capital}</p>
//                 <a href="#" className="btn btn-primary">Go somewhere</a>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Card

// {/* App.jsx */} ================================
// import React, { useEffect, useState } from 'react'
// import Card from './components/Card'

// const App = () => {
//   const [data, setData]=useState([])

//   const getCountries=async()=>{
//      const res=await fetch('https://restcountries.com/v3.1/all?fields=name,capital')
//      const data=await res.json()
//      console.log(data);
//      setData(data)
//   }

//   useEffect(()=>{
//      getCountries()
//   },[])

//   return (
//     <div className='d-flex justify-content-between flex-wrap'>
//        {data.map((country)=>{
//           return <Card name={country.name.official}/>
//        })}
//     </div>
//   )
// }

// export default App