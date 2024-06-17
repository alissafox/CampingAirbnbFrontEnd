<template>
  <div id="app">
    <nav>
    <ul>
      <li v-for="page in this.pages" :key="page.id">
        <button @click="changeActivePage(page.id)" :disabled="page.disabled">
          {{ page.text }}
        </button>
      </li>
    </ul>
    </nav>

    <PageHome v-if="this.activePage == 'home'" />
    <RegistrationForm v-if="this.activePage == 'registration'" @changePage="changeActivePage"/>
    <LoginForm v-if="this.activePage == 'login'" @changePage="changeActivePage"/>
    <SpotList v-if="this.activePage == 'spots'" :user-id="userId"/>
    <UserInformation v-if="this.activePage =='book'" :user-id="userId" :book-id="bookId"/>
    <UserProfile v-if="this.activePage=='profile'" :user-id="userId"/>
    <AdminPage v-if="this.activePage=='admin'"/>
    
  </div>
</template>
<script>

import RegistrationForm from './components/RegistrationForm.vue'
import LoginForm from './components/LoginForm.vue';
import PageHome from './components/PageHome.vue';
import SpotList from './components/SpotList.vue';
import UserInformation from './components/UserInformation.vue';
import UserProfile from './components/UserProfile.vue';
import AdminPage from './components/AdminPage.vue';



export default {
  name: 'App',
  components: {
    RegistrationForm,
    LoginForm,
    PageHome,
    SpotList,
    UserInformation,
    UserProfile,
    AdminPage
},
  data() {
      return {
        "activePage" : "home",
        "pages" : [
          {
            id: "home",
            text: "Home",
            disabled: false
          },
          {
            id: "registration",
            text: "Registration",
            disabled: false
          },
          {
            id: "login",
            text: "Login",
            
          },
          // {
          //   userId:null,
          //   bookId:null,
            
       
          // },
          {
            id:"book",
            text:"User information",
            disabled:true
            
          },
          {
            id:"profile",
            text:"Profile",
            disabled:false
          },
          {
            id:"admin",
            text:"Admin",
            disabled:true
          }
          
          
          
        ]
      }
    },
    methods: {
      changeActivePage(page) {
        this.activePage = page;
      },
      setUserId(userId){
        this.userId=userId;
        this.changeActivePage('spots');
      },
      showBookSpot(bookingId){
        this.bookId=bookingId;
        this.pages.find(page=>page.id==='book').disabled=false;
        this.changeActivePage('book');
      }
      
      
    }
  }

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

nav{
  background-color: #f8f8f8;
  padding: 0px 0;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
ul{
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
}
li{
  margin: 0 10px;
}
button{
  background-color: #14f6aecc;
  color: white;
  border: #2c3e50;
  padding: 10px 20px;
  cursor: pointer;
  font-size: medium;
  border-radius: 5px;
}
button:disabled{
  background-color: #cccc;
}
button:hover:enabled{
  background-color: #1b78b7;
}
</style>
