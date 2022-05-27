import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Footer from './components/Footer.js';


function App() {
  const productList = [
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
  return (
    <>
      <Navbar />
      <main>
        <ProductList product={productList} />
      </main>
      <Footer/>
    </>
  );
}

export default App;
