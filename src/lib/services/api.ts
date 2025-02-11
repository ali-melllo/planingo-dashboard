import { createApi, fetchBaseQuery, BaseQueryFn, FetchBaseQueryError } from "@reduxjs/toolkit/query/react";
import { toast } from "sonner";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const getToken = (): string | undefined => {
  return document.cookie
    .split("; ")
    .find((row) => row.startsWith("accessToken="))
    ?.split("=")[1];
};

const customBaseQuery: BaseQueryFn<
  string | { url: string; method?: string; body?: unknown },
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const baseQuery = fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      const token = getToken();
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  });

  const result = await baseQuery(args, api, extraOptions);

  if (result.error) {
    const status = (result.error.data as { statusCode?: number })?.statusCode || 404;

    const errorMessage = (result.error.data as { message?: string })?.message || "Error While Fetching To Server";

    const toastMEssage: string = status.toString() + " : " + errorMessage ;

    toast(toastMEssage);
  }

  return result;
};

export const api = createApi({
  reducerPath: "api",
  baseQuery: customBaseQuery,
  endpoints: () => ({}),
});
