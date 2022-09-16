import axios from "axios";

const URL = "https://viacep.com.br/ws/";

const api = axios.create({ baseURL: URL });

export default api;
