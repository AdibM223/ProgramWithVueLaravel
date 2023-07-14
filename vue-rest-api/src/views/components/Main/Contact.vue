<template>
    
    <v-container  width="100%" id="contact" class="mt-10">
        <v-row  >
        <v-col cols="12">
            <h3 class="text-h3 text-center " :style="{ color: $vuetify.theme.themes.green.background}"> For More Information</h3>
        </v-col>
       <v-col cols="12" md="3" offset-md="2" class="text-end">
        <v-card
      width="700"
      height="200"
    > 
    <v-card-text>Jl. Fatmawati No.154, Tuntang, Semarang, Jawa Tengah 50773</v-card-text>
    <v-card-subtitle>marketing@salokapark.com</v-card-subtitle>
    <v-card-subtitle>(0298) 322266</v-card-subtitle>
    <v-card-subtitle>0878-3889-0777</v-card-subtitle>
    <v-col md="4" offset-md="4"><v-btn size="large"  elevation="8" rounded="lg" tile :style="{ color: $vuetify.theme.themes.green.background}" class=" d-flex  " dark  >Contact Us</v-btn></v-col>
    </v-card>
</v-col>
    </v-row>
    </v-container>
    


</template>
<script>
import { RouterLink, RouterView } from 'vue-router'
import '../Style/Style.vue'
</script>