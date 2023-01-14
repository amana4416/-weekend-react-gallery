import {useState} from 'react';
import axios from 'axios';
import GalleryList from "../GalleryList/GalleryList";
import './GalleryItem.css';

//importing picture as a prop over that was passed through GalleryList.jsx 
//but originally came from App.jsx
function GalleryItem({picture, getPhotos}) {
    
    //set the initial like count to be the picture.likes
    const [likeCount, setLikeCount] = useState(picture.likes);

    const addLike = (id) => {
        axios.put(`/gallery/like/${id}`)
        .then((response) => {
            //like count will increase each time the like button is clicked
            setLikeCount(likeCount + 1);
            getPhotos();
        })
        .catch((error) => {
            alert('error in addLikes /put');
            console.log(error);
        })
    }




    return (
        <>
            <div className="photoBackground">
                <div>
                    <h3>{picture.name}</h3>
                </div>
                    <img src={picture.path} />
                <div>
                    <button onClick={() => addLike(picture.id)}>Like</button>
                    <span>{picture.likes} like this photo</span>
                </div>
            </div>
        </>
    )
}

export default GalleryItem;