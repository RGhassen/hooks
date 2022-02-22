import { Rating } from "@mui/material"
import { Button, Card } from "react-bootstrap"
import ShowMoreText from "react-show-more-text"

const CardMovies =({movie ,handleDelete})=>{
    return(
        <div id="cardContainer">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={movie.posterURL} />
                    <Card.Body>
                        <Card.Title>{movie.title}</Card.Title>
                        <Card.Text>
                            <ShowMoreText lines={4} more="More" less="Less" className='showMore'>
                                {movie.description}
                            </ShowMoreText> 
                        </Card.Text>
                            <Rating  value={movie.rating} readOnly />
                    </Card.Body>
                    <Button onClick={()=>handleDelete(movie.id)} variant="outline-danger">Delete</Button>{' '}
                    <Button variant="outline-primary">Edit</Button>{' '}

            </Card>
        </div>
    )
}
export default CardMovies