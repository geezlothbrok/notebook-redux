
import NewNotes from '../componet/NewNotes';
import NoteList from '../componet/NoteList';
import {useState} from 'react';
import { logout } from '../actions/authActions';
import { connect } from 'react-redux';



function Dashboard(props) {

  const [notes, setUsers]= useState([]);

  function addNewNotes (note) {
    setUsers([...notes, note]);  
  }

  function handleLogout() {
    props.logout();
  }

  return (
    <div>
      <div className ='container'>
        <h3 className='head_Nav'>NoteBook</h3 >
        
          <div className ='col-md-4'>
            <NewNotes />
          </div>
          <button type= 'button' onClick={handleLogout}>Logout</button>
        
        <div className ='col-md-8'>
          <NoteList />
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = { logout };

export default connect(null, mapDispatchToProps) (Dashboard);
