import axios from 'axios';

const url = 'http://localhost:5000/posts';

export const fetchOrders = () => axios.get(url);
export const createOrder = (newPost) => axios.post(url, newPost);
export const updateOrder = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const deleteOrder = (id) => axios.delete(`${url}/${id}`);