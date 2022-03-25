import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList'



function App() {

  const [galleryList, setGalleryList] = useState([]);

  useEffect(() => {
      getGallery()
  }, [])

  const getGallery = () => {
    console.log('In GET');

    axios.get('/gallery').then( response => {
      setGalleryList(response.data)
      console.log(response.data);
    }).catch( err => {
      console.log(err);
    })
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <main>
        <GalleryList 
          getGallery={getGallery}
          galleryList={galleryList}
        />
      </main>

    </div>
  );
}

export default App;
