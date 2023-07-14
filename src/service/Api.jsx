import axios from "axios";
import { constantsApi } from "../constants/constants";
import { toast } from "react-toastify";

export const api = axios.create({
  baseURL: constantsApi.BASE_URL,
});

export const getBeer = async (page) => {
  try {
    const beer = await api.get(`v2/beers?page=${page}`);
    if (beer) {
      return beer.data;
    }
  } catch (error) {
    return toast.info(error);
  }
};
