<template>
  <div>
    <br />
    <h1 class="display-2 text-center">Login</h1>
    <v-container>
      <v-row>
        <v-col cols="6" offset="3">
          <v-form>
            <v-text-field
              :rules="rulesEmail"
              @keyup.enter="login"
              v-model="email"
              type="email"
              label="Email"
            />

            <v-text-field
              :rules="rules"
              v-model="password"
              @keyup.enter="login"
              type="password"
              label="Password"
            />

            <br />
            <v-btn color="primary" @click="login" :disabled="disableButton" block>Login</v-btn>
            <br />
            <v-alert v-if="showAlert" color="red darken-3" dark>{{ alertMessage }}</v-alert>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </div>
  <!-- 6335339 -->
</template>

<script>
import * as isemail from "isemail";
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      disableButton: true,
      showAlert: false,
      alertMessage: "",
      rules: [
        value => !!value || "Required",
        value => (value && value.length >= 3) || "Minimo 3 caracteres"
      ],
      rulesEmail: [
        value => !!value || "Required",
        value => (value && isemail.validate(value)) || "Invalid email"
      ]
    };
  },
  watch: {
    email(value) {
      if (isemail.validate(value) && this.password.length > 0) {
        this.disableButton = false;
      } else {
        this.disableButton = true;
      }
    },
    password(value) {
      if (isemail.validate(this.email) && value.length > 0) {
        this.disableButton = false;
      } else {
        this.disableButton = true;
      }
    }
  },
  methods: {
    login() {
      if (isemail.validate(this.email) && this.password.length > 0) {
        axios
          .post("http://localhost:3030/user/login", {
            // .post("http://5784c572b97c.ngrok.io/user/login", {
            email: this.email,
            password: this.password
          })
          .then(res => {
            if (res.data.token) {
              localStorage.setItem("token", res.data.token);
              this.$store.dispatch("updateSesion", {
                bol: true,
                tok: res.data.token
              });
              this.$router.push("/");
            } else {
              this.showAlert = true;
              this.alertMessage = res.data.error;
            }
          })
          .catch(er => {
            this.showAlert = true;
            this.alertMessage = er.message;
          });
      }
    }
  }
};
</script>

<style></style>
