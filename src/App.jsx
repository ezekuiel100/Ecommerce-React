import { createContext, useState } from "react";
import { products } from "./Data/db";

import Nav from "./components/Nav";
import Products from "./components/Products";
import Sidebar from "./components/sidebar/Sidebar";

export const Context = createContext({});

function App() {
  const [brand, setBrand] = useState("Todas");
  const [price, setPrice] = useState("Todos");
  const [query, setQuery] = useState(""); //Busca

  let filteredProducts = products;

  if (brand !== "Todas") {
    filteredProducts = filteredProducts.filter((product) => {
      return product.manufacturer === brand;
    });
  }

  if (price !== "Todos") {
    filteredProducts = filteredProducts.filter((product) => {
      if (price === "0") {
        return product.price <= 300;
      } else if (price === "300") {
        return product.price >= 300;
      } else if (price === "500") {
        return product.price >= 500;
      }
    });
  }

  if (query) {
    filteredProducts = products.filter((product) => {
      return product.title.toLowerCase().includes(query.toLowerCase());
    });
  }

  return (
    <>
      <Context.Provider
        value={{ brand, setBrand, price, setPrice, query, setQuery }}
      >
        <Nav />
        <div className="flex justify-center  ">
          <Sidebar />
          <Products products={filteredProducts} />
        </div>
      </Context.Provider>
    </>
  );
}

export default App;
