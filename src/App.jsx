import './App.css';
import Banner from './components/Banner';
import Nav from './components/Nav';
import Row from './components/Row';
import requests from './requests';




function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner fetchurl={requests.fetchNetflixOriginals}/>
      <Row isPoster={true} title= "NetflixOriginals" fetchurl={requests.fetchNetflixOriginals}/>
      <Row title= "Trending in India" fetchurl={requests.fetchTrending}/>
      <Row title= "Top-Rated" fetchurl={requests.fetchTopRated}/>
      <Row title= "Action-Movies" fetchurl={requests.fetchActionMovies}/>
      <Row title= "Comedy-Movies" fetchurl={requests.fetchComedyMovies}/>
      <Row title= "Horror-Movies" fetchurl={requests.fetchHorrorMovies}/>
      <Row title= "Romantic-Movies" fetchurl={requests.fetchRomanceMovies}/>
      <Row title= "Documentaries" fetchurl={requests.fetchDocumentaries}/>
    </div>
  
);
}
export default App;
