import React from 'react';
import RctItem from './rct-item';
import { Table } from 'react-bootstrap';

export default class RctList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                {/* <table className='table striped bordered hover size="sm" table-dark'> */}
                <Table responsive="sm" striped bordered hover size="sm" variant="dark">
                    <tbody>
                    <tr>
                        <td>PO</td>
                        <td>Item</td>
                        <td>To</td>
                        <td>Qty</td>
                    </tr>
                        {this.props.rctList.map((rctItem, i) => {
                            return(
                                <RctItem key={i} id={rctItem.id} rctID={i} {...rctItem} rctItem={rctItem} deleteTransaction={this.props.deleteTransaction} updateTransaction={this.props.updateTransaction}/>
                            )
                        })}
                    </tbody>
                </Table>
            </div>
        );
    }
}