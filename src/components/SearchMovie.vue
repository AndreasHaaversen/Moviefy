<template>
  <v-container v-if="loading">
    <div class="text-xs-center">
      <v-progress-circular indeterminate :size="150" :width="8" color="green"></v-progress-circular>
    </div>
  </v-container>

  <v-container v-else-if="noData">
    <div class="text-xs-center">
      <h2>No matches for "{{ name }}" could be found</h2>
    </div>
  </v-container>

  <v-container v-else grid-list-xl>
    <v-layout wrap>
      <v-flex xs4 v-for="item in movieResponse.results" v-bind:key="item.id" mb-2>
        <v-card>
          <v-img :src="image_url + item.poster_path" aspect-ratio="1"></v-img>

          <v-card-title primary-title>
            <div>
              <h2>{{ item.title }}</h2>
              <div>Released: {{ item.release_date }}</div>
              <div>Vote Average: {{ item.vote_average }}</div>
            </div>
          </v-card-title>

          <v-card-actions class="justify-center">
            <v-btn flat color="green" @click="singleMovie(item.id)">Details</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import movieApi from "@/services/MovieAPI";

export default {
  props: ["name"],
  data() {
    return {
      movieResponse: [],
      loading: true,
      noData: false,
      image_url: "https://image.tmdb.org/t/p/w500/",
    };
  },
  methods: {
    singleMovie(id) {
      this.$router.push("/movie/" + id);
    },

    fetchResult(value) {
      movieApi
        .fetchMovieSearch(value)
        .then(response => {
          if (response.total_results !== 0) {
            this.movieResponse = response;
            this.loading = false;
            this.noData = false;
          } else {
            this.noData = true;
            this.loading = false;
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  },

  mounted() {
    this.fetchResult(this.name);
  },

  watch: {
    name(value) {
      this.fetchResult(value);
    }
  }
};
</script>

<style lang="stylus" scoped>
.v-progress-circular {
  margin: 1rem;
}
</style>
