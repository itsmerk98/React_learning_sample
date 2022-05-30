import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Footer from './components/Footer.js';
import React, { useState } from 'react';




function App() {
  const products = [
    {
      price: 99999,
      name: "iPhone ios Max",
      quantity: 0,
    },
    {
      price: 9999,
      name: "Redmi Note N50 ",
      quantity: 0,
    }
  ]

  let [productList, setProductList] = useState(products)

  const incrementQuantity=(index) => {
    let newProductList = [...productList]
    newProductList[index].quantity++
    setProductList(newProductList);
  }

  const decrementQuantity=(index) => {
    let newProductList = [...productList]
    if(newProductList)
    newProductList[index].quantity--
    setProductList(newProductList);
  }

  return (
    <>
      <Navbar />
      <main className='container mt-5'>
        <ProductList productList={productList} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity} />
      </main>
      <Footer />
    </>
  );
}

export default App;
