import axios from "axios";

const API_URL = axios.create({

    baseURL: "http://crud-cardapio-java-production.up.railway.app",
    timeout: 5000,

})

export { API_URL };

