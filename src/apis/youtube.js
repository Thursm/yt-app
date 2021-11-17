import axios from 'axios';

const KEY = 'AIzaSyCurzq4xPBC1KZBckIA9j2unLkQJGiPRmE'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});

