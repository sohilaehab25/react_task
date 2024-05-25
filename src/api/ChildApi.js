import axios from 'axios';

const baseUrl = "http://localhost:8080/children";

const getAllChildren = () => axios.get(baseUrl);
const getChildById = (child_id) => axios.get(`${baseUrl}/${child_id}`);
const addNewChild = (child) => axios.post(baseUrl, child);
const editChild = (child, child_id) => axios.patch(`${baseUrl}/${child_id}`, child);
const deleteChild = (child_id) => axios.delete(`${baseUrl}/${child_id}`);




export {
    getAllChildren,
    getChildById,
    addNewChild,
    editChild,
    deleteChild
}