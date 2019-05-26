import axios from "axios";

const key = "?api_key=1ead4035163c520c10d30f773c296b20";

export default {
  async fetchMovieDiscover() {
    const response = await axios.get(
      "discover/movie" +
        key +
        "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"
    );
    return response.data;
  },

  async fetchSingleMovie(id) {
    const response = await axios.get("movie/" + id + key + "&language=en-US");
    return response.data;
  },

  async fetchMovieSearch(query) {
    const response = await axios.get(
      "search/movie" +
        key +
        "&language=en-US&include_adult=false&query=" +
        query
    );
    return response.data;
  }
};
