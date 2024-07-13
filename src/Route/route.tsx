import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../Pages/Home/HomePage";
import AllProducts from "../Pages/Products/AllProducts";
import ManageProducts from "../Pages/ManageProducts/ManageProducts";
import CartPage from "../Pages/Cart/CartPage";
import AboutUs from "../Pages/AboutUs/AboutUs";
import SingelProduct from "../Pages/SingelProductpage/SingelProduct";
import AddProduct from "../Pages/AddProduct/AddProduct";
import UpdateProduct from "../Pages/UpdateProduct.tsx/UpdateProduct";
import CheckOutPage from "../Pages/CheckOutPage/CheckOutPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/allProducts",
        element: <AllProducts></AllProducts>,
      },
      {
        path: "/manage-products",
        element: <ManageProducts></ManageProducts>,
      },
      {
        path: "/carts",
        element: <CartPage></CartPage>,
      },
      {
        path: "/about",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/product/:productId",
        element: <SingelProduct></SingelProduct>,
      },
      {
        path: "/addproducts",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/update/:id",
        element: <UpdateProduct></UpdateProduct>,
      },
      {
        path: "/checkout",
        element: <CheckOutPage></CheckOutPage>,
      },
    ],
  },
]);
