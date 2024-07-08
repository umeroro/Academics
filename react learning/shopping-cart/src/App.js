import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import AddItem from "./components/AddItem";

function App() {
  const products = [
    {
      price: 150000,
      name: "Iphone 11",
      quantity: 0,
    },
    {
      price: 200000,
      name: "Iphone 12",
      quantity: 0,
    },
  ];

  const incrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newProductList[index].quantity++;
    newTotalAmount += newProductList[index].price;
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  };
  const decrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
      newTotalAmount -= newProductList[index].price;
    }
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  };
  const resetQuantity = () => {
    let newProductList = [...productList];
    newProductList.map(product =>{
      product.quantity = 0;
    });
    setProductList(newProductList);
    setTotalAmount(0);
  };
  const removeItem = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newTotalAmount -=
    newProductList[index].quantity * newProductList[index].price;
    newProductList.splice(index, 1);
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  };
  const addItem = (name, price) => {
    let newProductList = [...productList];
    newProductList.push({ 
      name:name,
      price:price, 
      quantity: 0
    });
    setProductList(newProductList);
  }

  const [productList, setProductList] = useState(products);
  const [totalAmount, setTotalAmount] = useState(0);

  return (
    <>
      <Navbar />
      <main className="container mt-5">
        <AddItem addItem={addItem} />
        <ProductList
          productList={productList}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          removeItem={removeItem}
        />
      </main>
      <Footer totalAmount={totalAmount} resetQuantity={resetQuantity} />
    </>
  );
}

export default App;
