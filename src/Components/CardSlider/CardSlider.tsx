import { useEffect, useState } from "react";
import "./CardSlider.css";
import { useGetLatestProductsQuery } from "../../Redux/Features/Product/ProductApi";

import TryRating from "../try/TryRating";

interface Product {
  name: string;
  category: string;
  brand: string;
  rating: number;
  price: string;
  image: string;
}

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { data, isLoading } = useGetLatestProductsQuery("kk");
  const [items, setItems] = useState<Product[]>([]);

  useEffect(() => {
    if (data) {
      // Ensure data.data is an array and limit to the first 8 items
      const limitedData = data.data.slice(0, 8) as Product[];
      setItems(limitedData);
    }
  }, [data]);

  if (isLoading) {
    return <div>Loading....</div>;
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const goToIndex = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <h1 className="title text-red-500">Latest Product</h1>
      <div className="cascade-slider_container" id="cascade-slider">
        <div className="cascade-slider_slides">
          {items.map((product, index) => (
            <div
              key={index}
              className={`cascade-slider_item ${
                index === currentIndex
                  ? "now"
                  : index === (currentIndex + 1) % items.length
                  ? "next"
                  : index === (currentIndex - 1 + items.length) % items.length
                  ? "prev"
                  : ""
              }`}
            >
              <div className="card">
                <div>
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="justify-start text-black mt-4">
                  <p>
                    <span className="font-bold">Name: </span> {product.name}
                  </p>
                  <p>
                    <span className="font-bold">Category: </span>{" "}
                    {product.category}
                  </p>
                  <p>
                    <span className="font-bold">Brand: </span> {product.brand}
                  </p>
                  <p>
                    <span className="font-bold">Rating: </span>{" "}
                    <TryRating star={product.rating}></TryRating>
                  </p>
                  <p>
                    <span className="font-bold">Price: </span> {product.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <span
          className="cascade-slider_arrow cascade-slider_arrow-left"
          onClick={goToPrev}
        >
          <img
            className="rounded-full"
            src="https://i.ibb.co/tC9tyfQ/left.jpg"
            alt="Left Arrow"
          />
        </span>
        <span
          className="cascade-slider_arrow cascade-slider_arrow-right"
          onClick={goToNext}
        >
          <img
            className="rounded-full"
            src="https://i.ibb.co/GHqJVfC/right.jpg"
            alt="Right Arrow"
          />
        </span>
        <div className="cascade-slider_nav">
          {items.map((_, index) => (
            <span
              key={index}
              className={`cascade-slider_dot ${
                index === currentIndex ? "cur" : ""
              }`}
              onClick={() => goToIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    </>
  );
};

export default Slider;
