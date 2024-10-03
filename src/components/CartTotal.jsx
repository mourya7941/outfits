import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";

const CartTotal = () => {
  const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
      <div className="text-3xl mb-4">
        <Title text1={"CART "} text2={"TOTALS"} />
      </div>
      <div className="flex flex-col gap-4 mt-2 text-base">
        {/* Subtotal Section */}
        <div className="flex justify-between items-center py-2 border-b">
          <p className="text-gray-600">Subtotal</p>
          <p className="text-xl font-semibold">
            {currency}
            {getCartAmount()}.00
          </p>
        </div>
        {/* Shipping Fee Section */}
        <div className="flex justify-between items-center py-2 border-b">
          <p className="text-gray-600">Shipping Fee</p>
          <p className="text-lg font-medium text-green-600">
            {currency}{delivery_fee}
          </p>
        </div>
        {/* Total Section */}
        <div className="flex justify-between items-center py-2 border-t">
          <b className="text-lg text-gray-800">Total</b>
          <b className="text-2xl text-red-600">
            {currency}
            {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}
          </b>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
