import { baseApi } from '@/plugins/axios';

const api ='/auth';

const login = (body) => baseApi.post(`${api}/login`, body);
const add = (body) => baseApi.post(`${api}/register`, body);
const list = () => baseApi.get(`${api}`);

export { login, add, list };