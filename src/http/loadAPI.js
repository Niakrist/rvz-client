import { $authHost, $host } from ".";

export const createLoad = async (load) => {
  const { data } = await $authHost("api/v1/load", load);
  return data;
};

export const fetchLoads = async () => {
  const { data } = await $host("api/v1/load");
  return data;
};
