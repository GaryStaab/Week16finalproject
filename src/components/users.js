import {Form, FormControl, Col} from 'react-bootstrap';

function Users(){
    return (
      <Form>
        <Form.Group>
          <Form.Row>
            <Col>
              <Form.Label column>User Name:</Form.Label>
              <Form.Control type="text" placeholder="Enter User Name"/>
            </Col>
            <Col>
              <Form.Label column>Password:</Form.Label>
              <Form.Control type="password" placeholder="Password"/>
            </Col>
          </Form.Row>
        </Form.Group>
      </Form>
    )
  }

export default Users;