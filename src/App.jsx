import './App.css'
import { Routes , Route, Link, NavLink} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import ProductOne from './pages/Product0ne';
import ProductTwo from './pages/ProductTwo';
import Products from './pages/Products';
import ProductsLayout from './pages/ProductsLayout';



function App() {
  

  return (
    <>
  <ul>
    <li>
      <NavLink to='/' style={({isActive}) =>{
        return isActive ? { color : "red"} : {}
      }}>{({isActive})=>{
        return isActive ? "Active Home" : 'Home'
      }}</NavLink>
      </li>
    <li>
      <NavLink to='/about'>About</NavLink>
      </li>
    <li>
      <NavLink to='/products'>Products</NavLink>
      </li>

    {/* <li><Link to='/productOne'>ProductOne</Link></li>
    <li><Link to='/productTwo'>ProductTwo</Link></li> */}
  </ul>
     <Routes>
       <Route path='/' element={<Home />}/>
       <Route path='/about' element={<About />}/>
       <Route path='/products' element={<Products/>}>
          {/* <Route index element={<Products />}/> */}
          <Route path='productOne' element={<ProductOne />} />
          <Route path='productTwo' element={<ProductTwo />} />
       </Route>
       <Route path='*' element={<NotFound />}/>
     </Routes>
    
    </>
  )
}

export default App
