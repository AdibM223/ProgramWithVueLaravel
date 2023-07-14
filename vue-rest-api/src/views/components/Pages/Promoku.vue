<template>
    <NavbarWahana />
    

    <v-card min-height="600" class="mt-8 align-center justify-center">
        <container fluid>
            <h1 class=" text-h1 text-center"    :style="{ color: $vuetify.theme.themes.orange.background}"> PROMO</h1>
            <v-sheet
      class="mx-auto"
      elevation="8"
      max-width="800"
    >
      <v-slide-group
        v-model="model"
        class="pa-4"
        selected-class="bg-primary"
        multiple
        show-arrows
      >
        <v-slide-group-item
        v-for="tiket in tiket"
            :key="tiket.id"
          v-slot="{ isSelected, toggle, selectedClass }"
        >
          <v-card
            color="grey-lighten-1"
            :class="['ma-4', selectedClass]"
            height="400"
            width="500"
            @click="toggle"
          >
            <div class="d-flex fill-height align-center justify-center">
              <v-scale-transition>
                
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
  
      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>
  
          
        </div>
      </v-expand-transition>
    </v-card>
              </v-scale-transition>
            </div>
          </v-card>
        </v-slide-group-item>
      </v-slide-group>
    </v-sheet>
        </container>
        
    </v-card>
    <Footer />
  </template>
  <script setup>
  import Footer from '../Footer.vue'
import NavbarWahana from '../NavbarWahana.vue'
   
    import useTiket from '../../../composables/tiket';
    import {onMounted} from 'vue';

const {tiket, gettiket} = useTiket();

onMounted(() => gettiket());
  </script>
  <script>
  export default {
      data: () => ({
        model: null,
      }),
    }
    </script>