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
            <section className="listContainer">
            <button className="slideButton" onClick={(event) => prevPicture()}>Prev Picture</button>
            
                {galleryList.map((picture, index) => (
                    <Picture 
                    key={picture.id}
                    picture={picture}
                    current={current}
                    getGallery={getGallery}
                    galleryList={galleryList}
                    index={index}
                    />
                ))}
            
            <button className="slideButton" onClick={(event) => nextPicture()}>Next Picture</button>
            </section>
        </>
    )
}

export default GalleryList;