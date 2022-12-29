import './App.css';
import Navbar from './Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Pruches from './Pruches/Pruches';
import Home from './Home/Home';
import Search from './Search/Search';
import Products from './Products/Products';
import Salse from './Salse/Salse';
import ProductSalse from './ProductSalse/ProductSalse';
function App() {
  return (
    <>

      <Navbar />
      <Routes basename="/tothepoint_System-Salse">
        <Route path='/' element={<Home />}/>
        <Route path='Home' element={<Home />}/>
        <Route path='Pruches' element={<Pruches />}/>
        <Route path='Search' element={<Search />}/>
        <Route path='Salse' element={<Salse />}/>
        <Route path='Products' element={<Products />}/>
        <Route path='ProductSalse' element={<ProductSalse />}/>
        <Route path='*' element={<h1>Home Not Found Please Back Home </h1>}/>
      </Routes>



    </>
  );
}

export default App;
