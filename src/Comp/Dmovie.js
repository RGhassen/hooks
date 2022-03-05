import { useNavigate, useParams } from "react-router-dom"


const Dmovie =({movies})=>{
    const {id} = useParams()
    const navigate = useNavigate()
    const foundMovie = movies.find(movie=> movie.id == id)
    return(
        <div id="Dcard">
            <h1 className="desc">{foundMovie.title}</h1>
            <iframe width="560" height="315" src={foundMovie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <p className="desc">{foundMovie.description}</p>
            <button onClick={()=>navigate('/movies')}>return</button>
        </div>
    )
}
export default Dmovie