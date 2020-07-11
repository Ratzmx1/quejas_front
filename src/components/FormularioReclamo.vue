<template>
  <div>
    <h1 class="display-2 text-center">Relamar a {{ $route.params.id }}</h1>

    <v-container>
      <v-row>
        <v-col cols="6" offset="3">
          <v-form>
            <v-textarea
              :rules="rules"
              @keyup.enter="queja"
              v-model="queja"
              type="text"
              label="Ingrese su reclamo"
            />
            <br />
            <v-btn color="primary" @click="realizarReclamo" :disabled="disable" block>Reclamar</v-btn>
            <br />
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "FormularioReclamo",
  data() {
    return {
      rules: [
        value => !!value || "Required",
        value => (value && value.length >= 15) || "Minimo 15 caracteres"
      ],
      disable: true,
      queja: ""
    };
  },
  watch: {
    queja() {
      if (this.queja.length >= 15) {
        this.disable = false;
      } else {
        this.disable = true;
      }
    }
  },
  methods: {
    realizarReclamo() {
      if (this.queja.length >= 15) {
        axios
          .post(
            "http://localhost:3030/queja/send",
            {
              queja: this.queja,
              user: this.$route.params.id
            },
            { headers: { authorization: this.$store.state.token } }
          )
          .then(res => {
            if (res.data.message) {
              this.$router.push("/");
            } else {
              console.log("queja erronea");
            }
          });
      }
    }
  }
};
</script>

<style>
</style>