<template>
  <v-container v-if="loading">
    <div class="text-xs-center">
      <v-progress-circular indeterminate :size="150" :width="8" color="green"></v-progress-circular>
    </div>
  </v-container>

  <v-container v-else>
    <v-layout wrap>
      <v-flex offset-sm1 offset-xs1 xs10>
        <v-card>
          <v-img :src="image_url + singleMovie.poster_path" aspect-ratio="2"></v-img>
          <v-card-title primary-title>
            <div>
              <h2 class="headline mb-0">
                {{ singleMovie.title }}
                <div id="vote">{{ singleMovie.vote_average }}/10</div>
              </h2>
              <br>
              <p>{{ singleMovie.overview }}</p>
              <h4>Genres:</h4>
              <ul>
                <li v-for="genre in singleMovie.genres" v-bind:key="genre.id">
                  <p>{{ genre.name }}</p>
                </li>
              </ul>
              <p>Runtime: {{ singleMovie.runtime }} minutes</p>
              <p>Status: {{ singleMovie.status }}</p>
              <p v-if="singleMovie.release_date">Release date: {{ singleMovie.release_date }}</p>
              <p>IMDB-ID: {{ singleMovie.imdb_id }}</p>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat color="green" @click="back">Back</v-btn>
            <v-btn v-if="singleMovie.homepage" flat color="green" @click="website">Website</v-btn>
            <v-btn v-if="singleMovie.imdb_id" flat color="green" @click="openIMDB">IMDB</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import movieApi from "@/services/MovieAPI";

export default {
  props: ["id"],
  data() {
    return {
      singleMovie: "",
      dialog: false,
      loading: true,
      image_url: "https://image.tmdb.org/t/p/w500/"
    };
  },
  mounted() {
    movieApi
      .fetchSingleMovie(this.id)
      .then(response => {
        this.singleMovie = response;
        this.loading = false;
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    back() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    },
    website() {
      window.open(this.singleMovie.homepage);
    },
    openIMDB() {
      window.open("https://www.imdb.com/title/" + this.singleMovie.imdb_id);
    }
  }
};
</script>

<style>
#vote {
  float: right;
}

h4 {
  margin-bottom: 5px;
}

ul {
  padding-bottom: 10px;
}

li {
  margin-bottom: 5px;
  margin-top: 0px;
}

li p {
  margin: 0px;
}
</style>
