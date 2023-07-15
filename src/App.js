
import './App.css';
import { BrowserRouter as Router, Route,  Routes} from "react-router-dom";
import Header from './components/Main/Header';
import Home from './pages/home/Home';
import MovieList from './components/movieList/MovieList';
import Movie from './pages/home/MoviDetails/Movie';


function App() {
  return (

<>
 <div className="App">
   
    <Router>
    <Header />
    <Routes>
      <Route index element = {<Home />} />
        <Route path="movie/:id" element = {<Movie/>} />
        <Route path="movies/:type" element = {<MovieList />} />
        <Route path="/*" element = {<h1>Error Page</h1>} />  
        </Routes>
     
    </Router>
    </div>
    </> 
   
  );
 
}

export default App;
