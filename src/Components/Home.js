import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import { Typography, Box, Card, CardContent, CardMedia } from '@mui/material';
import mountain from '../Assets/unsplash1.jpg';
import './Home.css';

const UNSPLASH_API_ENDPOINT = 'https://api.unsplash.com';
const Apikey = '290njTUVQfIv4IfogXzS1BQ1tOhhEDpHOzK0ZKYmzPE';

function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchRandomPhotos = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`${UNSPLASH_API_ENDPOINT}/photos/random?count=15&client_id=${Apikey}`);
      setPhotos(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRandomPhotos();
  }, []); 

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `${UNSPLASH_API_ENDPOINT}/search/photos?page=1&query=${searchTerm}&client_id=${Apikey}`
      );
      setPhotos(response.data.results);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home">
      <div className='homeimg'>
        <img src={mountain} alt="mounatin" />
        <div className='overlay'></div>
      </div>
      <div className="overlay-text">
        <h2>Download High Quality Images by Creators</h2>
        <p className='overlay-text-p'>Over 2.4 million+ stock Images by our talented community</p>
        <form onSubmit={handleSearch}>
          <input
            className='search'
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search high-resolution images, categories, wallpapers"
          />
        </form>
      </div>
      <div>
        {loading && <p>Loading...</p>}
        {error && <p>Error fetching photos: {error.message}</p>}
        {!loading && !error && photos && photos.length > 0 && (
          <Box
            sx={{
              padding: 2,
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div className="box-container">
              {photos.map((photo) => (
                <Card key={photo.id} className='card'>
                  <CardMedia component='img' height='130' image={photo.urls.small} alt={photo.alt_description} />
                  <CardContent sx={{ textAlign: 'center', display: 'flex', justifyContent: "space-between" }}>
                    <img className="profileimg" src={photo.user.profile_image.small} alt={photo.user.name} />
                    <div className='userdetail'>
                      <Typography className='name'>{photo.user.name}</Typography>
                      <Typography className='username'>@{photo.user.username}</Typography>
                    </div>
                    <div className='userdetail'>
                      <ThumbUpOffAltIcon id="like" />
                      <Typography variant='body2'>{photo.likes}</Typography>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Box>
        )}
      </div>
    </div >
  );
}

export default Home;
