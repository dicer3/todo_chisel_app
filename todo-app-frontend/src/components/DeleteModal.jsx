import React,{useEffect,useState} from 'react'
import { Modal } from 'semantic-ui-react';

function DeleteModal({showModel,toggleShowModel,modalType}) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleOpen = () => setShow(true);

    useEffect(() => {
        if(showModel)
          setShow(true);
      }, [toggleShowModel])

    return <Modal onClose={handleClose}
        onOpen={handleOpen}
        open={show} >
        <Modal.Content>
            <div className="cross-button" onClick={handleClose}>&times;</div>
            <p className="add-title">are you sure you want to delete current {modalType}</p>
            <div className="d-flex ">
                <button>Yes</button>
                <button onClick={handleClose}>No</button>
            </div>
        </Modal.Content>
    </Modal>
}

export default DeleteModal
