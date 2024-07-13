/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLocation } from "react-router-dom";

const CheckOutPage = () => {
  const location = useLocation();
  const { product, quantity, totalAmount, cartItems } = location.state;
  console.log(product, "afterCheckOut");
  console.log("Current Items:  => ", cartItems);
  return (
    <div>
      <div>
        {cartItems?.map((allproduct: any) => (
          <div key={allproduct._id}>
            <h2>Product: {allproduct.name}</h2>
            <p>Quantity: {allproduct.currentQuantity}</p>
            <p>Price per unit: {allproduct.price}</p>
            <p>
              Total price:{" "}
              {(allproduct.price * allproduct.currentQuantity).toFixed(2)}
            </p>
          </div>
        ))}
      </div>
      <h1>Checkout Page</h1>
      <div>
        <p>Quantity: {quantity}</p>
        {product && console.log(product)}

        <p>Total Amount (incl. 15% VAT): {totalAmount.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default CheckOutPage;
