<script setup>
import Footer from '../components/Footer.vue'
import NavbarAdmin from '../components/NavbarAdmin.vue'
import useWahana from '../../composables/wahana';
import {onMounted} from 'vue';

const {wahana, getWahana, destroyWahana} = useWahana();

onMounted(() => getWahana());
</script>
<template>
    <NavbarAdmin />
    <v-card height="500">
        <div class="mt-12">
    <div class="flex justify-end m-2 p-2">
        <RouterLink :to="{path: '/wahana/create'}"  class="px-4 py-2 mr-4 bg-indigo-500 hover:bg-indigo-700 rounded text-white">New Wahana</RouterLink>
    </div>
<div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Nama Wahana
                </th>
                <th scope="col" class="px-6 py-3">
                    Harga Tiket Wahana
                </th>
                <th scope="col" class="px-6 py-3">
                    Gambar
                </th>
                <th scope="col" class="px-6 py-3">
                    Upload Gambar
                </th>
                <th scope="col" class="px-6 py-3">
                    Aksi
                </th>
            </tr>
        </thead>
        <tbody>
            <tr 
            v-for="wahana in wahana"
            :key="wahana.id" 
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                
                <td class="px-6 py-4">
                    {{wahana.nama_wahana}}
                </td>
                <td class="px-6 py-4">
                    {{wahana.biaya_masuk}}
                </td>
                <td class="px-6 py-4">
                    <img v-if="wahana.gambar" :src="'./images/'+wahana.gambar" width="100">                    
                    
                    
                </td>
                <td class="px-6 py-4">
                    <RouterLink :to="{name:'wahanaDetail',params: {id:wahana.id}}"  class="px-4 py-2 mr-4 bg-blue-500 hover:bg-indigo-700 rounded text-white">Upload Gambar</RouterLink>
                </td>
                <td class="px-6 py-4">
                    <RouterLink :to="{name:'wahanaUpdate',params: {id:wahana.id}}"  class="px-4 py-2 mr-4 bg-green-500 hover:bg-indigo-700 rounded text-white">Edit Wahana</RouterLink>
                    <button @click="destroyWahana(wahana.id)" class="px-4 py-2 mr-4 bg-red-500 hover:bg-indigo-700 rounded text-white">Delete Wahana</button>
                </td>
                
            </tr>
        </tbody>
    </table>
</div>

</div>
    </v-card>
    <Footer />
</template>

