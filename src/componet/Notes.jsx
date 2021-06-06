import React, { useState } from 'react'
import { connect } from 'react-redux';
import { Modal } from 'react-bootstrap';
import EditNotes from './EditNotes';
import { deleteNote} from '../actions/noteActions';


function Notes(props) {
    const [isModalVisible, setShowModal] = useState(false);


    function showModal() {
        setShowModal(true);
    }

    function hideModal() {
        setShowModal(false);
    }


    return (
        <div>
            <div className='row'>
                
                <div className='col-md-2'><span><h5 className='indicate' >Date:</h5></span> {props.notes.date} </div>

                
                <div className='col-md-2'> <span ><h5 className='indicate'>Title:</h5></span>{props.notes.title} </div>

                
                <div className='col-md-4'> <span><h5 className='indicate' >Note:</h5></span>{props.notes.notes} </div>
                <div className='col-md-2'>
                    <button className='edit' type='button' onClick={showModal}>Edit</button>
                </div>
                <div className='col-md-2'>
                    <button className='delete' type='button'
                    onClick={() => {
                        props.deleteNote(props.notes.id);
                    }}>Delete</button>
                </div>
            </div>
            <Modal show={isModalVisible} onHide={hideModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EditNotes
                        note={props.note}

                        hideModal={hideModal} />
                </Modal.Body>
            </Modal>
        </div>
    )

}

let mapDispatchToProps = {
    deleteNote
};

let mapStateToProps = () => {};

export default connect(mapStateToProps, mapDispatchToProps)(Notes);