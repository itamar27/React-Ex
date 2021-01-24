import React, { Component } from 'react';
import { Button } from '@material-ui/core';


class MovingsForm extends Component {

    constructor(props) {
        super(props);

        this.state =
        {
            id: "",
            date: "",
            name: "",
            city: ""

        }

        this.butttonForm = {
            width: "50%",
            height: "2.5%",
            padding: "7%",
            marginLeft: "25%",
            marginTop: "20px"
        };

        this.update = this.update.bind(this);
        this.save = this.save.bind(this);
        this.inputChange = this.inputChange.bind(this);
    }

    componentDidUpdate(prevProps) {

        if (this.props.updater !== prevProps.updater) {
            this.setState({
                id: this.props.updater.id,
                date: this.props.updater.date,
                name: this.props.updater.name,
                city: this.props.updater.city
            })
        }
    }

    save(event) {
        event.preventDefault();


        if (this.state.date === '' || this.state.city === '' || this.state.name === '') {
            alert("Pleae fill the form!")
            return;
        }

        if (this.props.edit)
            this.props.onUpdate(this.state);
        else
            this.props.onSave(this.state);

        this.setState({
            id: "",
            date: "",
            name: "",
            city: ""
        })
    }

    update(event) {
        event.preventDefault();


    }


    inputChange(event) {
        event.preventDefault();

        const inputName = event.target.name;
        const inputValue = event.target.value;

        this.setState({
            [inputName]: inputValue
        })
    }

    render() {
        return (
            <div className={"movingForm"}>
                <input type="date" onChange={this.inputChange} name="date" value={this.state.date}></input>
                <input type="text" placeholder={'Name'} onChange={this.inputChange} name="name" value={this.state.name}></input>
                <input type="text" placeholder={'City'} onChange={this.inputChange} name="city" value={this.state.city}></input>

                <Button onClick={this.save} variant="contained" color="secondary" style={this.butttonForm}>{this.props.edit ? `Update` : `Save`}</Button>
            </div>
        )
    }
}


export default MovingsForm;