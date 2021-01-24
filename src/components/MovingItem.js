import React, { Component } from 'react';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { TableRow, TableCell, Fab } from "@material-ui/core";

class MovingItem extends Component {

    constructor(props) {
        super(props);

        this.buttonStyle = {
            marginRight: '11px'
        }

        this.cellStyle = {
            borderBottom: 'none',
            fontSize : '60%'
        }

        this.buttonCellStyle = {
            padding: '4%',
            display: 'flex',
            flexFlow: 'row nowrap',
            justifyContent: 'space-between',
            borderBottom: 'none'
        }


        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
    }

    update() {

        this.props.onUpdate(this.props.id);
    }

    delete() {
        this.props.onDelete(this.props.id);
    }


    render() {

        return (

            <TableRow>
                <TableCell style={this.cellStyle}>{this.props.index}</TableCell>
                <TableCell style={this.cellStyle}>{this.props.date}</TableCell>
                <TableCell style={this.cellStyle}>{this.props.name}</TableCell>
                <TableCell style={this.cellStyle}>{this.props.address}</TableCell>
                <TableCell style={this.buttonCellStyle}>
                    <Fab onClick={this.update} size={'small'} color="secondary" style={{marginRight: "13px"}}>
                        <EditIcon />
                    </Fab>
                    <Fab onClick={this.delete} size={"small"} color="secondary">
                        <DeleteIcon />
                    </Fab>
                </TableCell>
            </TableRow >
        )
    }

}


export default MovingItem;