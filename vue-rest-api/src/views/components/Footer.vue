<template>
  
    <v-footer :style="{ background: $vuetify.theme.themes.green.background}">
      <v-row justify="center" no-gutters>
        
        <v-col class="text-center mt-4" cols="12">
          {{ new Date().getFullYear() }} — <strong>Saloka Theme Park</strong>
        </v-col>
      </v-row>
    </v-footer>
  </template>
  <script>
    export default {
      data: () => ({
        
      }),
    }
  </script>