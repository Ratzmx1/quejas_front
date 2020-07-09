<template>
  <v-container>
    <v-card>
      <v-card-text>{{data.name}}</v-card-text>
      <v-subheader>{{ moment }}</v-subheader>
      {{ data }}
    </v-card>
  </v-container>
</template>

<script>
import * as moment from "momentjs";

export default {
  name: "Usuario",
  props: ["data"],
  data() {
    return {
      hace: moment()
    };
  }
};
</script>

<style>
</style>