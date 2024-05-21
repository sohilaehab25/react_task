import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom'
import { getChildById, addNewChild, editChild } from '../api/ChildApi';


function FormChild({ initialData }) {
    const [formData, setFormData] = useState(initialData || {
        fullName: '',
        age: '',
        level: '',
        address: {
            city: '',
            street: '',
            building: '',
        },
        image: '',
    });
    const { _id } = useParams();
    const navigate = useNavigate();

    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (_id) {
            const fetchData = async () => {
                const response = await getChildById(_id);
                setFormData(response.data);
            }
            fetchData();
        }
    }, [_id]);

    const validateForm = (data) => {
        let errors = {};

        if (!data.fullName.trim()) {
            errors.fullName = 'Full Name is required';
        }
        if (!data.age) {
            errors.age = 'Age is required';
        }
        if (!data.level) {
            errors.level = 'Level is required';
        }
        if (!data.address.city) {
            errors.city = 'City is required';
        }
        if (!data.address.street) {
            errors.street = 'Street is required';
        }
        if (!data.address.building) {
            errors.building = 'Building is required';
        }
        if (!data.image) {
            errors.image = 'Image is required';
        }

        return errors;
    };

    const resetForm = () => {
        setFormData({
            fullName: '',
            age: '',
            level: '',
            address: {
                city: '',
                street: '',
                building: '',
            },
            image: '',
        });
    };

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        const newValue = type === 'file' ? files[0] : value;
    
        if (name.startsWith('address.')) {
            const addressField = name.split('.')[1];
            setFormData((prevFormData) => ({
                ...prevFormData,
                address: {
                    ...prevFormData.address,
                    [addressField]: newValue
                }
            }));
        } else {
            setFormData({
                ...formData,
                [name]: newValue
            });
        }
    };
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = validateForm(formData);
        setErrors(newErrors);
    
        if (Object.keys(newErrors).length === 0) {
            try {
                const data = new FormData();
                data.append('fullName', formData.fullName);
                data.append('age', formData.age);
                data.append('level', formData.level);
                data.append('address[city]', formData.address.city);
                data.append('address[street]', formData.address.street);
                data.append('address[building]', formData.address.building);
                data.append('image', formData.image);
    
                if (!_id) {
                    await addNewChild(data);
                } else {
                    await editChild(data, _id);
                }
                navigate('/list_all_children');
            } catch (error) {
                console.log(error);
            }
        }
    };
    


    return (
        <Form noValidate onSubmit={handleSubmit} action="list_all_children" method="post" encType="multipart/form-data" >
            <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="validationFormik101" className="position-relative">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        isInvalid={!!errors.fullName}
                    />
                    <Form.Control.Feedback type="invalid" tooltip>
                        {errors.fullName}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationFormik102" className="position-relative">
                    <Form.Label>Age</Form.Label>
                    <Form.Control
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        isInvalid={!!errors.age}
                    />
                    <Form.Control.Feedback type="invalid" tooltip>
                        {errors.age}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationFormikUsername2" className="position-relative">
                    <Form.Label>Level</Form.Label>
                    <Form.Select
                        aria-label="Select Level"
                        name="level"
                        value={formData.level}
                        onChange={handleChange}
                        isInvalid={!!errors.level}
                    >


                        <option value="">Select Level</option>
                        <option value="KG1">KG1</option>
                        <option value="KG2">KG2</option>
                        <option value="PreKG">PreKG</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid" tooltip>
                        {errors.level}
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="validationFormik103" className="position-relative">
                    <Form.Label>City</Form.Label>
                    <Form.Control
                        type="text"
                        name="address.city"
                        value={formData.address.city}
                        onChange={handleChange}
                        isInvalid={!!errors.city}
                    />
                    <Form.Control.Feedback type="invalid" tooltip>
                        {errors.city}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationFormik104" className="position-relative">
                    <Form.Label>Street</Form.Label>
                    <Form.Control
                        type="text"
                        name="address.street"
                        value={formData.address.street}
                        onChange={handleChange}
                        isInvalid={!!errors.street}
                    />
                    <Form.Control.Feedback type="invalid" tooltip>
                        {errors.street}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationFormik105" className="position-relative">
                    <Form.Label>Building</Form.Label>
                    <Form.Control
                        type="text"
                        name="address.building"
                        value={formData.address.building}
                        onChange={handleChange}
                        isInvalid={!!errors.building}
                    />
                    <Form.Control.Feedback type="invalid" tooltip>
                        {errors.building}
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>    

            <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="validationFormik106" className="position-relative">
                    <Form.Label>Image</Form.Label>
                    <Form.Control
                        type="file"
                        name="image"
                        onChange={handleChange}
                        accept="image/*"
                        isInvalid={!!errors.image}
                    />
                    <Form.Control.Feedback type="invalid" tooltip>
                        {errors.image}
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Button type="submit">Submit Child</Button>
        </Form>
    );
}

export default FormChild;
