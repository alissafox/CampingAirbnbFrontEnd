<template>
    <div>
        <h1>Login</h1>
        <form @submit.prevent="login">
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="email">
            <br>
            <label for ="password">Password:</label>
            <input type = "password" id="password" v-model="password">
            <br>
            <button type="submit">Login</button>
            <img src="../assets/company.jpg" alt="friends at camping">
        </form>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name: 'LoginForm',
    data(){
        return{
            email:"",
            password:""
        };
    },
    methods: {
    async login() {
      try {
        if (this.email=='admin@test'&&this.password=='admin'){
          this.$parent.changeActivePage("admin");
        }
        else{
        const response = await axios.post('https://localhost:7036/login', {
          email: this.email,
          password: this.password,
        });
        const userId=response.data.userId;
        this.$parent.setUserId(userId);
        console.log('Login successful', response.data);
        this.$parent.changeActivePage("spots");}
      } catch (error) {
        console.error('Error', error);
      }
    },
},
}
</script>