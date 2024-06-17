<template>
    <div>
        <h1>
            Update Profile
        </h1>
        <form @submit.prevent="updateUser">
            <div>
                <label for="firstName">First Name:</label>
                <input type="text" v-model="user.firstName" id="firstName">
            </div>
            <div>
                <label for="lastName">Last Name:</label>
                <input type="text" v-model="user.lastName" id="lastName">
            </div>
            <div>
                <label for="email">Email:</label>
                <input type="text" v-model="user.email" id="email">
            </div>
            <div>
                <label for="password">Password:</label>
                <input type="text" v-model="user.password" id="password">
            </div>
            
            <button type="submit">Update</button>
            <img src="../assets/camp1.jpg" alt="tent at night">
            
        </form>
    </div>
</template>
<script>
import axios from 'axios';
export default{
    props:{
        userId:{
            type:Number,
            required:true,
        }
    },
    data(){
        return{
            user:{
                firstName:'',
                lastName:'',
                email:'',
                password:''
            }
        };
    },
    
    methods:{
        async detailsUser(){
            try{
                const response= await axios.get(`https://localhost:7036/getUsId/${this.userId}`);
                
                this.user=response.data}
                
                catch(error){
                    console.error(error);
                }
            },
        async updateUser(){
            try{
                const response = await axios.put(`https://localhost:7036/putUsId/${this.userId}`, this.user);
                console.log(response.data);
            }
            catch(error){
                console.error(error);
            }
        }

        },
        mounted(){
            this.detailsUser();
        },
        
    };

</script>
