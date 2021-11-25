import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: { 
        Authorization: 'Client-ID k-fp-xk41DkzhqMLAyDU2ecxU1J96c1Stc8rqrUi7fI'
    }
});