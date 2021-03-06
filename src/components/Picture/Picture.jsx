import axios from "axios";
import {useState} from 'react';
import GalleryList from "../GalleryList/GalleryList";

function ShoppingItem({picture, index, getGallery, galleryList, current }) {

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
                        <h4>Picture: {current + 1} of {galleryList.length}</h4>
                    </>
                )}
            </div>
        </>
    )
}
export default ShoppingItem;