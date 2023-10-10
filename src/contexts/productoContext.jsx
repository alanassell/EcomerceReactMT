import { createContext, useContext, useState, useEffect } from "react";

import getProducts from "../assets/product";

const productContext = createContext([]);

export const useproductContext = () => useContext(productContext);

export const ProductContextProvider = ({ children }) => {

    const [products,setProducts] = useState()

useEffect(()=>{
    getProducts()
    .then((resProductos)=>{
         setProducts(resProductos)
         console.log(resProductos);
        })
        .catch((error)=>{
         error.log("Error al obtener los productos")
        })
},[]);
  
  return (
    <productContext.Provider
      value={{
        products,
      }}
    >
      {children}
    </productContext.Provider>
  );
};