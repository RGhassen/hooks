import CardMovies from "./CardMovies"

const ListMovies =({movies,inpt,rate , setMovies })=>{
    const handleDelete =(a)=>movies.filter(film=>film.id!==a)
    const found = movies.filter(movie => movie.title.toUpperCase().includes(inpt.toUpperCase()) && movie.rating >= rate).map(movie=><CardMovies key={movie.id} movie={movie} handleDelete={handleDelete}/>)
{/*we added the filter and the map in a const to make it easy when we use a condition */}
    return(
        <div id="MovieMain">
            {
              found.length === 0 ? <img src="/res/notf.png" alt="notf" id="notf"/> : found
              /*if we did't find a movie we give an image intead */
            }
        </div>
    )
}
export default ListMovies