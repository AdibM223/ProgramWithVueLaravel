<template>
    <NavbarWahana />
    

    <v-card min-height="600" class="mt-8 align-center justify-center">
        <container fluid>
            <h1 class=" text-h1 text-center"    :style="{ color: $vuetify.theme.themes.orange.background}"> WAHANA</h1>
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
        v-for="wahana in wahana"
            :key="wahana.id"
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
                
                <v-sheet class="ma-2 pa-2">
    <img v-if="wahana.gambar" :src="'./images/'+wahana.gambar"  class="align-end text-white"
 height="200">  
 <v-card-title>{{wahana.nama_wahana}}</v-card-title>
<v-card-subtitle> Harga Tiket masuk : Rp.{{wahana.biaya_masuk}}</v-card-subtitle>
   </v-sheet>
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
  <script>
export default {
    data: () => ({
      model: null,
    }),
  }
  </script>
  <script setup>
  
  import Footer from '../Footer.vue'
import NavbarWahana from '../NavbarWahana.vue'
   
    import useWahana from '../../../composables/wahana';
    import {onMounted} from 'vue';

const {wahana, getWahana} = useWahana();

onMounted(() => getWahana());
  </script>