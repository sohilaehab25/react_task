import React from 'react';
import ChildrenTable from './ChildrenTable';

function ListChildren({ childrenList, onDeleteChild }) {
    return (
        <div>
            <ChildrenTable childrenList={childrenList} onDelete={onDeleteChild} />
        </div>
    );
}

export default ListChildren;
