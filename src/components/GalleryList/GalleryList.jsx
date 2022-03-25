import Picture from '../Picture/Picture'

function GalleryList({getGallery, galleryList}) {
    return (
        <>
            <div className="listContainer">
                {galleryList.map(picture => (
                    <Picture 
                    key={picture.id}
                    picture={picture}
                    />
                ))}
            </div>
        </>
    )
}

export default GalleryList;