import axios from "axios"

export const axiosInstance = axios.create({
    baseURL : "https://blog-kt.herokuapp.com/api/"
})