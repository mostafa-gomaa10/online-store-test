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
import OneProductPage from './components/OneProductPage';
import UpdateProduct from './components/UpdateProduct';

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
          <Route exact={true} path="/product/update/:id">
            <UpdateProduct />
          </Route>
          <Route exact={true} path="/product/:id">
            <OneProductPage />
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
