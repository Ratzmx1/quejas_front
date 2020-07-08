<template>
  <v-app-bar max-height="10%" color="deep-purple darken-4" dark>
    <v-toolbar-title>
      <v-tab to="/">Quejas</v-tab>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-tab to="/" v-if="$store.state.log">Mis quejas</v-tab>
    <div v-for="(item, i) in opciones" :key="i">
      <v-tab :to="item.url">{{ item.opcion }}</v-tab>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      opciones: [
        {
          opcion: "Mis quejas",
          url: "/"
        },
        {
          opcion: "Buscar",
          url: "/search"
        },
        {
          opcion: "Login",
          url: "/login"
        },
        {
          opcion: "Signup",
          url: "/signup"
        }
      ]
    };
  }
};
</script>

<style>
</style>