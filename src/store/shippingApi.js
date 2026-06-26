import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shippingApi = createApi({
  reducerPath: "shippingApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://shipping.ifrstech.com/api" }),
  endpoints: (builder) => ({
    getShipments: builder.query({
      query: ({ page = 1, pageSize = 12, q = "" }) => {
        const params = new URLSearchParams({ page, pageSize });
        if (q) params.set("q", q);
        return `/rows?${params.toString()}`;
      },
      transformResponse: (response) => ({
        stats: response.stats,
        rows: response.shipping_data?.data ?? [],
        page: response.shipping_data?.page ?? 1,
        pageSize: response.shipping_data?.pageSize ?? 12,
        total: response.shipping_data?.total ?? 0,
        totalPages: response.shipping_data?.totalPages ?? 0,
      }),
    }),
  }),
});

export const { useGetShipmentsQuery } = shippingApi;
