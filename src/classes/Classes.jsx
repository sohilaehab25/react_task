import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CLasses(props) {
  

  return (
    <div className="col-sm-3 col-md-3 mb-3">
    <div className="card-container">
     
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Button variant="outline-dark">Go for more info</Button>
          </Card.Body>
        </Card>
    </div>
    </div>
  );
}

export default CLasses;
