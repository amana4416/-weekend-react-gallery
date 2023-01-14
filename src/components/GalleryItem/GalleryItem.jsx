import axios from 'axios';
import GalleryList from "../GalleryList/GalleryList";
import './GalleryItem.css';

//importing picture as a prop over that was passed through GalleryList.jsx 
//but originally came from App.jsx
function GalleryItem({picture, getPhotos}) {
    
    getPhotos();
    
    return (
        <>
            <div className="photoBackground">
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