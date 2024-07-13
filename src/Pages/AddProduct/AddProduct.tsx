/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import "./AddProduct.css";
import { useAddproductsMutation } from "../../Redux/Features/Product/ProductApi";
import Swal from "sweetalert2";

const AddProduct = () => {
  const [addproducts, { isSuccess }] = useAddproductsMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    // You can handle form submission logic here
    const addData = {
      name: data.name,
      description: data.description,
      category: data.category,
      brand: data.brand,
      quantity: parseInt(data.quantity),
      rating: parseInt(data.rating),
      price: parseInt(data.price),
      image: data.image,
    };

    addproducts(addData);
  };

  if (isSuccess) {
    Swal.fire({
      title: "ADDED!",
      text: "ADDED PRODUCTS SUCCESSFULLY!",
      icon: "success",
      confirmButtonColor: "#f44336", // Red color for the button
      background: "#000", // Black background
    });
  }

  return (
    <div className="max-w-md mx-auto mt-8 mb-8  p-8 rounded-lg shadow-md text-white backgroundimage">
      <h2 className="text-2xl font-bold text-center mb-4 text-white">
        Contact Us
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto">
        <div className="mb-4">
          <label htmlFor="description" className="block  text-white">
            Name:
          </label>
          <input
            type="text"
            id="name"
            {...register("name", { required: true })}
            className="form-input mt-1 block w-full text-black p-2 rounded-xl"
          />
          {errors.description && (
            <span className="text-red-500">Description is required</span>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block  text-white">
            Description:
          </label>
          <input
            type="text"
            id="description"
            {...register("description", { required: true })}
            className="form-input mt-1 block w-full text-black p-2 rounded-xl"
          />
          {errors.description && (
            <span className="text-red-500">Description is required</span>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="category" className="block text-white">
            Category:
          </label>
          <input
            type="text"
            id="category"
            {...register("category", { required: true })}
            className="form-input mt-1 block w-full text-black p-2 rounded-xl"
          />
          {errors.category && (
            <span className="text-red-500">Category is required</span>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="brand" className="block text-white">
            Brand:
          </label>
          <input
            type="text"
            id="brand"
            {...register("brand", { required: true })}
            className="form-input mt-1 block w-full text-black p-2 rounded-xl"
          />
          {errors.brand && (
            <span className="text-red-500">Brand is required</span>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="quantity" className="block text-white">
            Quantity:
          </label>
          <p className="text-green-400">Should be Number</p>
          <input
            type="number"
            id="quantity"
            {...register("quantity", { required: true })}
            className="form-input mt-1 block w-full text-black p-2 rounded-xl"
          />
          {errors.quantity && (
            <span className="text-red-500">Please enter a valid quantity</span>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="price" className="block text-white">
            Price:
          </label>
          <p className="text-green-400">Should be Number</p>
          <input
            type="number"
            id="price"
            {...register("price")}
            className="form-input mt-1 block w-full text-black p-2 rounded-xl"
          />
          {errors.price && (
            <span className="text-red-500">Please enter a valid price</span>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="rating" className="block text-white">
            Rating:
          </label>
          <p className="text-green-400">Should be Number</p>
          <input
            type="number"
            id="rating"
            {...register("rating")}
            className="form-input mt-1 block w-full text-black p-2 rounded-xl"
          />
          {errors.rating && (
            <span className="text-red-500">
              Please enter a valid rating (1-5)
            </span>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="image" className="block text-white">
            Image URL:
          </label>
          <input
            type="text"
            id="image"
            {...register("image", { required: true })}
            className="form-input mt-1 block w-full text-black p-2 rounded-xl"
          />
          {errors.image && (
            <span className="text-red-500">Image URL is required</span>
          )}
        </div>

        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-full flex justify-center"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
