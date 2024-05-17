import React from 'react';
import { useParams } from 'react-router-dom';
import AddChildForm from './AddChildForm';
import ListChildren from './ListChildren';

function UpdateChildForm() {
    const { id } = useParams();

    // Fetch child data based on id from childrenList
    const childToUpdate = ListChildren.find(child => child.id === parseInt(id));

    return <AddChildForm initialData={childToUpdate} />;
}

export default UpdateChildForm;
