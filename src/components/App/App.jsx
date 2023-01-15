import React from 'react';
import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';

//components
import Header from '../Header/Header.jsx';
import GalleryList from '../GalleryList/GalleryList.jsx';


function App() {
  //we're feeding photos an array, so it needs to be set to an empty array to begin
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    getPhotos();
  }, []) //the empty array is a stop sign so we only call the getPhotos() 
  //function once when the page uploads

  //get request
  const getPhotos = () => {
    axios.get('/gallery')
    .then((response) => {
      setPhotos(response.data);
      console.log('got photos!');
    })
    .catch((error) => {
      alert('error getting photos');
      console.log(error);
    })
  }

    return (
      <div className="App">
         <Header />
        <GalleryList 
          getPhotos={getPhotos}
          photos={photos}
        />
      </div>
    );
}

export default App;
