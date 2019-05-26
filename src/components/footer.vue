<template>
  <v-footer color="transparent" height="200px" center>
    <v-layout justify-center row wrap>
      <v-card flat tile class="transparent black--text text-xs-center">
        <v-img :src="tmdb_logo" height="50" contain="true"></v-img>
        <v-card-text
          >This product uses the TMDb API but is not endorsed or certified by
          TMDb.</v-card-text
        >
        <v-card-text>
          Made by
          <a href="https://github.com/AndreasHaaversen"
            >Andreas Hammer Håversen</a
          >
        </v-card-text>
      </v-card>
    </v-layout>
  </v-footer>
</template>

<script>
import Image from "@/assets/tmdb-logo.png";

export default {
  data() {
    return {
      tmdb_logo: Image
    };
  }
};
</script>

<style></style>
