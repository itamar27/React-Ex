import React, { Component } from 'react';
import MovingsList from './MovingsList';
import MovingsForm from './MovingsForm';
import data from './../data/mock.json'


class MovingApp extends Component {

    constructor(props) {

        super(props);

        this.state = {
            movings: [],
            updater: {
                id: "",
                date: "",
                name: "",
                city: ""
            },
            edit: false
        }

        this.delete = this.delete.bind(this);
        this.add = this.add.bind(this);
        this.update = this.update.bind(this);
        this.edit = this.edit.bind(this);
        this.nextId = this.nextId.bind(this);
    }

    componentDidMount() {
        this.setState({
            movings: data
        })
    }

    add({ id = null, date = null, name = null, city = null }) {

        this.setState(prevState => ({
            movings: [...prevState.movings, {
                id: id !== null ? id : this.nextId(prevState.movings),
                date: date,
                name: name,
                city: city
            }],
        }))
    }

    nextId(ideas = []) {
        let max = ideas.reduce((prev, curr) => prev.id > curr.id ? prev.id : curr.id, 0);
        return ++max;
    }

    update({ id = null, date = null, name = null, city = null }) {
        this.setState(prevState => ({
            edit: false,
            movings: prevState.movings.map(
                item => {
                    if (item.id === id) {
                        item.name = name
                        item.city = city
                        item.date = date
                    }
                    return item
                }
            )
        }
        ))
    }

    delete(id) {

        this.setState(prevState => ({
            movings: prevState.movings.filter(moving => moving.id !== id)
        }))
    }

    edit(id) {

        this.setState(prevState => ({
            edit: true,
            updater: prevState.movings.find(item => item.id === id)
        }))

    }

    render() {
        return (
            <div>
                <div className="main">
                    <div className="myContainer">
                        <MovingsList data={this.state.movings} delete={this.delete} edit={this.edit} />
                        <MovingsForm edit={this.state.edit} onUpdate={this.update} updater={this.state.updater} onSave={this.add} />
                    </div>
                </div>
                <div className="myTruck"></div>
            </div>
        )
    }

}


export default MovingApp;