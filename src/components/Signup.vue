<template>
  <div>
    <br />
    <h1 class="display-2 text-center">Signup</h1>
    <v-container>
      <v-row>
        <v-col cols="6" offset="3">
          <v-form>
            <v-text-field v-model="name" @keyup.enter="signup" type="text" label="Name" />

            <v-text-field v-model="birthDate" label="Birth Date" type="date" />

            <v-text-field v-model="city" @keyup.enter="signup" type="text" label="City" />

            <v-text-field v-model="email" @keyup.enter="signup" type="email" label="Email" />

            <v-text-field
              v-model="password"
              @keyup.enter="signup"
              type="password"
              label="Password"
            />

            <v-text-field v-model="confirmPassword" type="password" label="confirmPassword" />
            <br />
            <v-btn color="primary" @click="signup" :disabled="!setAllFields" block>Signup</v-btn>
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
  name: "Signup",
  data() {
    return {
      name: "",
      birthDate: "",
      city: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  },
  watch: {},
  methods: {
    signup() {
      axios
        .post("http://localhost:3030/user/signup", {
          name: this.name,
          birthDate: this.birthDate,
          city: this.city,
          email: this.email,
          password: this.password
        })
        .then(response => {
          const res = response.data;
          if (res.token) {
            this.$store.dispatch("updateSesion", {
              bol: true,
              tok: res.token
            });
            localStorage.setItem("token", res.token);
          } else {
            console.log(res);
          }
        })
        .catch(e => {
          console.log(e.message);
          const i = e.message.split(" ").findIndex(it => it === "code");
          if (i) {
            const code = e.message.split(" ")[i + 1];
            if (code === "300") {
              console.log("User already regisred");
            } else {
              console.log(e.message);
            }
          } else {
            console.log(e.message);
          }
        });
    }
  },
  computed: {
    setAllFields: function() {
      const nemail = isemail.validate(this.email);
      const nname = this.name.length > 0;
      const nbirthDate = this.name.length > 0;
      const ncity = this.city.length > 0;
      const npassword = this.password.length > 0;
      const nconfPass = this.confirmPassword === this.password;
      return nemail && nname && nbirthDate && ncity && npassword && nconfPass;
    }
  }
};
</script>

<style></style>
