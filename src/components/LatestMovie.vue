<template>
  <v-container v-if="loading">
    <div class="text-xs-center">
      <v-progress-circular
        indeterminate
        :size="150"
        width="8"
        color="green"
      ></v-progress-circular>
    </div>
  </v-container>

  <v-container v-else grid-list-xl>
    <v-layout wrap>
      <v-flex
        xs4
        v-for="item in wholeResponse.results"
        v-bind:key="item.id"
        mb-2
      >
        <v-card>
          <v-img :src="image_url + item.poster_path" aspect-ratio="1"></v-img>
          <v-card-title primary-title>
            <div>
              <h2>{{ item.title }}</h2>
              <div>Release: {{ item.release_date }}</div>
              <div>Vote Average: {{ item.vote_average }}</div>
            </div>
          </v-card-title>

          <v-card-actions class="justify-center">
            <v-btn flat color="green" @click="singleMovie(item.id)"
              >Details</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import movieApi from "@/services/MovieAPI";

export default {
  data() {
    return {
      wholeResponse: [],
      loading: true,
      image_url: "https://image.tmdb.org/t/p/w500/"
    };
  },
  mounted() {
    movieApi.fetchMovieDiscover().then(response => {
      this.wholeResponse = response;
      this.loading = false;
    });
  },
  methods: {
    singleMovie(id) {
      this.$router.push("/movie/" + id);
    }
  }
};
</script>

<style lang="stylus" scoped>
.v-progress-circular {
  margin: 1rem;
}
</style>
