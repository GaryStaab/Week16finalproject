import React from 'react';
import TransferItem from './transfer-item';
import { Table } from 'react-bootstrap';

export default class TransferList extends React.Component {
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
                        <td>From</td>
                        <td>Item</td>
                        <td>To</td>
                        <td>Qty</td>
                    </tr>
                        {this.props.transferList.map((transferItem, i) => {
                            return(
                                <TransferItem key={i} id={transferItem.id} transferID={i} {...transferItem} transferItem={transferItem} deleteTransaction={this.props.deleteTransaction} updateTransaction={this.props.updateTransaction}/>
                            )
                        })}
                    </tbody>
                </Table>
            </div>
        );
    }
}