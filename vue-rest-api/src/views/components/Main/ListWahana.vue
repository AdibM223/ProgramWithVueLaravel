<template>
    <v-card width="100%" >
        <v-col  id="wahana" class="text-center" >
   <h1 class=" text-h1"   :style="{ color: $vuetify.theme.themes.orange.background}"> WAHANA</h1>
   <v-col  class="text-end" md="3" offset-md="5">
   <v-btn tile :style="{ color: $vuetify.theme.themes.orange.background}" dark><RouterLink :to="{name:'WahanaPages'}">View All</RouterLink></v-btn>
 </v-col>
 </v-col>
        <v-card  style="background: linear-gradient(#f39f19, #169870)" width="100%">
       
       

   

 <v-container >
  <v-row no-gutters>
 <v-col
 v-for="wahana in wahana"
            :key="wahana.id" 
   cols="12"
   sm="4"
 >
   <v-sheet class="ma-2 pa-2">
    <img v-if="wahana.gambar" :src="'./images/'+wahana.gambar"  class="align-end text-white"
 height="200">  
 <v-card-title>{{wahana.nama_wahana}}</v-card-title>
<v-card-subtitle> Harga Tiket masuk : Rp.{{wahana.biaya_masuk}}</v-card-subtitle>
   </v-sheet>
 </v-col>
  </v-row>
</v-container>

</v-card>
    </v-card>
    
 
</template>
<script setup>
import '../Style/Style.vue'
import useWahana from '../../../composables/wahana';
import {onMounted} from 'vue';

const {wahana, getWahana, destroyWahana} = useWahana();

onMounted(() => getWahana());
</script>