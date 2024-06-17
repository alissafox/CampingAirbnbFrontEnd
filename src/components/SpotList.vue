<template>
    <div>
        <h1>
            Spots
        </h1>
       
        <ul>
            <li v-for="(spot,index) in spots" :key="index">
                {{ spot.spotName }} <br> {{ spot.spotLocation }} <br> {{ spot.spotDescription }}
                <br>
                <button @click="bookSpot(spot)">Book</button>
                <!-- <p>Spot ID: {{ spot}}</p> -->
                
            </li>
           
        </ul>
    </div>
</template>
<script>
import axios from "axios";
export default{
    props:{
        userId:{
            type:Number,
            required:true,
        },
    },
    data(){
        return{
            spots:[],
            
        };
    },
   
methods:{
    async getspots(){
        try{
            const response = await axios.get("https://localhost:7036/Spot");
            
            this.spots = response.data;
        } 
        catch(error){
            console.error("Error",error);
        }
        },
    async bookSpot(spot){
        const spotId = spot.spotId;
    console.log('spotId:',spotId);
    console.log('this.userId:', this.userId);
        try{
            const response = await axios.post(`https://localhost:7036/Booking/book?userId=${this.userId}&spotId=${spotId}`);
            console.log("Succes",response.data,spot)
            const bookingResponse = await axios.get(`https://localhost:7036/Booking/myBooking?userId=${this.userId}`);
            const bookings = bookingResponse.data;
            const latestBooking = bookings[bookings.length-1];
            
            this.$parent.showBookSpot(latestBooking.bookingId);
        } 
        catch(error){
        console.error("Error",error);
    }
}
    },
    mounted() {
        this.getspots();
    },
   
}

</script>