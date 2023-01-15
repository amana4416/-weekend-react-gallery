import {useState} from 'react';
import axios from 'axios';
import GalleryList from "../GalleryList/GalleryList";
import './GalleryItem.css';
//mui styling
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

//importing picture as a prop over that was passed through GalleryList.jsx 
//but originally came from App.jsx
function GalleryItem({picture, getPhotos}) {
    
    //set the initial like count to be the picture.likes
    const [likeCount, setLikeCount] = useState(picture.likes);
    //this is so when page is loaded,it only shows picture right away (photoStatus is default set to true),
    //when it is changed to false it will show the description
    let [photoStatus, setPhotoStatus] = useState(true);

    //put request -- adding likes ('showing interest in kitten)
    const addLike = (id) => {
        axios({
            method: `put`,
            url: `/gallery/like/${picture.id}`,
            data: {
                likes: likeCount
            }
        })
        .then((response) => {
            console.log('you liked a kitten');
            //like count will increase each time the like button is clicked
            setLikeCount(likeCount + 1);
            getPhotos();
        })
        .catch((error) => {
            alert('error in addLikes /put');
            console.log(error);
        })
    }

    //conditional rendering to show photoStatus as true or false
    const showDescription = () => {
        console.log('you selected a kitten');
        if (photoStatus === true) {
            setPhotoStatus(false);
        } else {
            setPhotoStatus(true);
        }
    }

    //delete request
    const deleteKitten = (id) => {
        axios.delete(`/gallery/${picture.id}`)
        .then(response => {
            console.log('deleting a kitten from the list');
            getPhotos();
        })
        .catch(error => {
            alert('error in deleteKitten /delete');
            console.log(error);
        })
    }

    return (
        <>

        {/* conditional rendering when the photoStatus is true, it will display the photo */}
        <div className="kittenInfo">
            <section className="card">
                {/* default photoStatus is true, so all images will show when page is loaded */}
                {photoStatus ?
                    <>
                        <div className='kittenName'>
                            <h4>{picture.name}</h4>
                        </div>
                        <img src={picture.path} onClick={showDescription} />
                        <div>
                            <p className='likes'> {picture.likes} people are interested in this kitten</p>
                        </div>
                        <section>
                            <FavoriteBorderIcon 
                                className='likeButton'
                                size='large'
                                onClick={() => addLike(picture.id)}
                            />
                            <DeleteIcon
                                className='deleteButton'
                                onClick={() => deleteKitten(picture.id)}
                            />
                        </section>
                    </>

                    : //ternarry switch
                    // when the photStatus changes to false, it will instead 
                    <div className="descriptionMode">
                        <div>
                            <h4>{picture.name}</h4>
                        </div>
                        <div onClick={showDescription} className='DescriptionBackground' >
                            <p>{picture.description}</p>
                        </div>
                        <div>
                            <p className='Description' > {picture.likes} people are interested in this kitten</p>
                        </div>
                        <section>
                            <FavoriteBorderIcon 
                                className='likeButton'
                                size='large'
                                onClick={() => addLike(picture.id)}
                            />
                            <DeleteIcon
                                className='deleteButton'
                                onClick={() => deleteKitten(picture.id)}
                            />
                        </section>
                    </div>
                }
            </section>
        </div>
    </>    
    )
}

export default GalleryItem;