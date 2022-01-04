import React,{useState,useEffect} from 'react'
import { Modal } from 'semantic-ui-react';

function AddModal({showModel,toggleShowModel,modalType}) {

    const [show, setShow] = useState(false);
    const [boardName,setBoardName] = useState("");
    const [todoName,setTodoName] = useState("");
    const [error,setError] = useState("");

    useEffect(() => {
      if(showModel)
        setShow(true);
    }, [toggleShowModel])

    const handleClose = () => setShow(false);
    const handleOpen = () => setShow(true);

    const actionModal = () => {
      if(modalType=="Beard"){
        if(!boardName || !todoName)
          setError("Kindly Fill All Particulars")
      } else {
        if(!todoName)
          setError("Kindly Fill All Particulars")
      }
         
    }

    return <Modal onClose={handleClose}
      onOpen={handleOpen}
      open={show} >
        <Modal.Content>
          <div className="cross-button" onClick={handleClose}>&times;</div>
          <p className="add-title"> Add {modalType} </p>
          { modalType ==="Board" && <input type="text" placeholder="Board Name" value={boardName} onChange={(e)=>setBoardName(e.target.value)} />}
          <input type="text" className="mt-2" placeholder="Todo Name" value={todoName} onChange={(e)=>setTodoName(e.target.value)} />
          <div className="error">{error}</div>
          <button onClick={actionModal}>Submit</button>
        </Modal.Content>
    </Modal>
}

export default AddModal
