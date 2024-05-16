import React from 'react';
import { Button, Table } from 'react-bootstrap';
// import ListChildren from './ListChildren';

function ChildrenTable({ListChildren,onDelete }) {
    return (
      <div className='mt-4 bg-light p-5'>

        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>#</th>
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
                {ListChildren.map((ListChildren, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{ListChildren.fullName}</td>
                        <td>{ListChildren.age}</td>
                        <td>{ListChildren.level}</td>
                        <td>{ListChildren.city}</td>
                        <td>{ListChildren.street}</td>
                        <td>{ListChildren.building}</td>
                        <td>{ListChildren.image}</td>
                        <td>{ListChildren.age_less_than_3 ? 'Yes' : 'No'}</td>
                        <td>
                            <Button variant="danger" onClick={() => onDelete(index)}>
                                Delete
                            </Button>
                        </td>
                        
                    </tr>
                ))}
            </tbody>
        </Table>
        </div>
    );
}

export default ChildrenTable;
