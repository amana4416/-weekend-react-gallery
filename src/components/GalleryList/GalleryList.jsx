import {useState} from 'react';
import GalleryItem from '../GalleryItem/GalleryItem.jsx';
import './GalleryList.css';

//importing photos (a piece of state) and getPhotos as a props from 
//app.jsx
//we wont actually use getPhotos here, but we will need it in the GalleryItem component,
//so we're just passing it through here
function GalleryList ({photos, getPhotos}) {
    return (
        <div>
        <h2>Available Kittens:</h2>
        {photos.map(picture => {
            return (
                <GalleryItem
                    key={[picture.id]}
                    picture={picture}
                    getPhotos={getPhotos}
                />
            )
        })}
    </div>
    )
}

export default GalleryList;