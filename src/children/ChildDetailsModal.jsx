import React, { useEffect, useState } from 'react';
import { Modal, Button, Card } from 'react-bootstrap';
import { getChildById } from '../api/ChildApi';

function ChildDetailsModal({ show, handleClose, child }) {
    const [childDetails, setChildDetails] = useState(null);

    useEffect(() => {
        const fetchChildData = async () => {
            try {
                const res = await getChildById(child._id)
                console.log(child._id)
                setChildDetails(res.data);
            } catch (error) {
                console.log(error); 
            }
        };
    
        if (child && child._id) {
            fetchChildData();
        }
    }, [child]);
        return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Child Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {childDetails ? (
                    <Card>
                        {/* Display the child's image */}
                        <Card.Img variant="top" src={`http://localhost:8080/images/${childDetails.Image}`} />
                        <Card.Body>
                            <Card.Title>{childDetails.fullName}</Card.Title>
                            <Card.Text>
                                <strong>Age:</strong> {childDetails.age} <br />
                                <strong>Level:</strong> {childDetails.level} <br />
                                <strong>City:</strong> {childDetails.address.city} <br />
                                <strong>Street:</strong> {childDetails.address.street} <br />
                                <strong>Building:</strong> {childDetails.address.building || 'N/A'} <br />
                                {/* <strong>Age less than 3:</strong> {childDetails.age < 3 ? 'Yes' : 'No'} */}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                ) : (
                    <p>Loading...</p>
                )}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ChildDetailsModal;
