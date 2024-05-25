import React, { useEffect, useState } from 'react';
import { Table, x} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllTeachers } from '../redux/teacher';
import TeacherDetails from './TeacherDetails'; // Import the TeacherDetails component

function TeacherTable() {
    // const [selectedTeacher, setSelectedTeacher] = useState(null); 
    // const [selectedTeacherId, setSelectedTeacherId] = useState(null); 
    // const [showDetailsModal, setShowDetailsModal] = useState(false); 
    const { teachers, isLoading, error } = useSelector(state => state.teacherSlice);

    const dispatch = useDispatch();



    // const {data} = useLoaderData();
    // const { teachers, set } = useState(data);

    // const [error, setError]= useState(false)
    // const [isLoading, setIsLoading] = useState(false)

   
    useEffect(() => {
        dispatch(getAllTeachers());
    }, [dispatch]);
    



    return (
        <div className='mt-4 bg-light p-5 w-30 h-30'>
            {isLoading && <h1 className='alert alert-success text-dark'>Loading</h1>}
            {error ? (
                <h1 className='alert alert-danger'>Can't load teachers</h1>
            ) : (
                <>
                    <Link to={`/add_teacher`}>
                        <i className="bi bi-person-plus fs-1 text-primary m-2"></i>
                    </Link>
                    <Table striped bordered hover size="lg">
                        <thead>
                            <tr className='text-center'>
                                <th>ID</th>
                                <th>Full Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {teachers.map((teacher) => (
                                <tr className="text-center" key={teacher._id}>
                                    <td>{teacher._id}</td>
                                    <td>{teacher.fullname}</td>
                                    <td>{teacher.email}</td>
                                    <td>{teacher.role}</td>
                                    <td className='text-center'>
                                    <Link to={`/teacher_info/${teacher._id}`}> <i className="bi bi-eye fs-2 text-warning mx-2"></i></Link>
                                        <Link to={`/teacher_update/${teacher._id}`}>
                                            <i className="bi bi-pencil-square fs-2 text-dark mx-2"></i>
                                        </Link>
                                        <i
                                            // onClick={() => deleteHandler(teacher._id)}
                                            className="bi bi-person-x fs-2 text-danger mx-2"
                                        ></i>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </>
            )}
        </div>
    );
}

export default TeacherTable;
