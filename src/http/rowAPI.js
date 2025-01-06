import { $authHost, $host } from ".";

export const createRow = async (row) => {
  const { data } = await $authHost.post("api/v1/row", row);
  return data;
};

export const fetchRows = async () => {
  const { data } = await $host.get("api/v1/row");
  return data;
};
