import axios from 'axios'


const baseUrl = axios.create({ baseURL: "http://localhost:7000/" })

export default baseUrl