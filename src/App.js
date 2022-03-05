
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavPro from './Comp/NavPro';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import ListMovies from './Comp/ListMovies';
import FilterMovie from './Comp/FilterMovie';
import AddMovies from './Comp/AddMovies';
import MovieHome from './Comp/MovieHome';
import { Route, Routes } from 'react-router-dom';
import Dmovie from './Comp/Dmovie';

function App() {
 
  const handleAdd =(newMovie)=> setMovies([...movies,newMovie])
  const handleReset=()=>{
    setInpt('')
    setRate(0)
}
  const [inpt,setInpt] = useState('')
  const [rate,setRate] = useState(0)
  const [movies,setMovies] = useState(
    [
       {title : 'MORBIUS', description : 'One of the most compelling and conflicted characters in Sony Pictures Universe of Marvel Characters comes to the big screen as Oscar® winner Jared Leto transforms into the enigmatic antihero Michael Morbius. Dangerously ill with a rare blood disorder and determined to save others suffering his same fate, Dr. Morbius attempts a desperate gamble. While at first it seems to be a radical success, a darkness inside him is unleashed. Will good override evil -- or will Morbius succumb to his mysterious new urges?', posterURL : 'https://resizing.flixster.com/n0rigHl5IwtkTtIE9wihGyq8rVA=/206x305/v2/https://resizing.flixster.com/oEo8Ot0DRzCu5SNdAu8nVyjEXv4=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzL2NiMzRiNmI5LWNmYjYtNGNjZS05YTMyLThkZGZiOTljMjdjYy5qcGc='  , trailer : 'https://www.youtube.com/embed/oZ6iiRrz1SY' , rating : 3 , id : 1 },
      {title : 'CATCH THE FAIR ONE' , description : 'A Native American boxer embarks on the fight of her life when she goes in search of her missing sister.', posterURL : 'https://resizing.flixster.com/r-CdA91sOF3YyVDLtT32h_YZNaM=/206x305/v2/https://resizing.flixster.com/XQ6d5P7Nwdjy40D30_KjnqzwzAg=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzL2MzZjI5ODcwLWIxOGItNDAzOC04ODljLTdjOWMwMDExMjU3Mi5qcGc=', trailer : 'https://www.youtube.com/embed/lITIDvp1_o8', rating : 4 , id : Math.random()},
      {title : 'SUPERCOOL' , description : "High school nerds Neil (Jake Short) and Gilbert's (Miles J. Harvey) lifelong friendship is tested when Neil's wish to transform into a handsome 'cool' guy comes true. When Neil wakes up with the face and body of a model, he sets out on his quest to impress the girl of his dreams, Summer (Madison Davenport), at her raging house party. With the help of a suave neighbor, Jimmy (Damon Wayans Jr.), and a brand-new Porsche, Neil and Gilbert embark on an epic night that spins wildly out of control, pushing the limits of beauty, brains and what's truly important--friendship." , posterURL : 'https://resizing.flixster.com/KycGdiSYQfmA68qI99eZxb2Yhhc=/206x305/v2/https://resizing.flixster.com/rky3iFQ-UxtB4GO9HoQGVcVFu6o=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzL2U4OTNjZTllLWMxN2UtNDczNC1hOTJjLThmYWQ4NjYyOTRlZC5qcGc=' , trailer:'https://www.youtube.com/embed/nFsBy6i2z1k', rating : 5 , id : Math.random()},
      {title : 'LOVE AND LEASHES' , description : 'Love never hurt so good for two co-workers who enter a contractual relationship as partners in consensual play, pleasure and pain.' , posterURL :'https://resizing.flixster.com/mTw6Bw4fBWVOU412f3EKJzhSQTk=/206x305/v2/https://resizing.flixster.com/-6-IejTmhKijWvkTl1YP2gk8aE8=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzL2M4ZjY1ZjZjLTY0OTktNDk3Yy1hZGVhLTEwY2FiMDZlYjVkMy5qcGc=' , trailer : 'https://www.youtube.com/embed/UEW3JpGCa5Q', rating : 4 , id : Math.random()},
      {title : 'DOG', description : "DOG is a buddy comedy that follows the misadventures of two former Army Rangers paired against their will on the road trip of a lifetime. Army Ranger Briggs (Channing Tatum) and Lulu (a Belgian Malinois dog) buckle into a 1984 Ford Bronco and race down the Pacific Coast in hopes of making it to a fellow soldier's funeral on time. Along the way, they'll drive each other completely crazy, break a small handful of laws, narrowly evade death, and learn to let down their guards in order to have a fighting chance of finding happiness.", posterURL : 'https://resizing.flixster.com/YBhfK64vxMZE4wyNuT4aS5MX8tQ=/206x305/v2/https://resizing.flixster.com/YCuUJa22iVfy0R2D74TEp8pnmAg=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzL2ZkZTAzYzdkLWQxODItNDgzYi1iMTlmLTY4OTg3NWU2ZTBlNi5qcGc=', trailer :'https://www.youtube.com/embed/V4tAtp-TyzQ',rating : 5 , id : Math.random()},
      {title : 'JACKASS FOREVER', description :"Celebrating the joy of being back together with your best friends and a perfectly executed shot to the dingdong, the original jackass crew return for another round of hilarious, wildly absurd, and often dangerous displays of comedy with a little help from some exciting new cast.", posterURL : 'https://resizing.flixster.com/GTksL-S4gFJwXCbe_cJgaptB9eE=/206x305/v2/https://resizing.flixster.com/FGgqrKs70Wv6f_3nA5PbCwAuHkA=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzcyNmMwMzBlLTQxZDctNDIxYi04MWFmLWEwNTE0ZTIwMjVkNy5qcGc=' , trailer :'https://www.youtube.com/embed/p74bzf-beGc', rating : 1 , id : Math.random()}
    ]
  )
  return (
    <div>
        <NavPro/>
        <Container id='main'>
            <FilterMovie setInpt={setInpt} setRate={setRate} inpt={inpt} rate={rate} handleReset={handleReset}/>
            <AddMovies handleAdd={handleAdd}/>
            <Routes>
              <Route path='/' element={ <MovieHome/>}/>
              <Route path='/Movies' element={<ListMovies movies={movies} inpt={inpt} rate={rate} setMovies={setMovies} />}/>
              <Route path='/movies/:id' element={<Dmovie movies={movies}/>}/>
            </Routes>

        </Container>
    </div>
  );
}

export default App;
