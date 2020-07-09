<template>
  <div>
    <h1 class="display-2 text-center">Search</h1>
    <div v-for="(item, index) in users" :key="index">
      <Usuario :data="item" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Usuario from "./Usuario.vue";

export default {
  name: "Usuarios",
  data() {
    return {
      users: []
    };
  },
  created() {
    axios.get("http://localhost:3030/user/get").then(docs => {
      this.users = docs.data;
    });
  },
  components: { Usuario }
};
</script>

<style>
</style>