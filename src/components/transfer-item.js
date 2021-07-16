import React from 'react';
import { Button, ModalDialog } from 'react-bootstrap';
import TransferUpdate from "./transfer-item-update-modal";


export default class TransferItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleClickDelete = this.handleClickDelete.bind(this);
    }
    handleClickDelete(e) {
        this.props.deleteTransaction(this.props.id);
        e.preventDefault();
    }

    handleClickUpdate(e) {
        e.preventDefault();
    }

    render() {
        return (
            <tr>
                <td width={'20%'}>{this.props.Data.fromLocation}</td>
                <td width={'20%'}>{this.props.Data.item}</td>
                <td width={'20%'}>{this.props.Data.toLocation}</td>
                <td width={'20%'}>{this.props.Data.quantity}</td>
                <td width={'10%'}><TransferUpdate id={this.props.id} data={this.props.Data} updateTransaction={this.props.updateTransaction}/></td>
                <td width={'10%'}><Button size="sm" onClick={this.handleClickDelete}>Delete</Button></td>
            </tr>
        );
    }
}