import Picture from '../Picture/Picture'

function GalleryList({getGallery, galleryList}) {
    return (
        <>
            <div className="listContainer">
                {galleryList.map(picture => (
                    <Picture 
                    key={picture.id}
                    picture={picture}
                    getGallery={getGallery}
                    />
                ))}
            </div>
        </>
    )
}

export default GalleryList;