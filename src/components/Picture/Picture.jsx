import axios from "axios";
import {useState} from 'react';

function ShoppingItem({picture, index, getGallery, current }) {

    let [showPicture, setShowPicture] = useState(true);

    const updateLikes = (pictureId) => {
        axios.put(`/gallery/like/${pictureId}`)
            .then((response) => {
                getGallery()
            }).catch((err) => {
                console.log('Error in PUT', err);
            });
    };

    return (
        <>
            <div key={picture.id}>
                {index === current && (
                    <>
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
                        <h2>Likes: {picture.likes}</h2>
                        <button onClick={(event) => updateLikes(picture.id)}>I Love It!</button>
                        <h4>Picture: {current + 1} of 9</h4>
                    </>
                )}
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