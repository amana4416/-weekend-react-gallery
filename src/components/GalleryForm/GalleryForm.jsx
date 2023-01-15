import {useState} from 'react';
import axios from 'axios';
import './GalleryForm.css';
//mui styling
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

//passing getPhotos through as a prop from App.jsx
//we will call on getPhotos in our post request
function GalleryForm({getPhotos}) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [path, setPath] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault();
        if (name, description, path) {
            addKitten();
        } else {
            alert('Please finish adding a kitten');
        }
    }

    const addKitten = () => {
        axios.post('/gallery', {name: name, description: description, path: path})
        .then((response) => {
            setName('');
            setDescription('');
            setPath('');
            getPhotos();
        })
        .catch((error) => {
            alert('error adding a kitten');
            console.log(error);
        })
    }
  
   return (
    <>
        <h2>Add a Kitten for Adoption:</h2>
        <form>
            <TextField
                className='input'
                variant="standard"
                placeholder="Kitten Name"
                value={name}
                sx={{ color: '#353535', backgroundColor: '#FFFFFF', marginRight:'3%', marginBottom:'3%' }}
                onChange={(event) => setName(event.target.value)}
            />
            <TextField
                className='input'
                variant="standard"
                type="text"
                placeholder="Kitten Descritption"
                value={description}
                sx={{ color: '#353535', backgroundColor: '#FFFFFF', marginRight:'3%', marginBottom:'3%' }}
                onChange={(event) => setDescription(event.target.value)}
            />
            <TextField
                className='input'
                variant="standard"
                type="text"
                placeholder="Picture of Kitten"
                value={path}
                sx={{ color: '#353535', backgroundColor: '#FFFFFF', marginRight:'3%', marginBottom:'2%' }}
                onChange={(event) => setPath(event.target.value)}
            />
            <Button 
                type="submit"
                variant="contained" 
                size="small" 
                onClick={handleSubmit}
                sx={{ color: '#FFFFFF', backgroundColor: '#8A897C' }}
            >
                Add Kitten for Adoption
            </Button>


        </form>
    </>
   )
}

export default GalleryForm;