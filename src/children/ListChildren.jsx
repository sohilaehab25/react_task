import React, { useState } from 'react';
import  FormChild from './FormChild'
import ChildrenTable from './ChildrenTable';

function ListChildren() {
    const [ListChildren, setChildren] = useState([]);

    const handleDelete = (index) => {
        setChildren((prevChildren) => prevChildren.filter((_, i) => i !== index));
    };

    const handleAddChild = (child) => {
        setChildren((prevChildren) => [...prevChildren, child]);
    };


    return (
        <>
            <FormChild ListChildren={ListChildren} setChild={handleAddChild} />
            <ChildrenTable ListChildren={ListChildren} onDelete={handleDelete} />
        </>
    );
}

export default ListChildren;
