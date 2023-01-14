import GalleryList from "../GalleryList/GalleryList";

//importing picture as a prop over from GalleryList
function GalleryItem({picture, getPhotos}) {


    return (
        <>
            <h1>Available Kittens</h1>
            <div className="card">
                <div>
                    <h3>Name</h3>
                </div>
                    <img src="images/goat_small.jpg"/>
                <div>
                    <button className="likeButton">Likes</button>
                </div>
            </div>
        </>
    )
}

export default GalleryItem;