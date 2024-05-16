import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function TeacherInfo(props) {
  

  return (
    <div className=" col-sm-9 col-md-6 col-lg-4 mb-3">
    <div className="card-container">
     
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={props.image} />
          <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Text>{props.desc}</Card.Text>
            <Button variant="outline-dark">Go for more info</Button>
          </Card.Body>
        </Card>
    </div>
    </div>
  );
}

export default TeacherInfo;
