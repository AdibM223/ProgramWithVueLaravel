<script setup>
import {reactive} from 'vue'
import useTiket from '../../composables/tiket';

const {storetiket, error} = useTiket();

const form =  reactive({
    nama_promo:"",
    tanggal_mulai:"",
    tanggal_selesai:"",
    keterangan_promo:"",
    gambar:"",
})
</script>
<template>
<div class="mt-12">
    <form class="max-w-md mx-auto p-4 bg-white shadow-md rounded-md" @submit.prevent="storetiket(form)">
        <div class="space-y-6">
            <div>
            <label for="nama_promo" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama Promo</label>
            <input type="text" id="nama_promo" v-model="form.nama_promo" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required>
        </div>
        <div>
            <label for="tanggal_mulai" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tanggal Mulai Promo</label>
            <input type="date" id="tanggal_mulai" v-model="form.tanggal_mulai" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required>
        </div>
        <div>
            <label for="tanggal_selesai" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tanggal Selesai Promo</label>
            <input type="date" id="tanggal_selesai" v-model="form.tanggal_selesai" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required>
        </div>
        <div>
            <label for="keterangan_promo" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Keterangan Promo</label>
            <input type="text" id="keterangan_promo" v-model="form.keterangan_promo" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required>
        </div>

        <div class="mt-4">
            <button type="submit" class="px-4 py-2 mr-4 bg-indigo-500 hover:bg-indigo-700 rounded text-white">Input</button>
        </div>
        </div>
    </form>
</div>
</template>