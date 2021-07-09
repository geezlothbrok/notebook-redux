
import NewNotes from '../componet/NewNotes';
import NoteList from '../componet/NoteList';
import {useState} from 'react';

function App() {

  const [notes, setUsers]= useState([]);

  function addNewNotes (note) {
    setUsers([...notes, note]);  
  }

  return (
    <div>
      <div className ='container'>
        <h3 className='head_Nav'>NoteBook</h3 >
        
          <div className ='col-md-4'>
            <NewNotes />
          </div>
        
        <div className ='col-md-8'>
          <NoteList />
        </div>
      </div>
    </div>
  );
}

export default App;
