import {useState} from 'react';

import './GalleryForm.css';
//mui styling
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function GalleryForm() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [path, setPath] = useState('');

   return (
    <>
        <h2>Add a Kitten for Adoption:</h2>
        <form >
            <input
                variant="standard"
                type="text"
                placeholder="Kitten Name"
                value={name}
                onChange={(event) => setName(event.target.value)}
            />
            <input
                type="text"
                placeholder="Kitten Descritption"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
            />
            <input
                type="url"
                placeholder="Picture of Kitten"
                value={path}
                onChange={(event) => setPath(event.target.value)}
            />
            <Button 
            variant="contained" 
            size="small" 
            onClick={() => addLike(picture.id)}
            sx={{ color: '#FFFFFF', backgroundColor: '#8A897C' }}
            >
                Add Kitten for Adoption
            </Button>


        </form>
    </>
   )
}

export default GalleryForm;