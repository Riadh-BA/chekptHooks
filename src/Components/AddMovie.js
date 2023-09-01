import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function AddMovie({AddMovi}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [addtitle,setAddTitle]=useState("")
  const [addrate,setAddRate]=useState(0)
  const [adddescription,setAddDescription]=useState("")
  const [addposterUrl,setAddPosterUrl]=useState("")
  const [addtrailer,setAddTrailer]=useState("")

  const handleAddtitle=(e)=>{
    setAddTitle(e.target.value)
  }
  const handleAddrate=(e)=>{
    setAddRate(e.target.value)
  }
  const handleAdddescription=(e)=>{
    setAddDescription(e.target.value)
  }
 
  const handleAddposterurl=(e)=>{
    setAddPosterUrl(e.target.value)
  }
  const handleAddtrailer=(e)=>{
    setAddTrailer(e.target.value)
  }
  

  return (
    <>
      <Button className='buttonStyle' variant="primary" onClick={handleShow}>
        Add New Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Movie Title</Form.Label>
              <Form.Control
                type="text" 
                name='title'             
                autoFocus
                onChange={handleAddtitle}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Movie Rate</Form.Label>
              <Form.Control type='number' name='description' onChange={handleAddrate} />
              <Form.Label>Movie Description</Form.Label>
              <Form.Control type='text' name='description' onChange={handleAdddescription} />
              <Form.Label>Movie PosterUrl</Form.Label>
              <Form.Control type='text' name='description' onChange={handleAddposterurl}/>
              <Form.Label>Movie Trailer</Form.Label>
              <Form.Control type='text' name='description' onChange={handleAddtrailer} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className='buttonStyle' variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button className='buttonStyle' variant="primary" onClick={()=>(AddMovi({id:Math.random(),title:addtitle,description:adddescription,rate:addrate,posterUrl:addposterUrl,trailer:addtrailer}),handleClose())}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddMovie;