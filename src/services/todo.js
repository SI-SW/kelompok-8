import { baseApi } from '@/plugins/axios';

const api ='/api/todo';

const list = () => baseApi.get(`${api}`);
const add = (body) => baseApi.post(`${api}`, body);
const put = (id) => baseApi.put(`${api}/${id}`);
const del = (id) => baseApi.delete(`${api}/${id}`);

export { list, add, put, del};