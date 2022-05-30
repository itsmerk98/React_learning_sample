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
  let [totalAmount, setTotalAmount] = useState(0)

  const incrementQuantity=(index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newProductList[index].quantity++;
    newTotalAmount += newProductList[index].price;
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  }

  const decrementQuantity=(index) => {
    let newProductList = [...productList]
    let newTotalAmount = totalAmount;
    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
      newTotalAmount -= newProductList[index].price;
    } 
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  }

  return (
    <>
      <Navbar />
      <main className='container mt-5'>
        <ProductList productList={productList} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity} />
      </main>
      <Footer totalAmount={totalAmount} />
    </>
  );
}

export default App;
