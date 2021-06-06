import react from 'react'
import Notes from './Notes';
import { connect } from 'react-redux';



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

export default connect(mapStateToProps, {})(NoteList);