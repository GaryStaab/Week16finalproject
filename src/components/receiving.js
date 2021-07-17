import React from 'react';
import { Form, Col, Row, Button } from 'react-bootstrap';
import { connect } from "react-redux";
import {
  rctInit,
  rctSave,
  rctSubmit
} from "../redux/actions";
import CRUDApi from "../rest/crudApi";
import RctList from "./rct-list";

class Receiving extends React.Component {
  constructor(props) {
    super(props);
    const { screenData, saveScreen, submitScreen, initHistory } = this.props;
    // initHistory();
    this.handleClick = this.handleClick.bind(this);
    this.deleteTransaction = this.deleteTransaction.bind(this);
  }

  getHistory = async () => {
    let resp = await CRUDApi.crudGet("rct");
    await this.props.dispatch(rctInit({ history: resp }));
  }

  postTransaction = async () => {
    // remove history on put of new entry
    const screenPut = { ...this.props.rctData };
    console.log(screenPut);
    delete screenPut['history'];
    await CRUDApi.crudPost("rct", screenPut);
    let resp = await CRUDApi.crudGet("rct");
    await this.props.dispatch(rctInit({ history: resp }));
  }

  deleteTransaction = async (id) => {
    await CRUDApi.crudDelete("invTrans", id);
    let resp = await CRUDApi.crudGet("rct");
    await this.props.dispatch(rctInit({ history: resp }));
  }

  updateTransaction = async (id, data) => {
    await console.log("PUT");
    await console.log(id);
    await console.log(data);
    await CRUDApi.crudPut("rct", id, data);
    let resp = await CRUDApi.crudGet("rct");
    await this.props.dispatch(rctInit({ history: resp }));
  }

  componentDidMount() {
    this.getHistory()
  }

  handleClick(e) {
    this.postTransaction();
    e.preventDefault();
  }

  render() {
    const { rctData, saveScreen, submitScreen } = this.props;
    return (
      <>
        <h3>PO Receipt</h3>
        <Form>
          <Form.Group>
            <Row>
              <Col xs="4"><Form.Label size="sm" >PO Num:</Form.Label></Col>
              <Col xs="8"><Form.Control type="text" value={rctData.poNum} placeholder="From Location" id="poNum" onChange={saveScreen} size="sm" /></Col>
            </Row>
            <Row>
              <Col xs="4"><Form.Label size="sm" >Item:</Form.Label></Col>
              <Col xs="8"><Form.Control type="text" value={rctData.item} placeholder="Item" id="item" onChange={saveScreen} size="sm" /></Col>
            </Row>
            <Row>
              <Col xs="4"><Form.Label size="sm" >To Loc:</Form.Label></Col>
              <Col xs="8"><Form.Control type="text" value={rctData.toLocation} placeholder="To Location" id="toLocation" onChange={saveScreen} size="sm" /></Col>
            </Row>
            <Row>
              <Col xs="4"><Form.Label size="sm" >Quantity:</Form.Label></Col>
              <Col xs="8"><Form.Control type="numeric" value={rctData.quantity} placeholder="Qty" id="quantity" onChange={saveScreen} size="sm" /></Col>
            </Row>
          </Form.Group>
          <p></p>
          <Form.Group>
            <Col md="5">
              <Button className="btn-primary" onClick={this.handleClick}>Receive</Button>
            </Col>
          </Form.Group>
          <p></p>
          <Form.Group>
            <RctList rctList={rctData.history} deleteTransaction={this.deleteTransaction} updateTransaction={this.updateTransaction} />
          </Form.Group>
        </Form>
      </>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    saveScreen: (event) => dispatch(rctSave({ e: event })),
    submitScreen: (event) => dispatch(rctSubmit({ e: event })),
    initHistory: (history) => dispatch(rctInit({ history: history })),
    dispatch
  };
};

const mapStateToProps = state => ({
  rctData: state.receiveReducer
});

export default connect(mapStateToProps, mapDispatchToProps)(Receiving);