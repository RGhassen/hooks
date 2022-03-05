import { Link } from "react-router-dom"

const MovieHome =()=>{
    return(
        <div>
            <h2 id="Home-tit"><Link to='/movies'>Welcome to the best</Link> <span>Movie App</span></h2>
            <img id='home-img' src="res/home.jpg" width='400px' alt="Home"/>
        </div>
    )
}
export default MovieHome