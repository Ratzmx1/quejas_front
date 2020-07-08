<template>
  <div>
    <br />
    <h1 class="display-2 text-center">Login</h1>
    <v-container>
      <v-form>
        <v-text-field
          @keyup.enter="login"
          v-model="email"
          type="email"
          required
          placeholder="Email"
        ></v-text-field>
        <v-text-field
          v-model="password"
          @keyup.enter="login"
          type="password"
          required
          placeholder="Password"
        ></v-text-field>

        <br />
        <v-btn color="primary" @click="login" :disabled="false" block>Login</v-btn>
        <br />
        <v-alert v-if="showAlert" color="red darken-3" dark>{{ alertMessage }}</v-alert>
        <v-alert v-if="loged" color="success">You're Loged in</v-alert>
      </v-form>
    </v-container>
  </div>
  <!-- 6335339 -->
</template>

<script>
import * as isemail from "isemail";
import axios from "axios";

export default {
  data() {
    return {
      email: "",
      password: "",
      disableButton: true,
      showAlert: false,
      alertMessage: "",
      loged: false
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
              this.showAlert = false;
              this.loged = true;
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
