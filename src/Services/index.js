import Api from "./Api";

export const fetchCep = async (cep) => {
  const { data } = await Api.get(`${cep}/json/`);
  return data;
};
