import {Form, Row, Col, Button} from 'react-bootstrap';

function Receiving(){
    return (
       <div className="App">
        <h3>Receiving</h3>
        <Form>
          <Form.Group controlId="formLoc">
              <Row>
                <Col><Form.Label column>From Location:</Form.Label></Col>
                <Col><Form.Control size="" type="text" placeholder="From Location"/></Col>
              </Row>
              <Row>
                <Col><Form.Label column>Serial#:</Form.Label></Col>
                <Col><Form.Control type="text" placeholder="Serial#"/></Col>
              </Row>
              <Col>
                <Form.Label column>To Location:</Form.Label>
                <Form.Control type="text" placeholder="From Location"/>
              </Col>
          </Form.Group>
          <p></p>
          <Form.Group>
              <Col md="5">
                  <Button className="btn-primary">Post</Button>
              </Col>
          </Form.Group>
        </Form>
       </div>
      )
  }

export default Receiving;