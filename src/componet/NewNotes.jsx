import React, { Component } from 'react';
import { addNewNotes } from '../actions/noteActions'
import {connect} from 'react-redux';

class NewNotes extends Component {
    constructor(props) {
        super(props)

        this.state = {
            date: "",
            title: "",
            notes: "",
        };
    }

    handleOnChange =(event) => {
        this.setState ({
            [event.target.name] : event.target.value,
        });
    };

    handleSubmit =() => {
        

        this.props.addNewNotes (this.state);

        let noteId= 10000 + Math.random() * 100000;
        let notes = { ...this.state, id: noteId};
        this.props.addNewNotes(notes);
    };
    render() {
        return (
            <div>
                
                <div className = 'note-container'>
                    <h1 className ='note-handling'>Create Note</h1>

                    <form className ='form'>
                        <h4>Date</h4>
                        <input type='date' name ='date' value= { this.state.date } onChange= {this.handleOnChange}></input>
                        <br></br>

                        <h4>Title</h4>
                        <input type ='text' name='title' placeholder ='Enter Note Title' value={ this.state.title } onChange= {this.handleOnChange}></input>
                        <br></br>

                            <h4>Notes</h4>
                        <textarea rows ='10' col='28' name='notes' placeholder ='Enter Notes' value={ this.state.notes } onChange= {this.handleOnChange}></textarea>
                        <br></br>

                        <button type='button' onClick= { this.handleSubmit }>Notes</button>
                    </form>
                </div>

            </div>
        )
    }
}

const mapDispatchToProps = { addNewNotes: addNewNotes }

export default connect (null, mapDispatchToProps) (NewNotes);