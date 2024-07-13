/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import {
  useDeleteproductsMutation,
  useGetAllProductsQuery,
} from "../../Redux/Features/Product/ProductApi";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import TryRating from "../../Components/try/TryRating";

const ManageProducts = () => {
  const { data, isLoading, refetch, isError } = useGetAllProductsQuery("und");
  const [deleteproducts, { isSuccess }] = useDeleteproductsMutation();
  console.log("cart", data);

  useEffect(() => {
    if (data) {
      console.log("cart", data);
    }
  }, [data]);

  // Refetch data on component mount (optional, based on your requirements)
  useEffect(() => {
    refetch();
  }, [refetch]);

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

  const deleteHandeler = (id: string) => {
    deleteproducts(id);
  };

  if (isSuccess) {
    Swal.fire({
      title: "DELETE!",
      text: "Product Deleted Successfull!",
      icon: "success",
      confirmButtonColor: "#f44336", // Red color for the button
      background: "#000", // Black background
    });
  }

  return (
    <div>
      <div className="lg:flex lg:justify-center">
        <Link
          to="/addproducts"
          className="p-7 w-full rounded-xl hover:bg-red-600 text-white bg-red-800 m-7 overflow-hidden flex items-center justify-center mx-auto"
        >
          ADD PRODUCT
        </Link>
      </div>

      {data?.data?.map((product: any) => (
        <div key={product._id} className="lg:flex justify-center">
          <div className="lg:flex gap-10 lg:w-[1060px] my-10 p-6 shadow-white shadow-md rounded-2xl">
            <div>
              <img
                className="lg:w-[500px] lg:h-[450px] rounded-md"
                src={product.image}
                alt={product.name} // Always good to include alt text for images
              />
            </div>
            <div>
              <h1 className="text-3xl">{product.name}</h1>
              <p className="pt-4">Description: {product.description}</p>{" "}
              {/* Corrected typo "Describtion" to "Description" */}
              <p className="pt-4">Category: {product.category}</p>
              <p className="pt-4">Price: {product.price}</p>
              <p className="pt-4">
                Rating: <TryRating star={product.rating}></TryRating>
              </p>
              <div className="flex gap-6 mt-5">
                <Link
                  to={`/update/${product._id}`}
                  className="p-4 rounded-xl bg-red-600 text-white flex justify-center"
                >
                  Update
                </Link>
                <button
                  onClick={() => deleteHandeler(product._id)}
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

export default ManageProducts;
