import { Rating } from "@mui/material"
import {  Card } from "react-bootstrap"
import { Link } from "react-router-dom"
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
                    <Link to={`/movies/${movie.id}`}><h2>See more</h2></Link>

            </Card>
        </div>
    )
}
export default CardMovies