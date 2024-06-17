<template>
    <div id="change">
        
       
        <li v-for="booking in bookings" :key="booking.bookingId">
            Booking ID:{{ booking.bookingId }}
            Spot ID:{{ booking.spotId }}
        </li>
        <button @click="changeCred ">Change credentials</button>
        <img src="../assets/14reason.png" alt="two woman and tents">
    </div>
</template>
<script>
import axios from 'axios';
export default{
    props:{
        userId:{
            type:Number,
            required:true,
        },
        bookId:{
            type:Number,
            required:true,
        }
    },
    data(){
        return{
            bookings:[],
        };
    },
    methods:{
        async getBookings(){
            try{
                const bookingResponse = await axios.get(`https://localhost:7036/Booking/myBooking?userId=${this.userId}`);
                console.log("Booking",bookingResponse.data);
                this.bookings=bookingResponse.data;
            }catch(error){
                console.error(error);

            }
        },
    changeCred(){
        this.$parent.changeActivePage('profile');
    }},
        mounted(){
            this.getBookings();
        },
    };

</script>
<style>
#change{
    position: absolute;
    top:120px;
}
</style>
