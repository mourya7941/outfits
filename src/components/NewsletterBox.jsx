import React from "react";

const NewsletterBox = () => {

  const onSubmitHandler = (event) => {
    event.preventDefault();
  }

  return (
    <div className="text-center py-12 px-4 bg-gray-50">
      <p className="text-4xl font-semibold text-gray-800">
        Subscribe now & Get 20% Off
      </p>
      <p className="text-gray-500 mt-4 max-w-xl mx-auto">
        Stay updated with our latest trends, discounts, and exclusive offers.
        Don’t miss out!
      </p>
      <form onSubmit={onSubmitHandler } className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 flex items-center gap-3 mx-auto my-8 border rounded-full px-4 py-2 bg-white shadow-md">
        <input
          className="w-full outline-none text-sm py-3 px-2 rounded-full focus:ring-2 focus:ring-black transition duration-300"
          type="email"
          placeholder="Enter your email"
          required
        />
        <button
          type="submit"
          className="bg-black text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-gray-800 transition duration-300"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsletterBox;
