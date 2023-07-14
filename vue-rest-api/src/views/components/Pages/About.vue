<template>
    <NavbarAdmin />
    <v-card min-height="500" class=" mt-5">
       
      <v-row >
        <v-col cols="12" class=" ml-4">
            <v-img src="logo-dark.jpg" contain  max-height="400"></v-img>
        </v-col>
        <v-col cols="12">
            <h1 class="text-dark text-h1 text-center" style="color: #f39f19; ;">SALOKA THEME PARK</h1>
        </v-col>
        <v-col cols="12" align-self="center">
            <p class="text-p text-center" :style="{ color: $vuetify.theme.themes.green.background}">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"</p>
        </v-col>
        <v-col cols="12"></v-col>
      </v-row>
    </v-card>
    <Footer />
</template>

<script setup>
import Footer from '../Footer.vue'
import NavbarAdmin from '../NavbarKontak.vue'
</script>