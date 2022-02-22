import { Rating, Typography } from "@mui/material"
import { useState } from "react"
import { Button, Form, Modal } from "react-bootstrap"

const AddMovies =({handleAdd})=>{
    const [show,setShow] = useState(false)
    const [titleM,setTitleM] = useState('')
    const [descriptionM,setDescriptionM] = useState('')
    const [imageM,setImageM] = useState('')
    const [ratingM,setRatingM] = useState(0)
    const handelShow =()=> setShow(true)
    const handleClose =()=> setShow(false)
    return(
        <div id="addM">
            <Button variant="outline-success" onClick={handelShow}>Add Movie</Button>{' '}
                <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add a new Movie</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/*bootstrap modal*/}
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Movie Title</Form.Label>
                            <Form.Control type="text" placeholder="Enter The Movie Title" onChange={(e=>setTitleM(e.target.value))} />
                        </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Movie description</Form.Label>
                        <Form.Control type="text" placeholder="Enter description" onChange={(e=>setDescriptionM(e.target.value))}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Movie image</Form.Label>
                            <Form.Control type="text" placeholder="Enter The image LINK" onChange={(e=>setImageM(e.target.value))}/>
                        </Form.Group>
                        <Typography component="legend">Controlled</Typography>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Rating</Form.Label>
                            <br/>
                            <Rating onChange={(e)=> setRatingM(e.target.value)}/>
                        </Form.Group>
                    </Form>
                    {/*form in the body of the  modal */}
                </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{handleAdd({title: titleM, description : descriptionM, posterURL : imageM, rating : ratingM, id : Math.random()});handleClose()}}>Save changes</Button>
        </Modal.Footer>
      </Modal>
        </div>   )
}
export default AddMovies