import React, { Component } from 'react';

class GameForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange(e) {
        this.setState({ name: e.target.value });
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
                        placeholder='Full game title'
                        value={this.state.name}
                        onChange={this.handleNameChange}
                    />
                </div>

                <button className='ui button' type='submit'>Create</button>
            </form>
        );
    }
}

export default GameForm;