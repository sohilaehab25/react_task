import axios from 'axios';

const baseUrl = "http://localhost:8080/children";

const getAllChildren = () => axios.get(baseUrl);
const getChildById = (_id) => axios.get(`${baseUrl}/${_id}`);
const addNewChild = (child) => axios.post(baseUrl, child);
const editChild = (child, _id) => axios.put(`${baseUrl}/${_id}`, child);
const deleteChild = (_id) => axios.delete(`${baseUrl}/${_id}`);
// const deleteBook = (bookId) => axios.delete(`${baseURL}/${bookId}`);




export {
    getAllChildren,
    getChildById,
    addNewChild,
    editChild,
    deleteChild
}