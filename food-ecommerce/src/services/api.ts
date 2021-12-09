import axios from "axios";

export const api = axios.create({
  baseURL: "https://viacep.com.br/ws/",
});
// https://viacep.com.br/ws/${cep}/json/
