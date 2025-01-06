import { $authHost, $host } from ".";

export const createDevice = async (device) => {
  const { data } = await $authHost.post("api/v1/device", device);
  return data;
};

export const fetchDevices = async () => {
  const { data } = await $host.get("api/v1/device");
  return data;
};

export const fetcOnehDevice = async (id) => {
  const { data } = await $host.get(`api/v1/device/${id}`);
  return data;
};
