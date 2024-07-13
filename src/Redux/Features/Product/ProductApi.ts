import { baseApi } from "../../Api/baseApi";

export const productsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: ({ searchTerm = "", sort = "" }) => {
        console.log("kam", sort);
        return {
          url: "/products",
          method: "GET",
          params: { searchTerm, sort },
        };
      },
      providesTags: ["product"],
    }),

    getsingelProducts: builder.query({
      query: (id) => ({
        url: `/products/${id}`,
        method: "GET",
      }),
      providesTags: ["product"],
    }),

    deleteproducts: builder.mutation({
      query: (id) => {
        return {
          url: `/products/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["product"],
    }),

    addproducts: builder.mutation({
      query: (products) => {
        console.log("ALLpRODUCT", products);
        return {
          url: `/create-products`,
          method: "POST",
          body: products,
        };
      },
      invalidatesTags: ["product"],
    }),

    updateproducts: builder.mutation({
      query: ({ id, products }) => {
        console.log("update", id, products);
        return {
          url: `/products/${id}`,
          method: "PUT",
          body: products,
        };
      },
      invalidatesTags: ["product"],
    }),

    getLatestProducts: builder.query({
      query: () => ({
        url: "/latest",
        method: "GET",
      }),
    }),
    postCartProducts: builder.mutation({
      query: (id) => ({
        url: `/productsCart/${id}`,
        method: "post",
      }),
      invalidatesTags: ["product"],
    }),
    getCarts: builder.query({
      query: () => ({
        url: `/carts`,
        method: "GET",
      }),
    }),
    paymentgetway: builder.mutation({
      query: ({ product, quantity, totalAmount, state }) => {
        console.log(product, quantity, totalAmount, state, "PaymentBoss");

        return {
          url: `/payment`,
          method: "POST",
          body: {
            product,
            quantity,
            totalAmount,
            state,
          },
        };
      },
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetsingelProductsQuery,
  useGetLatestProductsQuery,
  usePostCartProductsMutation,
  useGetCartsQuery,
  useDeleteproductsMutation,
  useAddproductsMutation,
  useUpdateproductsMutation,
  usePaymentgetwayMutation,
} = productsApi;
