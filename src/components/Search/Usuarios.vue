<template>
  <div>
    <br />
    <h1 class="display-2 text-center">Search</h1>
    <v-row>
      <v-col cols="3" lg="3" md="12">
        <div>
          <h3 class="display-1 text-center">Filtros</h3>
          <br />
          <v-text-field
            v-model="searchBar"
            outlined
            dense
            hide-details
            prepend-icon="search"
            single-line
          ></v-text-field>
        </div>
      </v-col>
      <v-col cols="9" lg="9" md="12">
        <v-row dense justify no-gutters>
          <div v-for="(item, index) in busqueda" :key="index">
            <v-col>
              <Usuario :data="item" />
              <v-spacer />
            </v-col>
          </div>
        </v-row>
      </v-col>
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
      users: [],
      searchBar: ""
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
      const data = this.busqueda.slice();
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
      const data = this.busqueda.slice();
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
    },
    busqueda() {
      const busq = [];

      this.users.forEach(el => {
        if (el.name.toUpperCase().indexOf(this.searchBar.toUpperCase()) > -1) {
          busq.push(el);
        }
      });
      return busq;
    }
  }
};
</script>
