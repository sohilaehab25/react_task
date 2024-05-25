import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GetTeacherById } from '../api/teacherApi'; // Adjust the import path as needed

function TeacherDetails() {
    const [teacher, setTeacher] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchTeacherData = async () => {
            try {
                const data = await GetTeacherById(id);
                setTeacher(data);
                setIsLoading(false);
                console.log(data)

            } catch (error) {
                setError(error.message);
                setIsLoading(false);
            }
        };

        fetchTeacherData();
    }, [id]);
    console.log(teacher)

    if (isLoading) {
        return <div className='alert alert-primary'>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!teacher) {
        return <div className='alert alert-danger'>Teacher not found</div>;
    }

    return (
        <div>
            <p>Full Name: {teacher.fullname}</p>
            <p>Email: {teacher.email}</p>
            <p>Email: {teacher.email}</p>
            <img src={`http://localhost:8080/images/${teacher.Image}`} alt={teacher.fullname} />
        </div>
    );
}

export default TeacherDetails;
