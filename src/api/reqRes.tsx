import axios from "axios";

export const reqResApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2',
});
