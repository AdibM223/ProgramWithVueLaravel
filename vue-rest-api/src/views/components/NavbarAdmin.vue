<template>
    <v-app-bar :elevation="18" app color="#f39f19" dark flat class="px-8">
        
        <v-btn icon>
            <v-img src="https://salokapark.com/build/assets/logo-saloka.b0108ccb.svg"> </v-img>
           
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn text><RouterLink :to="{name:'home'}"  >Home</RouterLink> </v-btn>
        <v-btn text><RouterLink :to="{name:'wahanaIndex'}"  >Kelola Wahana</RouterLink></v-btn>
        <v-btn text><RouterLink :to="{name:'tiketIndex'}"  >Kelola Tiket</RouterLink> </v-btn>
        
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