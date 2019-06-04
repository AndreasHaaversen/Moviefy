<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-card-text>
            <v-container>
              <form @submit.prevent="onSignup">
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      name="email"
                      label="Mail"
                      id="email"
                      v-model="email"
                      type="email"
                      required
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      name="password"
                      label="Password"
                      id="password"
                      v-model="password"
                      type="password"
                      required
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-btn type="submit">Log In</v-btn>
                  </v-flex>
                </v-layout>
              </form>
            </v-container>
          </v-card-text>
        </v-card>
        <v-layout row>
          <v-alert
            :value="success"
            type="success"
            dismissible
          >Got it! Logged in.</v-alert>
          <v-alert :value="failed" type="error" dismissible>Oups! Something went wrong. We're sorry! {{ this.error }}</v-alert>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      email: "",
      password: "",
      success: false,
      failed: false,
      error: '',
    };
  },
  methods: {
    onSignup() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(user => {
          this.success = true;
        })
        .catch(error => {
          this.failed = true;
          this.error = error.message
          console.error(error);
        });
    }
  },
  computed: {
    comparePasswords() {
      return this.password != this.confirmPassword
        ? "Passwords do not match"
        : "" && this.confirmPassword != "";
    }
  }
};
</script>

<style>
</style>
