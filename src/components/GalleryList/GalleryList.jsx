import Picture from '../Picture/Picture';
import {useState} from 'react';

function GalleryList({getGallery, galleryList}) {
    let [current, setCurrent] = useState(0);
    let length = galleryList.length;

    const nextPicture = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevPicture = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    return (
        <>
            <div className="listContainer">
            <button onClick={(event) => prevPicture()}>Prev Picture</button>
            <button onClick={(event) => nextPicture()}>Next Picture</button>
            
                {galleryList.map((picture, index) => (
                    <Picture 
                    key={picture.id}
                    picture={picture}
                    current={current}
                    getGallery={getGallery}
                    index={index}
                    />
                ))}
            </div>
        </>
    )
}

export default GalleryList;