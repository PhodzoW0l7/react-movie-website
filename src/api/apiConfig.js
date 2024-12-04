const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "cfd675a27fe2f0b83737aa9ea6690437",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
