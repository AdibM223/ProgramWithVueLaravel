<script setup>
import {reactive} from 'vue'
import useWahana from '../../composables/wahana';

const {storeWahana, error} = useWahana();

const form =  reactive({
    nama_wahana:"",
    biaya_masuk:"",
})





</script>
<template>
<div class="mt-12">
    <form class="max-w-md mx-auto p-4 bg-white shadow-md rounded-md" @submit.prevent="storeWahana(form)">
        <div class="space-y-6">
            <div>
            <label for="nama_wahana" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama Wahana</label>
            <input type="text" id="nama_wahana" v-model="form.nama_wahana" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nama Wahana" required>
        </div>
        <div>
            <label for="biaya_masuk" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tiket Masuk Wahana</label>
            <input type="text" id="biaya_masuk" v-model="form.biaya_masuk" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Biaya Masuk" required>
        </div>
        
        <div class="mt-4">
            <button type="submit" class="px-4 py-2 mr-4 bg-indigo-500 hover:bg-indigo-700 rounded text-white">Input</button>
        </div>
        </div>
    </form>
</div>
</template>