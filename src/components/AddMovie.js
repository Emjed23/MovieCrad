import React from "react";
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import { Button} from 'react-bootstrap';


  const AddMovie = ({ add}) => {

  const [show, setShow] = useState(false);
  const toggle = () => {
    setShow(!show);
  };
   
  const AddMovie = () => {
    const newMovie={
      title,
      description,
      posterUrl,
      rate
    }
    add(newMovie);
    toggle();

  };
  const [title, setTitle] = useState("")
  const[description,setDescription]=useState("")
  const[posterUrl,setPosterUrl]=useState("")
  const[ rate,setRate]=useState("")
  return (
    <div className="btn"> 
      <Button onClick={toggle}>
        Add Movie
      </Button>
      <Modal show={show} onHide={toggle}>
        <Modal.Header>
          <Modal.Title>Add New Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>title</Form.Label>
              <Form.Control
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>description</Form.Label>
              <Form.Control
                onChange={(e) => setDescription(e.target.value)}
                type="text"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label> posterUrl</Form.Label>
              <Form.Control
                onChange={(e) => setPosterUrl(e.target.value)}
                type="text"
                autoFocus
              />
               </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label> rate</Form.Label>
              <Form.Control
                onChange={(e) => setRate(e.target.value)}
                type="text"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={toggle}>
            Close
          </Button>
          <Button variant="primary" onClick={AddMovie}>
            Add Movie
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
  }
export default AddMovie