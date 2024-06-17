<template>
  <div>
    <h1>Sign up</h1>
    <form @submit.prevent="register">
      <label for="firstName">First Name:</label>
      <input type="text" id="firstName" v-model="firstName" />
      <br />
      <label for="lastName">Last Name:</label>
      <input type="text" id="lastName" v-model="lastName" />
      <br />
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" />
      <br />
      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password" />
      <br />
      <button type="submit">Sign up</button>
      <img src="../assets/family.jpg" alr="family at camping">
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'RegistrationForm',
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    };
  },
  methods: {
    async register() {
      try {
        const response = await axios.post('https://localhost:7036/register', {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          password: this.password,
        });
        console.log('Registration successful', response.data);
        this.$parent.changeActivePage("login");
      } catch (error) {
        console.error('Error', error);
      }
    },
  },
};
</script>
