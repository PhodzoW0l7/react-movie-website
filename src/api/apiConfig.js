const apiConfig = {
  baseUrl: process.env.REACT_APP_BASE_URL || "https://api.themoviedb.org/3/",
  apiKey: process.env.REACT_APP_API_KEY || "your-default-api-key",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};
