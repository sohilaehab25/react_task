import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

function FormChild({ onAddChild,initialData }) {
    const [formData, setFormData] = useState(initialData || {
        fullName: '',
        age: '',
        level: '',
        city: '',
        street: '',
        building: '',
        image: '',
        age_less_than_3: false,
    });

    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validateForm(formData);
        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            onAddChild({ ...formData, id: Date.now() });
            resetForm();
        }
    };

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
        if (!data.city) {
            errors.city = 'City is required';
        }
        if (!data.street) {
            errors.street = 'Street is required';
        }
        if (!data.building) {
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
            city: '',
            street: '',
            building: '',
            image: '',
            age_less_than_3: false,
        });
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;
        setFormData({ ...formData, [name]: newValue });
    };

    return (
        <Form noValidate onSubmit={handleSubmit}>
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
                        <option value="Kg1">Kg1</option>
                        <option value="Kg2">Kg2</option>
                        <option value="PreKG1">PreKG1</option>
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
                        name="city"
                        value={formData.city}
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
                        name="street"
                        value={formData.street}
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
                        name="building"
                        value={formData.building}
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
                <Form.Group as={Col} md="4" controlId="validationFormik107" className="position-relative">
                    <Form.Check
                        type="checkbox"
                        name="age_less_than_3"
                        label="Age less than 3"
                        checked={formData.age_less_than_3}
                        onChange={handleChange}
                    />
                </Form.Group>
            </Row>
            <Button type="submit">Submit Child</Button>
        </Form>
    );
}

export default FormChild;
