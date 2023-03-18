import React, {useState} from "react";
import Product from "./components/Product";
import Add from "./components/Add";
import { v4 as uuid } from 'uuid';


function App () {

  const productsList = [
    {
      name: 'Iphone',
      price: 800,
      id:uuid(),
    },
    {
      name: 'Watch',
      price: 100,
      id:uuid(),
    },
  ];
  
  const [products, setProducts] = useState(productsList)
  // const [clear, setClear] = useState({ name: "", price: 0.01, id: 3 });

// const id = uuid();
//   console.log(id)

  const addProducts = (setNewProducts, newProducts, isNameValid, isPriceValid) => {
    if (newProducts.name == "" || newProducts.price == "") { return; }
    if(isNameValid && isPriceValid){
      let key = uuid();
    setNewProducts((prev) => ({ ...prev, id: key }));
    setProducts((prev) => [...prev, newProducts]);
    setNewProducts((prev) => ({ ...prev, name: "", price: "" }));
    }
  };

  const removeProduct = (uuid) => {
    const newList = products.filter((product) => product.id !== uuid);
    setProducts(newList);
  };

return (
<div className="wrapper">  
    <Add 
      onAddProduct={addProducts}/>
        {products.map((product) => (
          <Product
            onRemove={removeProduct}
            key={uuid()}
            id={product.id}
            name={product.name}
            price={`${product.price} $`}
            remove = {(id) => removeProduct(id)}
          />
        ))};
</div> 
);
}






export default App;