import axios from "axios";

const API_URL = axios.create({

    baseURL: "http://localhost:8080",
    timeout: 5000,

})

export { API_URL }