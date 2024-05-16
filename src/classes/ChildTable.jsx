import React from 'react';
import Table from 'react-bootstrap/Table';
import ListChildren from '../children/ListChildren';

function ChildrenTable({ ListChildren }) {
    return (
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>Full Name</th>
                    <th>Age</th>
                    <th>Level</th>
                    <th>City</th>
                    <th>Street</th>
                    <th>Building</th>
                    <th>Image</th>
                    <th>Age less than 3</th>
                </tr>
            </thead>
            <tbody>
                {ListChildren.map((child, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{child.fullName}</td>
                        <td>{child.age}</td>
                        <td>{child.level}</td>
                        <td>{child.city}</td>
                        <td>{child.street}</td>
                        <td>{child.building}</td>
                        <td>{child.image}</td>
                        <td>{child.age_less_than_3 ? 'Yes' : 'No'}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}

export default ChildrenTable;
