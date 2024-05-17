import React from 'react';
import { useNavigate } from 'react-router-dom';
import FormChild from './FormChild';

function AddChildForm({ onAddChild, initialData }) {
    const navigate = useNavigate();
    const baseUrl = "mongodb://127.0.0.1:27017/nurserysystem"

    const handleAddChild = (newChild) => {
        onAddChild(newChild);
        navigate('/list_all_children');
    };

    return (
        <FormChild onAddChild={handleAddChild} initialData={initialData} />
    );
}
export default AddChildForm;
