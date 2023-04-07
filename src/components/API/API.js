import axios from 'axios'

axios.defaults.baseURL = 'https://pixabay.com/api';
const API_KEY = '29695915-c38deaca5c39c5789eb2d0dd9';

export const searchImage = async (query, page) => {
    const { data } = await axios(`?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=12`);
    return data.hits
}
