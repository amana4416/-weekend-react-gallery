import axios from 'axios';
import GalleryItem from '../GalleryItem/GalleryItem.jsx';
import './GalleryList.css';

//importing photos (a piece of state) and getPhotos as a props from 
//app.jsx
//we wont actually use getPhotos here, but we will need it in the GalleryItem component,
//so we're just passing it through here
function GalleryList ({photos, getPhotos}) {

  

    return (
        <>
        <h2>Available Kittens:</h2>
        {photos.map((picture) => {
            <section className="allPosts" key={[picture.id]}>
                <GalleryItem 
                    picture={picture} 
                    getPhotos={getPhotos} 
                />
            </section>
        })}
    </>
    )
}

export default GalleryList;