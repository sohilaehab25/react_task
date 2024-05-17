// ChildDetailsModal.js
import React from 'react';
import { Modal, Button, Card } from 'react-bootstrap';

function ChildDetailsModal({ show, handleClose, child }) {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Child Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {child && (
                    <Card>
                        <Card.Img variant="top" src={child.image} />
                        <Card.Body>
                            <Card.Title>{child.fullName}</Card.Title>
                            <Card.Text>
                                <strong>Age:</strong> {child.age} <br />
                                <strong>Level:</strong> {child.level} <br />
                                <strong>City:</strong> {child.city} <br />
                                <strong>Street:</strong> {child.street} <br />
                                <strong>Building:</strong> {child.building} <br />
                                <strong>Age less than 3:</strong> {child.age_less_than_3 ? 'Yes' : 'No'}
                            </Card.Text>
                        </Card.Body>
                    </Card>
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
