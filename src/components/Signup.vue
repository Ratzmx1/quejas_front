<template>
  <div>
    <br />
    <h1 class="display-2 text-center">Signup</h1>
    <v-container>
      <v-row>
        <v-col cols="6" offset="3">
          <v-form>
            <v-text-field
              :rules="rules"
              v-model="name"
              @keyup.enter="signup"
              type="text"
              label="Name"
            />

            <v-text-field v-model="birthDate" label="Birth Date" type="date" />

            <v-text-field
              :rules="rules"
              v-model="city"
              @keyup.enter="signup"
              type="text"
              label="City"
            />

            <v-text-field
              :rules="rulesEmail"
              v-model="email"
              @keyup.enter="signup"
              type="email"
              label="Email"
            />

            <v-text-field
              :rules="rules"
              v-model="password"
              @keyup.enter="signup"
              type="password"
              label="Password"
            />

            <v-text-field
              :rules="ruleCPas"
              v-model="confirmPassword"
              type="password"
              label="confirmPassword"
            />
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
      confirmPassword: "",
      rules: [
        value => !!value || "Required",
        value => (value && value.length >= 3) || "Minimo 3 caracteres"
      ],
      rulesEmail: [
        value => !!value || "Required",
        value =>
          (value &&
            isemail.validate(value) &&
            value.split("@")[1].split(".").length === 2) ||
          "Invalid email"
      ],
      ruleCPas: [
        value => !!value || "Required",
        value => (value && value === this.password) || "Passwords must match"
      ]
    };
  },
  watch: {},
  methods: {
    signup() {
      axios
        .post("http://localhost:3030/user/signup", {
          // .post("http://5784c572b97c.ngrok.io/user/signup", {
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
            this.$router.push("/");
          } else {
            console.log(res);
          }
        })
        .catch(e => {
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
      const nname = this.name.length > 2;
      const nbirthDate = this.birthDate.length > 7;
      const ncity = this.city.length > 2;
      const npassword = this.password.length > 2;
      const nconfPass = this.confirmPassword === this.password;
      return nemail && nname && nbirthDate && ncity && npassword && nconfPass;
    }
  }
};
</script>

<style></style>
