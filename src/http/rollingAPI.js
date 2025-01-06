import { $authHost, $host } from ".";

export const createRolling = async (rolling) => {
  const { data } = await $authHost.post("api/v1/rolling", rolling);
  return data;
};

export const fetchRollings = async () => {
  const { data } = await $host.get("api/v1/rolling");
  return data;
};
