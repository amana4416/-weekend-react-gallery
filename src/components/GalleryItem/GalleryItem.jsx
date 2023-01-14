import GalleryList from "../GalleryList/GalleryList";

//importing picture as a prop over from GalleryList
function GalleryItem({picture, getPhotos}) {
    return (
        <>
            <h1>Available Kittens</h1>
            <div>
                <div>
                    <h3>Name</h3>
                </div>
                <img src={picture.path} />
                <div>
                    <button className="LikeButton">Likes</button>
                </div>
            </div>
        </>
    )
}

export default GalleryItem;