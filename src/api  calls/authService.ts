import axios from 'axios';

const API_URL =  import.meta.env.VITE_API_URL + '/api/users/login'; // Replace with your actual API URL

export const login = async (email:string, password:string) => {
    try {
        const response = await axios.post(`${API_URL}`, { email, password });
        return response.data;
    } catch (error:any) {
        console.log(error)
        throw new Error(error.response?.data?.message || 'Login failed');
    }
};