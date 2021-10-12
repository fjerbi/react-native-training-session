import axios from "axios";

const apiUrl = "https://api.themoviedb.org/3";
const apiKey = "876dd125bb143fc55ff1c8f1c00d5398";
//Get Latest popular movies
export const getPopularMovies = async () => {
  const resp = await axios.get(`${apiUrl}/movie/popular?api_key=${apiKey}`);
  console.log(JSON.stringify(resp.data.results[0], null, 2));
  return resp.data.results;
};


//Get Latest upcoming movies
export const getUpcomingMovies = async () => {
    const resp = await axios.get(`${apiUrl}/movie/upcoming?api_key=${apiKey}`);
    console.log(JSON.stringify(resp.data.results[0], null, 2));
    return resp.data.results;
  };
  
  //Get popular Tv shows 
export const getPopulerTv = async () => {
    const resp = await axios.get(`${apiUrl}/tv/popular?api_key=${apiKey}`);
    console.log(JSON.stringify(resp.data.results[0], null, 2));
    return resp.data.results;
  };
  