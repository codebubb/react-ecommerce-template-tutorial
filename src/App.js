import React, { useState, useEffect } from "react";
import Product from "./Product";

export function App() {
  const [productData, setProductData] = useState();

  useEffect(() => {
    (async () => {
      const productData = await fetch("http://localhost:3009/product").then(
        (response) => response.json()
      );

      setProductData(productData);
    })();
  }, []);

  return (
    <div className="container">
      {productData && <Product product={productData}></Product>}
    </div>
  );
}
