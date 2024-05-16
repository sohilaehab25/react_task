import React from 'react';
import Card from 'react-bootstrap/Card';
import '../css/footer.css'
function Footer() {
    return (
        <div className='footerStyle' >
          <Card.Body className='text-center'>
            <Card.Title>Bye Bye</Card.Title>
            <Card.Text>
              With our love and support
            </Card.Text>
          </Card.Body>
        </div>
      );
}

export default Footer;
