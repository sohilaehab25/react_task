import React from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ChildrenTable({ childrenList, onDelete }) {
    return (
        <div className='mt-4 bg-light p-5 w-30 h-30'>
            <Link to={`/add_child`}>
                <i className="bi bi-person-plus fs-1 text-primary m-2"></i>
            </Link>
            <Table striped bordered hover size="lg">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Full Name</th>
                        <th>Age</th>
                        <th>Level</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {childrenList.map((child, id) => (
                        <tr key={id}>
                            <td>{child.id}</td>
                            <td>{child.fullName}</td>
                            <td>{child.age}</td>
                            <td>{child.level}</td>
                            <td>
                                <Link to={`/child_info/${child.id}`}>
                                    <i className="bi bi-eye fs-2 text-warning mx-2"></i>
                                </Link>
                                <Link to={`/child_update/${child.id}`}>
                                <i className="bi bi-pencil-square fs-2 text-dark mx-2"></i>
                                </Link>
                                <i className="bi bi-person-x fs-2 text-danger mx-2" onClick={() => onDelete(id)}></i>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default ChildrenTable;
