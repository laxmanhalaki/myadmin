import {create} from 'apisauce';
export const ImgBaseUrl='http://image.tmdb.org/t/p/w400/';
export const ImgBaseUrlqty='http://image.tmdb.org/t/p/w1280/';
const api=create({baseURL:'https://api.themoviedb.org/3',accept:'application/json'})
export default api;

//1280