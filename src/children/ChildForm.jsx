import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import * as formik from 'formik';
import * as yup from 'yup';

function FormChild() {
    const { Formik } = formik;
  
    const schema = yup.object().shape({
      fullName: yup.string().required('Full Name is required'),
      age: yup.number().required('Age is required'),
      level: yup.string().required('Level is required'),
      city: yup.string().required('City is required'),
      street: yup.string().required('Street is required'),
      building: yup.string().required('Building is required'),
      Image: yup.string().required('Image is required'),
      age_less_than_3: yup.boolean().oneOf([true], 'Age should be less than 3'),
    });
  
    return (
      <Formik
        validationSchema={schema}
        onSubmit={console.log}
        initialValues={{
          fullName: '',
          age: '',
          level: '',
          city: '',
          street: '',
          building: '',
          Image: '',
          age_less_than_3: false,
        }}
      >
        {({ handleSubmit, handleChange, values, touched, errors }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="validationFormik101" className="position-relative">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  name="fullName"
                  value={values.fullName}
                  onChange={handleChange}
                  isValid={touched.fullName && !errors.fullName}
                  isInvalid={touched.fullName && !!errors.fullName}
                />
                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.fullName}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationFormik102" className="position-relative">
                <Form.Label>Age</Form.Label>
                <Form.Control
                  type="number"
                  name="age"
                  value={values.age}
                  onChange={handleChange}
                  isValid={touched.age && !errors.age}
                  isInvalid={touched.age && !!errors.age}
                />
                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.age}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationFormikUsername2" className="position-relative">
                <Form.Label>Level</Form.Label>
                <Form.Select
                  aria-label="Select Level"
                  name="level"
                  value={values.level}
                  onChange={handleChange}
                  isValid={touched.level && !errors.level}
                  isInvalid={touched.level && !!errors.level}
                >
                  <option value="">Select Level</option>
                  <option value="Kg1">Kg1</option>
                  <option value="Kg2">Kg2</option>
                  <option value="PreKG1">PreKG1</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.level}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            {/* Other form fields */}
            <Button type="submit">Submit Child</Button>
          </Form>
        )}
      </Formik>
    );
  }
  
  export default FormChild;