
<template>
 <v-card   width="100%">
<v-col  id="promotion" class="text-center">
        <h1 class=" text-h1" :style="{ color: $vuetify.theme.themes.green.background}"> PROMO</h1>
        <v-col md="3" offset-md="5" class="text-end">
        <v-btn tile :style="{ color: $vuetify.theme.themes.green.background}" dark><RouterLink :to="{name:'PromoPages'}">View All</RouterLink></v-btn>
      </v-col>
      </v-col>


      <v-container>

        

    <v-row no-gutters>
      <v-col
      v-for="tiket in tiket"
            :key="tiket.id"
        cols="12"
        sm="4"
      >

    <v-card
      class="mx-auto"
      max-width="344"
    >
      
      <img v-if="tiket.gambar" :src="'./images/promo/'+tiket.gambar" 
 height="200px" cover> 
  
 <v-card-title>{{tiket.nama_promo}}</v-card-title>
  
      <v-card-subtitle>
        {{ tiket.tanggal_mulai }} - {{ tiket.tanggal_selesai }}
      </v-card-subtitle>
      <v-card-text>
            {{ tiket.keterangan_promo }}
          </v-card-text>
  
      <v-card-actions>
        <v-btn
          color="orange-lighten-2"
          variant="text"
        >
          Explore
        </v-btn>
  
        <v-spacer></v-spacer>
  
        <v-btn
          :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
          @click="show = !show"
        ></v-btn>
      </v-card-actions>
  
      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>
  
          
        </div>
      </v-expand-transition>
    </v-card>
</v-col>
    </v-row>
  </v-container>
    

</v-card>
  </template>
  <script setup>
    
    import '../Style/Style.vue'
import {onMounted} from 'vue';
import usetiket from '../../../composables/tiket';
const {tiket, gettiket} = usetiket();

onMounted(() => gettiket());
  </script>