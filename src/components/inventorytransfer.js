import React from 'react';
import { Form, Col, Row, Button, Dropdown, DropdownButton } from 'react-bootstrap';
import { connect } from "react-redux";
import {
  inventoryTransferInit,
  inventoryTransferSave,
  inventoryTransferSubmit,
  inventoryTransferLookupItem
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
    let itemList = await CRUDApi.crudGet("item");
    await console.log(itemList);
    await this.props.dispatch(inventoryTransferInit({ history: resp, items: itemList }));
  }

  postTransaction = async () => {
    // remove history on put of new entry
    const screenPut = { ...this.props.screenData };
    console.log(screenPut);
    delete screenPut['history'];
    delete screenPut['items'];
    await CRUDApi.crudPost("invTrans", screenPut);
    let resp = await CRUDApi.crudGet("invTrans");
    let itemList = await CRUDApi.crudGet("item");
    await this.props.dispatch(inventoryTransferInit({ history: resp, items: itemList }));
  }

  deleteTransaction = async (id) => {
    await CRUDApi.crudDelete("invTrans", id);
    let resp = await CRUDApi.crudGet("invTrans");
    let itemList = await CRUDApi.crudGet("item");
    await this.props.dispatch(inventoryTransferInit({ history: resp, items: itemList }));
  }

  updateTransaction = async (id, data) => {
    await console.log("PUT");
    await console.log(id);
    await console.log(data);
    await CRUDApi.crudPut("invTrans", id, data);
    let resp = await CRUDApi.crudGet("invTrans");
    let itemList = await CRUDApi.crudGet("item");
    await this.props.dispatch(inventoryTransferInit({ history: resp, items: itemList }));
  }

  componentDidMount() {
    this.getHistory()
  }

  handleClick(e) {
    this.postTransaction();
    e.preventDefault();
  }

  render() {
    const { screenData, saveScreen, submitScreen, lookupItem } = this.props;
    console.log(screenData.items);
    console.log(screenData.history);
    return (
      <>
        <h3>Inventory Transfer</h3>
        <Form>
          <Form.Group>
            <Row>
              <Col xs="3"><Form.Label size="sm" >From Loc:</Form.Label></Col>
              <Col xs="9"><Form.Control type="text" value={screenData.fromLocation} placeholder="From Location" id="fromLocation" onChange={saveScreen} size="sm" /></Col>
            </Row>
            <Row>
            </Row>
            <Row>
              <Col xs="3"><Form.Label size="sm" >Item:</Form.Label></Col>
              <Col xs="6"><Form.Control type="text" value={screenData.item} placeholder="Item" id="item" onChange={saveScreen} size="sm" /></Col>
              <Col xs="3">
                <DropdownButton alignRight title="Lookup" id="dropdown-menu-align-right" onSelect={lookupItem} >
                  {screenData.items.map((item, i) => {
                    return (
                      <Dropdown.Item key={i} eventKey={item.Data.item}>{item.Data.item}</Dropdown.Item>
                    )
                  })}
                </DropdownButton>
              </Col>
            </Row>
            <Row>
              <Col xs="3"><Form.Label size="sm" >To Loc:</Form.Label></Col>
              <Col xs="9"><Form.Control type="text" value={screenData.toLocation} placeholder="To Location" id="toLocation" onChange={saveScreen} size="sm" /></Col>
            </Row>
            <Row>
              <Col xs="3"><Form.Label size="sm" >Quantity:</Form.Label></Col>
              <Col xs="9"><Form.Control type="numeric" value={screenData.quantity} placeholder="Qty" id="quantity" onChange={saveScreen} size="sm" /></Col>
            </Row>
          </Form.Group>
          <p></p>
          <p></p>
          <Form.Group>
            <Col md="5">
              <Button className="btn-primary" onClick={this.handleClick}>Transfer</Button>
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
    lookupItem: (event) => dispatch(inventoryTransferLookupItem({ e: event })),
    submitScreen: (event) => dispatch(inventoryTransferSubmit({ e: event })),
    initHistory: (history) => dispatch(inventoryTransferInit({ history: history })),
    dispatch
  };
};

const mapStateToProps = state => ({
  screenData: state.inventoryTransferReducer
});

export default connect(mapStateToProps, mapDispatchToProps)(InventoryTransfer);