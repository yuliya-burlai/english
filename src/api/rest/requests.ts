import axios from 'axios';

export const getPosts = async () => {
    const response = await axios.get('api/posts');
    return response.data;
};

export const createPost = async (postId: string) => {
    const response = await axios.post(`api/posts/${postId}`);
    return response.status;
}

export const editPost = async (postId: string) => {
    const response = await axios.put(`api/posts/${postId}`);
    return response.status;
}

export const deletePost = async (postId: string) => {
    const response = await axios.delete(`api/posts/${postId}`);
    return response.status;
}