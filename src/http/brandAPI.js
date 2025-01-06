import { $authHost, $host } from ".";

export const createBrand = async (brand) => {
  const { data } = await $authHost.post("api/v1/brand", brand);
  return data;
};

export const fetchBrand = async () => {
  const { data } = await $host.get("api/v1/brand");
  return data;
};
