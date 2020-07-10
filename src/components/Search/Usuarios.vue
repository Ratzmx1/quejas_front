<template>
  <div>
    <br />
    <h1 class="display-2 text-center">Search</h1>
    <v-row dense justify="center" no-gutters>
      <div v-for="(item, index) in users" :key="index">
        <v-col cols="12" sm="12">
          <Usuario :data="item" />
          <v-spacer />
        </v-col>
      </div>
    </v-row>
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
  components: { Usuario },
  computed: {
    nombreAscendente() {
      // const test = []
      const data = this.users.slice();
      data.sort((a, b) => {
        const a1 = a.name.toUpperCase();
        const b1 = b.name.toUpperCase();
        if (a1 > b1) {
          return 1;
        } else {
          return -1;
        }
      });
      return data;
    },
    nombreDescendente() {
      // const test = []
      const data = this.users.slice();
      data.sort((a, b) => {
        const a1 = a.name.toUpperCase();
        const b1 = b.name.toUpperCase();
        if (a1 < b1) {
          return 1;
        } else {
          return -1;
        }
      });
      return data;
    }
  }
};
</script>

<style>
</style>