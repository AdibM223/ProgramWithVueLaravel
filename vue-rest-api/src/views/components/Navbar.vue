<template>
    <v-app-bar :elevation="18" app color="#f39f19" dark flat class="px-8">
        
        <v-btn icon>
            <v-img src="https://salokapark.com/build/assets/logo-saloka.b0108ccb.svg"> </v-img>
           
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn text @click="scroll('home')">Home</v-btn>
        <v-btn text @click="scroll('wahana')">Wahana</v-btn>
        <v-btn text @click="scroll('promotion')">Promotion</v-btn>
        <v-btn text @click="scroll('contact')">Contact</v-btn>
        <v-btn text><RouterLink :to="{name:'wahanaIndex'}"  >Kelola Aset</RouterLink></v-btn>
    </v-app-bar>
</template>
<script>
export default {
    methods:{
        scroll(refName){
            const element = document.getElementById(refName);
            element.scrollIntoView({behavior:"smooth"})
        }
    }
}
</script>
<style>
</style>