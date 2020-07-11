<template>
  <v-container>
    <v-card width="380px">
      <v-list-item three-line>
        <v-list-item-content>
          <div class="overline mb-4">{{anios}} Years</div>
          <v-list-item-title class="headline mb-1">{{ data.name }}</v-list-item-title>
          <v-list-item-subtitle>{{ data.city }}</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-avatar size="100" color="grey">
          <img src="https://picsum.photos/100/100" />
        </v-list-item-avatar>
      </v-list-item>
      <v-card-actions>
        <v-btn color="deep-purple darken-4" dark @click="reclamar" block>Hacer reclamo</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import moment from "moment";

export default {
  name: "Usuario",
  props: ["data"],
  computed: {
    anios() {
      const a = moment(this.data.birthDate, "YYYY/MM/DD");
      const b = moment();
      return b.diff(a, "years");
    }
  },
  methods: {
    reclamar() {
      this.$router.push({ name: "Reclamar", params: { id: this.data._id } });
    }
  }
};
</script>

<style>
</style>