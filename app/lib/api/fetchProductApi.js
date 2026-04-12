export const fetchProductsAPI = async () => {
  const res = await fetch("https://dummyjson.com/products?limit=0");
  return res.json();
};
