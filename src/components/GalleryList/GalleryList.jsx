import axios from 'axios';
import GalleryItem from '../GalleryItem/GalleryItem.jsx';

//importing photos (a piece of state) and getPhotos as a props from 
//app.jsx
function GalleryList ({photos, getPhotos}) {
    return (
        <>
        {photos.map((picture) => {
            <section className="allPosts" key={[picture.id]}>
                <GalleryItem 
                    picture={picture}
                />
            </section>
        })}
    </>
    )
}

export default GalleryList;