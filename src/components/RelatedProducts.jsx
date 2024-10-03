import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "./ProductItem";
import Title from "./Title";

const RelatedProducts = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      // Fixed "lenth" typo to "length"
      let productsCopy = products.slice();

      // Filter by category and subcategory
      productsCopy = productsCopy.filter((item) => category === item.category);
      productsCopy = productsCopy.filter(
        (item) => subCategory === item.subCategory
      );

      // Set related products (first 5 items)
      setRelated(productsCopy.slice(0, 5));

    //   console.log(productsCopy.slice(0, 5)); 
    }
  }, [products]); // Fixed dependency array and formatting

  return (
    <div className="my-24">
      <div className="text-center text-3xl py-2">
        <Title text1={"RELATED "} text2={"PRODUCTS"} />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {related.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            name={item.name}
            price={item.price}
            image={item.image} // Added image property assuming ProductItem requires it
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
