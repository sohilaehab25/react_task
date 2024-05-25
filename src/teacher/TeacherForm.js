import React, { useState, useEffect } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import {
    AddTeacher,
    UpdateTeacher,
    GetTeacherById
} from '../api/teacherApi';

function TeacherForm() {
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        password: '',
        role: '',
        image: null
    });
    const [errors, setErrors] = useState({});
    const { _id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (_id) {
            const fetchTeacher = async () => {
                try {
                    console.log(`Fetching teacher with ID: ${_id}`);
                    const response = await GetTeacherById(_id);
                    console.log('Teacher data:', response.data);
                    setFormData(response.data);
                } catch (error) {
                    console.error('Error fetching teacher data:', error);
                }
            };
            fetchTeacher();
        } else {
            setFormData({
                fullname: '',
                email: '',
                password: '',
                role: '',
                image: null
            });
        }
    }, [_id]);

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        const newValue = type === 'file' ? files[0] : value;
        setFormData((prevData) => ({
            ...prevData,
            [name]: newValue
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = validateForm(formData);
        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            try {
                const formDataObj = new FormData();
                formDataObj.append('fullname', formData.fullname);
                formDataObj.append('email', formData.email);
                formDataObj.append('password', formData.password);
                formDataObj.append('role', formData.role);
                if (formData.image) {
                    formDataObj.append('image', formData.image);
                }

                if (!_id) {
                    console.log('Adding new teacher:', formDataObj);
                    await AddTeacher(formDataObj);
                } else {
                    console.log(`Updating teacher with ID: ${_id}`, formDataObj);
                    await UpdateTeacher(formDataObj, _id);
                }

                navigate('/list_all_teachers');
            } catch (error) {
                console.error('Error submitting teacher form:', error);
            }
        }
    };

    const validateForm = (data) => {
        let errors = {};
        if (!data.fullname.trim()) {
            errors.fullname = 'Full name is required';
        }
        if (!data.email.trim()) {
            errors.email = 'Email is required';
        } else if (!isValidEmail(data.email)) {
            errors.email = 'Enter a valid email address';
        }
        if (!data.password.trim()) {
            errors.password = 'Password is required';
        } 
        if (!data.role.trim()) {
            errors.role = 'Role is required';
        }
        return errors;
    };

    const isValidEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    return (
        <Form noValidate onSubmit={handleSubmit} encType="multipart/form-data">
            <Row className="mb-3">
                <Form.Group as={Col} md="8" controlId="validationFormik101">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="fullname"
                        value={formData.fullname}
                        onChange={handleChange}
                        isInvalid={!!errors.fullname}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.fullname}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="8" controlId="validationFormik102">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        isInvalid={!!errors.email}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.email}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="8" controlId="validationFormik103">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        isInvalid={!!errors.password}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.password}
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="validationFormik104">
                    <Form.Label>Role</Form.Label>
                    <Form.Select
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        isInvalid={!!errors.role}
                    >
                        <option value="">Select Role</option>
                        <option value="teacher">Teacher</option>
                        <option value="admin">Admin</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                        {errors.role}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="8" controlId="validationFormik105">
                    <Form.Label>Image</Form.Label>
                    <Form.Control
                        type="file"
                        name="image"
                        onChange={handleChange}
                        accept="image/*"
                        isInvalid={!!errors.image}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.image}
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Button type="submit">Submit Teacher</Button>
        </Form>
    );
}

export default TeacherForm;
