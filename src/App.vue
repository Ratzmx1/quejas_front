<template>
  <v-app id="app">
    <NavBar />
    <router-view />
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",

  components: { NavBar },

  data: () => ({
    //
  }),
  mounted() {
    const tok = localStorage.getItem("token");
    if (tok) {
      this.$store.dispatch("updateSesion", { bol: true, tok });
    }
  }
};
</script>

<style >
</style>