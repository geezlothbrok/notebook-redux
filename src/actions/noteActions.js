import NoteList from "../componet/NoteList";

export function getAllNotes() {
    return (dispatch, state, { getFirestore }) => {
      const db = getFirestore();
      db.collection("notes")
        .get()
        .then((results) => {
          let notes = [];
          results.forEach((doc) => {
            notes.push(doc.data());
          });
  
          dispatch({
            type: "ADD_ALL_NOTES",
            payload: notes,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    };
  }

  export function addNewNotes(note) {
    return (dispatch, state, { getFirestore }) => {
      const db = getFirestore();
      db.collection('notes')
        .add(note)
        .then(() => {
          
          dispatch({
            type: 'ADD_NOTE',
            payload: note,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    };
  }

export  function editNote (id, upadtedNote) {
    return {
        type: 'EDIT_NOTE',
        payload: { id: id, upadtedNoteInfo: upadtedNote },
    }
}

export function deleteNote (id) {
    return {
        type: 'DELETE_NOTE',
        payload: id,
    }
}