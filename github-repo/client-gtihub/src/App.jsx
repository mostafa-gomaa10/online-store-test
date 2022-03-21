import { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import './App.css'


import AddProduct from './components/AddProduct';
import AllProducts from './components/AllProducts';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {

  useEffect(() => {
    console.log('app jsx mounted');
  }, [])

  return (
    <Router>
      <div>
        <Navbar />

        <Switch>
          <Route path="/add-product">
            <AddProduct />
          </Route>
          <Route path="/all-products">
            <AllProducts />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>

  )
}

export default App
