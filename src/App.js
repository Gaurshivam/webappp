import './App.css';
import Navbar from './Navbar/Navbar'
import Home from './Components/Home'
import Card from './Components/Card'
import { Navigate, Route, Routes } from 'react-router-dom';
import Products from './Components/Products'
import Contact from './Components/Contact'
import Electronic from './Components/Electronic'
import Jewelery from './Components/Jewelery'
import MensClothing from './Components/MensClothing'
import All from './Components/All'
import ProductsDetails from './Components/ProductsDetails';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        

        <Route path='/products' element={<Products />}>
           <Route path='' element={<Navigate to='electronic' />} />
          <Route path='electronic' element={<Electronic />} />
          <Route path='jewelery' element={<Jewelery />} />
          <Route path='men' element={<MensClothing />} />
          <Route path='all' element={<All />} />
        </Route>

        <Route path='/card' element={<Card />} />
        <Route path='/productsdetails/:id' element={<ProductsDetails />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;