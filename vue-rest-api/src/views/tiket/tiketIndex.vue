<script setup>
import NavbarAdmin from '../components/NavbarAdmin.vue'
import Footer from '../components/Footer.vue'
import usetiket from '../../composables/tiket';
import {onMounted} from 'vue';

const {tiket, gettiket, destroytiket} = usetiket();

onMounted(() => gettiket());
</script>
<template>
    <NavbarAdmin />
    <v-card min-height="500" >
        <div class="mt-12">
    <div class="flex justify-end m-2 p-2">
        <RouterLink :to="{path: '/tiket/create'}"  class="px-4 py-2 mr-4 bg-indigo-500 hover:bg-indigo-700 rounded text-white">New tiket</RouterLink>
    </div>
<div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Nama Promo
                </th>
                <th scope="col" class="px-6 py-3">
                    Tanggal Mulai
                </th>
                <th scope="col" class="px-6 py-3">
                    Tanggal Selesai
                </th>
                <th scope="col" class="px-6 py-3">
                    Keterangan Promo
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
            v-for="tiket in tiket"
            :key="tiket.id" 
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                
                <td class="px-6 py-4">
                    {{tiket.nama_promo}}
                </td>
                <td class="px-6 py-4">
                    {{tiket.tanggal_mulai}}
                </td>
                <td class="px-6 py-4">
                    {{tiket.tanggal_selesai}}
                </td>
                <td class="px-6 py-4">
                    {{tiket.keterangan_promo}}
                </td>
                <td class="px-6 py-4">
                    <img v-if="tiket.gambar" :src="'./images/promo/'+tiket.gambar" width="100">                    
                    
                    
                </td>
                <td class="px-6 py-4">
                    <RouterLink :to="{name:'tiketDetail',params: {id:tiket.id}}"  class="px-4 py-2 mr-4 bg-blue-500 hover:bg-indigo-700 rounded text-white">Upload Gambar</RouterLink>
                </td>
                <td class="px-6 py-4">
                    
                    <RouterLink :to="{name:'tiketUpdate',params: {id:tiket.id}}"  class="px-4 py-2 mr-4 bg-green-500 hover:bg-indigo-700 rounded text-white">Edit tiket</RouterLink>
                    <button @click="destroytiket(tiket.id)" class="px-4 py-2 mr-4 bg-red-500 hover:bg-indigo-700 rounded text-white">Delete tiket</button>
                </td>
                
            </tr>
        </tbody>
    </table>
</div>

</div>
    </v-card>

<Footer />
</template>

