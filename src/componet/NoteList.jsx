import React from 'react'
import Notes from './Notes';
import { connect } from 'react-redux';
import { getAllNotes } from '../actions/noteActions';




function NoteList(props) {
    return(
        <div>
            <h1 className='note_heading'>ALL NOTES</h1>
            {props.notesData.map((notes) => (
                <Notes notes={notes} delete={props.delete}
                updateNote = {props.updateNote}/>
            ))}
        </div>
    )
}
function mapStateToProps (state) {
    return {notesData:state.notes}
}
const mapDispatchToProps = {
    getAllNotes,
  };

export default connect(mapStateToProps, mapDispatchToProps)(NoteList);