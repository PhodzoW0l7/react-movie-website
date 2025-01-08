import axiosClient from "./axiosClient";

export const category = {
  movie: "movie",
  tv: "tv",
};

export const movieType = {
  upcoming: "upcoming",
  popular: "popular",
  top_rated: "top_rated",
};

export const tvType = {
  popular: "popular",
  top_rated: "top_rated",
  on_the_air: "on_the_air",
};

const tmdbApi = {
  getMoviesList: (type, params) => {
    const url = "movie/" + movieType[type];
    return axiosClient.get(url, { params }); // Pass `params` inside an object
  },
  getTvList: (type, params) => {
    const url = "tv/" + tvType[type];
    return axiosClient.get(url, { params }); // Pass `params` inside an object
  },
  getVideos: (cate, id, params) => {
    const url = category[cate] + "/" + id + "/videos"; // Added missing `/` before `videos`
    return axiosClient.get(url, { params }); // Pass `params` inside an object
  },
  search: (cate, params) => {
    const url = "search/" + category[cate];
    return axiosClient.get(url, { params }); // Pass `params` inside an object
  },
  detail: (cate, id, params) => {
    const url = category[cate] + "/" + id;
    return axiosClient.get(url, { params }); // Pass `params` inside an object
  },
  credits: (cate, id, params) => {
    const url = category[cate] + "/" + id + "/credits";
    return axiosClient.get(url, { params }); // Pass `params` inside an object
  },
  similar: (cate, id, params) => {
    const url = category[cate] + "/" + id + "/similar";
    return axiosClient.get(url, { params }); // Pass `params` inside an object
  },
};

export default tmdbApi;
