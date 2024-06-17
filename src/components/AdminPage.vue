<template>
    <div>
     <h1>Add New Camping Spot</h1>
     <form @submit.prevent="addNewSpot">
         <label for="spotName">Spot Name:</label>
         <input type="text" id="spotName" v-model="newSpot.spotName"/>
         <br>
         <label for="spotDescription">Spot Description:</label>
         <textarea id="spotDescription" v-model="newSpot.spotDescription"></textarea>
         <br>
         <label for="spotLocation">Spot Location:</label>
         <input type="text" id="spotLocation" v-model="newSpot.spotLocation">
         <br>
         <button type="submit">Add New Spot</button>
    
     </form>
     <h1>All Camping Spots</h1>
     <ul>
         <li v-for="spot in spots" :key="spot.id">
             {{spot.spotName}} <br> {{spot.spotLocation}} <br> {{spot.spotDescription}}
         </li>
     </ul>
    </div>
 </template>
 <script>
 import axios from 'axios';
     export default{
         data(){
             return{
                 newSpot:{
                    spotId:0,
                     spotName:"",
                     spotDescription:"",
                     spotLocation:""
                 },
                 spots:[],
                 nextSpotId:1
             };
         },
         mounted(){
             this.getSpots();
         },
         methods:{
             async addNewSpot(){
                 try{
                    this.newSpot.spotId=this.nextSpotId;
                     const response = await axios.post("https://localhost:7036/Spot", this.newSpot);
                     
                     console.log(response.data);
                     this.newSpot={
                        spotId:0,
                         spotName:"",
                         spotDescription:"",
                         spotLocation:""
                     };
                     this.getSpots();}
                     catch(error){
                         console.error(error);
                     }
                 },
                 async getSpots(){
                     try{
                         const response = await axios.get("https://localhost:7036/Spot");
                         this.spots=response.data;
                         if (this.spots.length > 0) {
          let maxId = 0;
          for (let spot of this.spots) {
            if (spot.spotId > maxId) {
              maxId = spot.spotId;
            }
          }
          this.nextSpotId = maxId + 1;}
        }

                         catch(error){
                             console.error(error);
                         }
                     }
                 }
             }
         
 </script>