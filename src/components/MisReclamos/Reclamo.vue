<template>
  <div>
    <!-- {{ data }} -->
    <v-card max-width="70%">
      <v-card-title primary-title>{{ data.desdeName.toUpperCase() }}</v-card-title>
      <v-card-text>{{data.queja}}</v-card-text>
      <v-card-actions>
        <v-btn color="info" block>Reclamar de vuelta</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Reclamo",
  props: ["data"]
};
</script>

<style>
</style>