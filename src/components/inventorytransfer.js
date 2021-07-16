import React from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import { connect } from "react-redux";
import {
  inventoryTransferInit,
  inventoryTransferSave,
  inventoryTransferSubmit
} from "../redux/actions";
import CRUDApi from "../rest/crudApi";
import TransferList from "./transfer-list";


// function handleChange ( e ) {
//   let screenValue = e.target.value;
//   let screenInt = Number.parseInt( screenValue);
//   if ( !Number.isNaN(screenInt) ) {
//     screenValue = screenInt;
//   }
//   holdData = {...holdData, [e.target.id] : screenValue};
//   // console.log(holdData);
// }

// function handleSubmit ( e ) {
//   e.preventDefault();
//   console.log(holdData);
// }

class InventoryTransfer extends React.Component {
  constructor(props) {
    super(props);
    const { screenData, saveScreen, submitScreen, initHistory } = this.props;
    // initHistory();
    this.handleClick = this.handleClick.bind(this);
    this.deleteTransaction = this.deleteTransaction.bind(this);
  }

  getHistory = async () => {
    let resp = await CRUDApi.crudGet("invTrans");
    await this.props.dispatch(inventoryTransferInit({ history: resp }));
  }

  postTransaction = async () => {
    // remove history on put of new entry
    const screenPut = { ...this.props.screenData };
    console.log(screenPut);
    delete screenPut['history'];
    await CRUDApi.crudPost("invTrans", screenPut);
    let resp = await CRUDApi.crudGet("invTrans");
    await this.props.dispatch(inventoryTransferInit({ history: resp }));
  }

  deleteTransaction = async (id) => {
    await CRUDApi.crudDelete("invTrans", id);
    let resp = await CRUDApi.crudGet("invTrans");
    await this.props.dispatch(inventoryTransferInit({ history: resp }));
  }

  updateTransaction = async (id, data) => {
    await console.log ("PUT");
    await console.log(id);
    await console.log(data);
    await CRUDApi.crudPut("invTrans", id, data);
    let resp = await CRUDApi.crudGet("invTrans");
    await this.props.dispatch(inventoryTransferInit({ history: resp }));
  }

  componentDidMount() {
    this.getHistory()
  }

  handleClick(e) {
    this.postTransaction();
    e.preventDefault();
  }

  render() {
    const { screenData, saveScreen, submitScreen } = this.props;
    return (
      <>
        <h3>Inventory Transfer</h3>
        <Form>
          <Form.Group>
            <Form.Row>
              <Col>
                <Form.Label column>From Location:</Form.Label>
                <Form.Control type="text" value={screenData.fromLocation} placeholder="From Location" id="fromLocation" onChange={saveScreen} />
              </Col>
              <Col>
                <Form.Label column>Item:</Form.Label>
                <Form.Control type="text" value={screenData.item} placeholder="Item" id="item" onChange={saveScreen} />
              </Col>
              <Col>
                <Form.Label column>To Location:</Form.Label>
                <Form.Control type="text" value={screenData.toLocation} placeholder="To Location" id="toLocation" onChange={saveScreen} />
              </Col>
              <Col>
                <Form.Label column>Quantity:</Form.Label>
                <Form.Control type="numeric" value={screenData.quantity} placeholder="Qty" id="quantity" onChange={saveScreen} />
              </Col>
            </Form.Row>
          </Form.Group>
          <p></p>
          <Form.Group>
            <Col md="5">
              <Button className="btn-primary" onClick={this.handleClick}>Post</Button>
            </Col>
          </Form.Group>
          <p></p>
          <Form.Group>
            <TransferList transferList={screenData.history} deleteTransaction={this.deleteTransaction} updateTransaction={this.updateTransaction} />
          </Form.Group>
        </Form>
      </>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    saveScreen: (event) => dispatch(inventoryTransferSave({ e: event })),
    submitScreen: (event) => dispatch(inventoryTransferSubmit({ e: event })),
    initHistory: (history) => dispatch(inventoryTransferInit({ history: history })),
    dispatch
  };
};

const mapStateToProps = state => ({
  screenData: state.inventoryTransferReducer
});

export default connect(mapStateToProps, mapDispatchToProps)(InventoryTransfer);