/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import {
  useGetCartsQuery,
  usePaymentgetwayMutation,
} from "../../Redux/Features/Product/ProductApi";

import Swal from "sweetalert2";
import TryRating from "../../Components/try/TryRating";

const CartPage = () => {
  const { data, isLoading, refetch, isError } = useGetCartsQuery("und");
  const [paymentgetway, { data: result, isSuccess, status }] =
    usePaymentgetwayMutation();
  const [cartItems, setCartItems] = useState<any[]>([]);
  let sendEcommerz: any;
  useEffect(() => {
    if (data && Array.isArray(data.data)) {
      setCartItems(
        data.data.map((item: any) => ({
          ...item,
          originalQuantity: item.quantity, // Store the original quantity from the database
          currentQuantity: 1, // Initialize the current quantity for interaction
        }))
      );
    }
  }, [data]);

  useEffect(() => {
    refetch();
  }, [refetch]);

  if (isSuccess) {
    console.log("It is success");
    console.log(status);
    const ecomerzStringy = JSON.stringify(result);
    sendEcommerz = JSON.parse(ecomerzStringy);
    console.log("parse", sendEcommerz.url);
  }

  const handleIncreaseQuantity = (id: string) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item._id === id
          ? { ...item, currentQuantity: item.currentQuantity + 1 }
          : item
      )
    );
  };

  const handleDecreaseQuantity = (id: string) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item._id === id && item.currentQuantity > 1
          ? { ...item, currentQuantity: item.currentQuantity - 1 }
          : item
      )
    );
  };

  const handleBuy = async (product: any) => {
    const quantity = product.currentQuantity;
    const totalAmount = product.price * quantity * 1.15; // Calculate total amount including 15% VAT

    try {
      const result = await paymentgetway({
        product,
        quantity,
        totalAmount,
      }).unwrap();
      if (result && result.url) {
        window.location.replace(result.url);
      } else {
        console.error("Payment gateway URL not found");
      }
    } catch (error) {
      console.error("Error initiating payment:", error);
    }
  };

  const handleDelete = (id: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item._id !== id));
    Swal.fire({
      title: "Deleted!",
      text: "Product removed from the cart!",
      icon: "success",
      confirmButtonColor: "#f44336",
      background: "#000",
    });
  };

  const handleAllBuy = () => {
    const totalAmount =
      cartItems.reduce(
        (acc, item) => acc + item.price * item.currentQuantity,
        0
      ) * 1.15; // Adding 15% VAT

    paymentgetway({ state: { cartItems, totalAmount } });

    window.location.replace(sendEcommerz.url);
  };

  const calculateTotalPrice = () => {
    const total = cartItems.reduce(
      (acc, item) => acc + item.price * item.currentQuantity,
      0
    );
    return total + total * 0.15; // Adding 15% VAT
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center">
        <h1 className="font-bold text-white text-4xl">Loading</h1>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center">
        <h1 className="font-bold text-white text-4xl">Error loading cart</h1>
      </div>
    );
  }

  if (!data || !Array.isArray(data.data)) {
    return (
      <div className="flex justify-center items-center">
        <h1 className="font-bold text-white text-4xl">
          There are No Products in the Cart
        </h1>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-center items-center my-10">
        <h1 className="text-3xl font-bold">
          Total Price (incl. 15% VAT): {calculateTotalPrice().toFixed(2)}
        </h1>
        <button
          onClick={handleAllBuy}
          className="py-4 px-6 rounded-xl bg-red-600 text-white ms-4"
        >
          All Buy
        </button>
      </div>
      {cartItems.map((product: any) => (
        <div key={product._id} className="lg:flex justify-center">
          <div className="lg:flex gap-10 lg:w-[1060px] my-10 p-6 shadow-white shadow-md rounded-2xl">
            <div>
              <img
                className="lg:w-[500px] lg:h-[450px] rounded-md"
                src={product.image}
                alt={product.name}
              />
            </div>
            <div>
              <h1 className="text-3xl">{product.name}</h1>
              <p className="pt-4">Description: {product.description}</p>
              <p className="pt-4">Category: {product.category}</p>
              <p className="pt-4">Price: {product.price}</p>
              <p className="pt-4">
                Database Quantity: {product.originalQuantity}
              </p>{" "}
              {/* Show the original quantity from the database */}
              <p className="pt-4">
                <TryRating star={product.rating}></TryRating>
              </p>
              <div className="flex items-center pt-4">
                <button
                  className="px-2 py-1 bg-black border-2 border-red-600 text-white rounded"
                  onClick={() => handleDecreaseQuantity(product._id)}
                >
                  -
                </button>
                <span className="mx-4">{product.currentQuantity}</span>{" "}
                {/* Show the current quantity for interaction */}
                <button
                  className="px-2 py-1 bg-black border-2 border-red-600 text-white rounded"
                  onClick={() => handleIncreaseQuantity(product._id)}
                >
                  +
                </button>
              </div>
              <div className="flex gap-6 mt-5">
                <button
                  onClick={() => handleBuy(product)}
                  className="py-4 px-6 rounded-xl bg-red-600 text-white"
                >
                  Buy
                </button>
                <button
                  onClick={() => handleDelete(product._id)}
                  className="p-4 rounded-xl bg-red-600 text-white"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartPage;
