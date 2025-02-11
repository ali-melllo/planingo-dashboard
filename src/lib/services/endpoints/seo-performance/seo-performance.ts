import { api } from "../../api";
import { SeoPageRequestParamTypes, SeoPageResponseParamTypes } from "./types";

export const adminApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getSeoPage: builder.query<SeoPageResponseParamTypes, SeoPageRequestParamTypes>({
      query: ({ page, limit, type, searchText }) => ({
        url: `/seo/get?page=${page}&limit=${limit}&type=${type}&search=${encodeURIComponent(searchText || "")}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetSeoPageQuery } = adminApi;
