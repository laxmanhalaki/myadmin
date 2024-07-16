import api from './Client.js';
import dotenv from 'dotenv';
dotenv.config();

const MyHeader = {
	headers: {
		Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
	},
};
const getMovies = (page=1, language='hi') => {
	return api.get(
		`/discover/movie?&page=${page}&with_origin_country=IN&with_original_language=${language}`,
		{},
		MyHeader
	);
};
const getHindi = (category) => {
	return api.get(
		`/discover/${category}?&page=1&with_origin_country=IN&with_original_language=hi`,
		{},
		MyHeader
	);
};
const getKannada = (category) => {
	return api.get(
		`/discover/${category}?&page=1&with_origin_country=IN&with_original_language=kn`,
		{},
		MyHeader
	);
};
const getTelagu = (category) => {
	return api.get(
		`/discover/${category}?&page=1&with_origin_country=IN&with_original_language=te`,
		{},
		MyHeader
	);
};
const getTamil = (category) => {
	return api.get(
		`/discover/${category}?&page=1&with_origin_country=IN&with_original_language=ta`,
		{},
		MyHeader
	);
};
const getMovie = (id, language='hi') => {
	return api.get(
		`/movie/${id}?append_to_response=videos&with_origin_country=IN&with_original_language=${language}`,
		{},
		MyHeader
	);
};
const searchMovie = (query,page=1) => {
	return api.get(
		`/search/movie?query=${query}&include_adult=false&language=en-US&page=${page}`,
		{},
		MyHeader
	);
};

export {
	getMovies,
	getHindi,
	getKannada,
	getTelagu,
	getTamil,
	getMovie,
	searchMovie,
};

//https://www.youtube.com/watch?v=
