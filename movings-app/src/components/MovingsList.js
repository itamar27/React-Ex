import React, { Component } from 'react';
import MovingItem from './MovingItem';
import { Table, TableBody, TableContainer } from "@material-ui/core";



class MovingsList extends Component {

    constructor(props) {
        super(props);

        this.forItem = this.forItem.bind(this);
    }


    forItem(item, index) {

        return <MovingItem key={item.id} onDelete={this.props.delete} onUpdate={this.props.edit}
            id={item.id} index={index + 1} date={item.date} name={item.name} address={item.city} />
    }

    render() {
        return (
            <TableContainer className={"movingTable"}>
                <Table>
                    <TableBody style={{ overflowY: 'scroll'}}>
                        {this.props.data.map(this.forItem)}
                    </TableBody>
                </Table>
            </TableContainer>
        )
    }
}

export default MovingsList;