import {useState} from 'react';
import axios from 'axios';
import GalleryList from "../GalleryList/GalleryList";
import './GalleryItem.css';

//importing picture as a prop over that was passed through GalleryList.jsx 
//but originally came from App.jsx
function GalleryItem({picture, getPhotos}) {
    
    //set the initial like count to be the picture.likes
    const [likeCount, setLikeCount] = useState(picture.likes);
    //this is so when page is loaded,it only shows picture right away,
    //when it is changed to false 
    let [photoStatus, setPhotoStatus] = useState(true);

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

    const showDescription = () => {
        console.log('you selected a kitten');
        if (photoStatus === true) {
            setPhotoStatus(false);
        } else {
            setPhotoStatus(true);
        }
    }

    return (
        <>

        <div>
            <section>
                {photoStatus ?
                    <>
                        <div>
                            <h4>{picture.name}</h4>
                        </div>
                        <img src={picture.path} onClick={showDescription} />
                        <div>
                            <p> {picture.likes} are interested in this kitten</p>
                        </div>
                        <div>
                            <button onClick={() => addLike(picture.id)}>Like</button>
                        </div>
                    </>


                    : //ternarry switch

                    <div className="descriptionMode">
                        <div>
                            <h4>{picture.name}</h4>
                        </div>
                        <div onClick={showDescription}>
                            <p>{picture.description}</p>
                        </div>
                        <div>
                            <p> {picture.likes} are interested in this kitten</p>
                        </div>
                        <div>
                            <button onClick={() => addLike(picture.id)}>Likes</button>
                        </div>

                    </div>
                }
            </section>
        </div>


    </>






           
    )
}

export default GalleryItem;