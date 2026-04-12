

import { fetchProductsAPI } from "./fetchProductApi";
import { setProduct } from "../redux/reduxSlice/productSlice";

export const fetchProduct = async (dispatch) => {
  const data = await fetchProductsAPI();
  dispatch(setProduct(data.products));
};