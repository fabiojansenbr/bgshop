import React, { Component } from 'react';

class GameForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <form className='ui form' onSubmit={this.handleSubmit}>
                <div className='field'>
                    <label htmlFor='name'>Game Title</label>
                    <input
                        type='text'
                        id='name'
                        name='name'
                        placeholder='Full game title'
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                </div>
                <div className='field'>
                    <label htmlFor='description'>Game Description</label>
                    <textarea
                        type='text'
                        id='description'
                        name='description'
                        placeholder='Game Description'
                        value={this.state.description}
                        onChange={this.handleChange}
                    />
                </div>

                <button className='ui button' type='submit'>Create</button>
            </form>
        );
    }
}

export default GameForm;