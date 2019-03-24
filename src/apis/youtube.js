import axios from 'axios';
const KEY='AIzaSyB444uM2eKVinFOJ14UEahOfipX4iAtFgc';
export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        key:KEY,
        maxResults:5,
        part:'snippet'
    }
});
