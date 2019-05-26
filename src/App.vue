<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <router-link to="/" tag="span" style="cursor: pointer">
          <span>MOVIE</span>
          <span class="font-weight-light">FY</span>
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-flex xa12 sm6 md3>
        <v-text-field label="Movie Name" v-model="searchString" @keyup.enter="searchMovie"></v-text-field>
      </v-flex>
      <v-btn flat :disabled="!dataAvaliable" @click="searchMovie" >
        <span class="mr-2">Search</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>
    <moviefyFooter></moviefyFooter>
  </v-app>
</template>

<script>

import moviefyFooter from './components/footer.vue'


export default {
  name: "App",
  components: {},
  data() {
    return {
      searchString: ""
    };
  },
  methods: {
    searchMovie() {
      this.$router.push("/search/" + this.searchString);
      this.searchString = "";
    }
  },
  computed: {
    dataAvaliable() {
      return this.searchString !== null && this.searchString != "";
    }
  },
  components: {
    'moviefyFooter': moviefyFooter
  },
};
</script>
