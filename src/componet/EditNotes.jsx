import React, { useState } from 'react';
import {connect} from 'react-redux';
import { editNote } from '../actions/noteActions';

function EditNotes (props) {
    const [state, setState] = useState({
        date: props.notes.date,
        title: props.notes.title,
        notes: props.notes.notes,
        
    });

     function handleOnChange (event) {
        setState ({
            ...state,
            [event.target.name] : event.target.value,
        });
        console.log(state);
    };

     function handleSubmit () {
        
        let notes = { ...state, id: props.notes.id };
        props.editNote(props.notes.id, notes);
        props.hideModal();
    };

        return (
            <div>
                
                <div className = 'note-container'>
                    <h1 className ='note-handling'>Create Note</h1>

                    <form className ='form'>
                        <h4>Date</h4>
                        <input type='date' name ='date' value= { state.date } onChange= {handleOnChange}></input>
                        <br></br>

                        <h4>Title</h4>
                        <input type ='text' name='title' placeholder ='Enter Note Title' value={ state.title } onChange= {handleOnChange}></input>
                        <br></br>

                            <h4>Notes</h4>
                        <textarea rows ='10' col='28' name='notes' placeholder ='Enter Notes' value={ state.notes } onChange= {handleOnChange}></textarea>
                        <br></br>

                        <button type='button' onClick= { handleSubmit }>Notes</button>
                    </form>
                </div>

            </div>
        )

}

let mapDispatchToProps = {
    editNote,
};

let mapStateToProps = () => {};

export default connect(mapStateToProps, mapDispatchToProps) (EditNotes);