
function ShoppingItem({picture}) {
    return (
        <>
            <div className="pictureContainer" key={picture.id}>
                <img src={picture.path}/>
                <p>{picture.description}</p>
                <p>Likes: {picture.likes}</p>
                <button>I Love It!</button>
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