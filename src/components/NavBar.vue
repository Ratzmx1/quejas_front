<template>
  <v-app-bar max-height="70px" min-height="70px" color="deep-purple darken-4" dark>
    <v-toolbar-title>
      <v-tab to="/">Quejas</v-tab>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-tab v-if="isLogedIn" to="/quejas">Mis quejas</v-tab>
    <v-tab v-if="isLogedIn" to="/search">Buscar</v-tab>
    <v-tab v-if="!isLogedIn" to="/login">Login</v-tab>
    <v-tab v-if="!isLogedIn" to="/signup">Signup</v-tab>
    <v-tab v-if="isLogedIn" @click="logout">Logout</v-tab>
  </v-app-bar>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {};
  },
  methods: {
    logout() {
      localStorage.removeItem("token");
      this.$store.dispatch("closeSesion");
      this.$router.push("/login");
    }
  },
  computed: {
    isLogedIn() {
      return this.$store.getters.isLoged;
    }
  }
};
</script>

<style></style>
