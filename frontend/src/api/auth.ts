import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:8080/api/auth",
});

export const loginUser = async (data: { email: string; password: string }) => {
    const response = await API.post("/login", data);
    return response.data;
};