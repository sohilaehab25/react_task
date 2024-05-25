import axios from "axios";

const baseURL = "http://localhost:8080/teacher";

const GetAllTeachers = () => axios.get(baseURL);
const GetTeacherById = (id) => axios.get(`${baseURL}/${id}`);
const AddTeacher = (teacher) => axios.post(baseURL, teacher);
const DeleteTeacher = (id) => axios.delete(`${baseURL}/${id}`);
const UpdateTeacher = (teacher, _id) => axios.patch(`${baseURL}/${_id}`, teacher);


export {
    GetAllTeachers,
    GetTeacherById,
    AddTeacher,
    DeleteTeacher,
    UpdateTeacher
};
