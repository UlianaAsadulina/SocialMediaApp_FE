import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000',
});

export const fetchPosts = () => api.get('/posts');
export const createPost = (newPostFormData) => api.post('/posts', newPostFormData);
export const updatePost = (id, updatedPostFormData) => api.patch(`/posts/${id}`, updatedPostFormData);
export const likePost = (id) => api.patch(`/posts/${id}/likePost`);
export const deletePost = (id) => api.delete(`/posts/${id}`);