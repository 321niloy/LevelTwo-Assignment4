/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import {
  useGetAllProductsQuery,
  usePostCartProductsMutation,
} from "../../Redux/Features/Product/ProductApi";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import TryRating from "../../Components/try/TryRating";

interface Filters {
  sportCategory?: string; // Define sportCategory here
  price: string;
  brand: string;
  rating: string;
}

const AllProducts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy] = useState("price");
  const [sortDirection, setSortDirection] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1); // Track current page
  const perPage = 9;

  const [filters, setFilters] = useState<Filters>({
    price: "",
    brand: "",
    rating: "",
  });

  // Fetch products based on search term, sorting, and filters
  const { data, error, isLoading } = useGetAllProductsQuery({
    searchTerm,
    sort: sortDirection === "asc" ? sortBy : `-${sortBy}`,
    page: currentPage,
    perPage,
    ...filters,
  });

  console.log(data);
  const [postCartProducts] = usePostCartProductsMutation();

  //add to Cart Product id
  const addToCart = (productId: string) => {
    postCartProducts(productId);
    Swal.fire({
      title: "Added",
      icon: "success",
      text: "Do not again added same product , it Show added but not Working!",
      confirmButtonColor: "#f44336",
      background: "#000",
    });
  };

  // Handle search input changes
  const handleSearchChange = (event: any) => {
    setSearchTerm(event.target.value);
  };

  // Handle sort direction toggle
  const handleSort = () => {
    setSortDirection(sortDirection === "asc" ? "desc" : "asc");
  };

  // Handle filter changes
  const handleFilterChange = (filterType: any, value: any) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: value,
    }));
  };

  // Clear all filters
  const clearFilters = () => {
    setFilters({
      sportCategory: "",
      price: "",
      brand: "",
      rating: "",
    });
  };

  // Go to previous page
  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  // Go to next page
  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  // Render loading state
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Render error state
  if (error) {
    console.log("Error =>", error);
    return <div>Error loading products</div>;
  }

  // Render no products found state
  if (!data) {
    return <div>No products found</div>;
  }

  const totalPages = Math.ceil(data.data.length / perPage);
  // Render product list
  return (
    <div>
      <div className="flex justify-between items-center px-6 pt-4">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="border border-gray-300 px-3 py-1 rounded text-black"
        />
        <div className="flex items-center space-x-4">
          <span>Sort by:</span>
          <button onClick={handleSort} className="cursor-pointer font-bold">
            Price {sortDirection === "asc" ? "↑" : "↓"}
          </button>
        </div>
      </div>

      {/* Filter Section */}
      <div className="flex justify-between items-center px-6 py-4">
        <div className="flex items-center space-x-4">
          <span>Filters:</span>
          <select
            value={filters.sportCategory}
            onChange={(e) =>
              handleFilterChange("sportCategory", e.target.value)
            }
            className="border border-gray-300 px-3 py-1 rounded text-black "
          >
            <option className="bg-red-600" value="">
              Select Sport Category
            </option>
            {/* Add  options dynamically based on available categories */}
            {/* Example: <option value="football">Football</option> */}
          </select>
          <input
            type="text"
            placeholder="Price"
            value={filters.price}
            onChange={(e) => handleFilterChange("price", e.target.value)}
            className="border border-gray-300 px-3 py-1 rounded text-black"
          />
          <input
            type="text"
            placeholder="Brand"
            value={filters.brand}
            onChange={(e) => handleFilterChange("brand", e.target.value)}
            className="border border-gray-300 px-3 py-1 rounded text-black"
          />
          <input
            type="text"
            placeholder="Rating"
            value={filters.rating}
            onChange={(e) => handleFilterChange("rating", e.target.value)}
            className="border border-gray-300 px-3 py-1 rounded text-black"
          />
        </div>
        <button
          onClick={clearFilters}
          className="bg-black text-red-600 font-extrabold border-2 border-red-700 px-4 py-2 rounded"
        >
          Clear Filters
        </button>
      </div>

      {/* Product List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pl-6 pt-6 pb-6">
        {data.data.map((product: any) => (
          <div
            key={product._id}
            className="max-w-xs rounded overflow-hidden shadow-lg bg-black"
          >
            <img className="w-96 h-96" src={product.image} alt={product.name} />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{product.name}</div>
              <p className="text-white text-base">
                Category: {product.category}
              </p>
              <p className="text-white text-base">
                Description: {product.description}
              </p>
              <p className="text-white text-base mt-2">
                Price: {product.price}
              </p>
              <p className="text-white text-base mt-2">
                Brand: {product.brand}
              </p>
              <p className="text-white text-base mt-2">
                Rating:{" "}
                <TryRating star={product.rating}></TryRating>
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <button
                onClick={() => addToCart(product._id)}
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Add to Cart
              </button>
              <Link to={`/product/${product._id}`}>
                <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ms-3">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/*/////////pagination */}
      <div className="my-5 ">
        <div className="flex justify-center mt-6">
          <button
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            className="bg-black text-white border-2 border-red-600 px-4 py-2 rounded mr-2"
          >
            Previous
          </button>
          <span className="text-lg font-bold">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className="bg-black text-white border-2 border-red-600 px-4 py-2 rounded ml-2"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
