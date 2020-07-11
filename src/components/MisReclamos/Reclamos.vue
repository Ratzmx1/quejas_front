<template>
  <div>
    <br />
    <h1 class="display-2 text-center">Mis quejas</h1>
    <div v-for="(reclamo, i) in quejas" :key="i">
      <v-col cols="12">
        <reclamo :data="reclamo" />
      </v-col>
    </div>
  </div>
</template>

<script>
import Reclamo from "./Reclamo.vue";
import axios from "axios";
export default {
  name: "Reclamos",
  data() {
    return {
      quejas: []
    };
  },
  mounted() {
    axios
      .get("http://localhost:3030/queja/get", {
        headers: {
          authorization: this.$store.state.token
        }
      })
      .then(res => {
        console.log(res);
        this.quejas = res.data.quejas;
      });
  },
  components: { Reclamo }
};
</script>

<style></style>
