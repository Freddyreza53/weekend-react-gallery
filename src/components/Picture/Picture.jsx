import axios from "axios";
import {useState} from 'react';

function ShoppingItem({picture, getGallery }) {

    let [showPicture, setShowPicture] = useState(true);

    const updateLikes = (pictureId) => {
        axios.put(`/gallery/like/${pictureId}`)
            .then((response) => {
                getGallery()
            }).catch((err) => {
                console.log('Error in PUT', err);
            });
    };


    console.log(showPicture);
    return (
        <>
            <div className="pictureContainer" key={picture.id}>
                <div className="centerText" onClick={(event) => setShowPicture(!showPicture)}>
                    {showPicture === true ? (
                        <img src={picture.path}/>
                    ) : (
                        <>
                            <span className="pictureDescription">{picture.description}</span>
                            <img src={picture.path}/>
                        </>
                    )}
                    
                    
                </div>
                <h5>Likes: {picture.likes}</h5>
                <button onClick={(event) => updateLikes(picture.id)}>I Love It!</button>
            </div>
        </>
    )
}
export default ShoppingItem;


// const galleryItems = [
//     { id: 1, path: 'images/goat_small.jpg', description: 'Photo of a goat taken at Glacier National Park.', likes: 0 },
//     { id: 2, path: 'images/kobaBaby.jpeg', description: 'Photo of a goat taken at Glacier National Park.', likes: 0 },
//     { id: 3, path: 'images/kobaPic.jpeg', description: 'Photo of a goat taken at Glacier National Park.', likes: 0 },
//     { id: 4, path: 'images/kobaStrong.jpeg', description: 'Photo of a goat taken at Glacier National Park.', likes: 0 }
// ];