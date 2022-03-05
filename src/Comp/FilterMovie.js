import { Rating } from "@mui/material"
import { Button } from "react-bootstrap"

const FilterMovie =({inpt,setInpt,rate,setRate,handleReset})=>{

    return(
        <div id="filter-main">
            <input placeholder="Enter a movie title" onChange={(e)=> setInpt(e.target.value)} value={inpt}/>
            <Rating onChange={(e)=> setRate(e.target.value)} value={rate}/>
            <Button variant="outline-warning" onClick={handleReset} >Reset</Button>
        </div>
    )
}
export default FilterMovie