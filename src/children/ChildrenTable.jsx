import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ChildDetailsModal from './ChildDetailsModal';
import { deleteChild, getAllChildren } from '../api/ChildApi';

function ChildrenTable() {
    const [children, setChildren] = useState([]);
    const [show, setShow] = useState(false);
    const [selectedChild, setSelectedChild] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getAllChildren();
                setChildren(res.data);
            } catch (error) {
                console.error(error); // Log any errors that occur during the request
            }
        };

        fetchData();
    }, []);

    const handleShowCard = (child) => {
        setSelectedChild(child);
        setShow(true);
    };

    const handleCloseCard = () => {
        setShow(false);
        setSelectedChild(null);
    };

    const deleteHandler = async (_id) => {
      const response =   await  deleteChild(_id)
        console.log(response.data);
        const newList = children.filter( child => child._id !== _id )
        setChildren( [ ...newList ] )
    };

    return (
        <div className='mt-4 bg-light p-5 w-30 h-30'>
            <Link to={`/add_child`}>
                <i className="bi bi-person-plus fs-1 text-primary m-2"></i>
            </Link>
            <Table striped bordered hover size="lg">
                <thead>
                    <tr className='text-center'>
                        <th>ID</th>
                        <th>Full Name</th>
                        <th>Age</th>
                        <th>Level</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {children.map((child) => (
                        <tr className="text-center" key={child.child_id}>
                            <td>{child.child_id}</td>
                            <td>{child.fullName}</td>
                            <td>{child.age}</td>
                            <td>{child.level}</td>
                            <td className='text-center'>
                                <i
                                    className="bi bi-eye fs-2 text-warning mx-2"
                                    onClick={() => handleShowCard(child)}
                                ></i>
                                <Link to={`/child_update/${child.child_id}`}>
                                    <i className="bi bi-pencil-square fs-2 text-dark mx-2"></i>
                                </Link>
                                <i onClick={() => deleteHandler(child._id)}
 
                                    className="bi bi-person-x fs-2 text-danger mx-2"
                                ></i>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            {selectedChild && (
                <ChildDetailsModal
                    show={show}
                    handleClose={handleCloseCard}
                    child={selectedChild}
                />
            )}
        </div>
    );
}

export default ChildrenTable;
