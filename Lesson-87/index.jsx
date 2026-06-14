// // smoothies front-end проектисин ачабыз

// // SmoothieCard.jsx ==============================  
// import { Link } from 'react-router-dom'
// import supabase from '../config/supabaseClient'

// const SmoothieCard = ({ smoothie, onDelete }) => {
//   const handleDelete = async () => {
//     const { data, error } = await supabase
//       .from('smoothies')
//       .delete()
//       .eq('id', smoothie.id)
//       .select()

//     if (error) {
//        console.log(error)
//     }
//     if (data) {
//        console.log(data)
//        onDelete(smoothie.id)
//     }
//   }

//   return (
//     <div className="smoothie-card">
//        <h3>{smoothie.title}</h3>
//        <p>{smoothie.method}</p>
//        <div className="rating">{smoothie.rating}</div>
//        <div className="buttons">
//           <Link to={'/' + smoothie.id}>
//              <i className="material-icons">edit</i>
//           </Link>
//           <i className="material-icons" onClick={handleDelete}>
//              delete
//           </i>
//        </div>
//     </div>
//   )
// }

// export default SmoothieCard


// // App.jsx ========================
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

// // pages
// import Home from './pages/Home'
// import Create from './pages/Create'
// import Update from './pages/Update'

// function App() {
//   return (
//     <BrowserRouter>
//       <nav>
//         <h1>Supa Smoothies</h1>
//         <Link to="/">Home</Link>
//         <Link to="/create">Create New Smoothie</Link>
//       </nav>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/create" element={<Create />} />
//         <Route path="/:id" element={<Update />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App

// // Ушул команданы жазып, роутер кочуробуз
// npm i react-router-dom