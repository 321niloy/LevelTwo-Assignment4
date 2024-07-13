import { useParams } from "react-router-dom";
import { useGetsingelProductsQuery } from "../../Redux/Features/Product/ProductApi";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const SingelProduct = () => {
  const { productId } = useParams();

  const { data, error, isLoading } = useGetsingelProductsQuery(productId);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading product</div>;
  }

  if (!data) {
    return <div>No product found</div>;
  }
  if (data) {
    console.log(data, "kaka");
  }

  return (
    <div className="lg:flex justify-center">
      <div className="lg:flex gap-10 lg:w-[1060px] my-10 p-6 shadow-white shadow-md rounded-2xl">
        <div>
          <PhotoProvider>
            <PhotoView src={data.data.image}>
              <img
                className="lg:w-[500px] lg:h-[450px] rounded-md"
                src={data.data.image}
              />
            </PhotoView>
          </PhotoProvider>
        </div>
        <div>
          <h1 className="text-3xl">{data.data.name}</h1>
          <p className="pt-4">Describtion: {data.data.description}</p>
          <p className="pt-4">Category: {data.data.category}</p>
          <p className="pt-4">Brand: {data.data.brand}</p>
          <p className="pt-4">Quantity: {data.data.quantity}</p>
          <p className="pt-4">Price: {data.data.price}</p>
          <p className="pt-4">Rating: {data.data.rating}</p>
        </div>
      </div>
    </div>
  );
};

export default SingelProduct;
