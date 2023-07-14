<script setup>
import useWahana from '../../composables/wahana';

import {onMounted} from 'vue';

const {wahanaku, getWahanaku, updateWahana,error} = useWahana();

const props = defineProps ({
    id:{
        required:true,
        type:String
    }
})

onMounted(() => getWahanaku(props.id));
</script>
<template>
<div class="mt-12">
    <form class="max-w-md mx-auto p-4 bg-white shadow-md rounded-md" @submit.prevent="updateWahana($route.params.id)">
        <div class="space-y-6">
            <div>
            <label for="nama_wahana" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama Wahana</label>
            <input type="text" id="nama_wahana" v-model="wahanaku.nama_wahana" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required>
        </div>
        <div>
            <label for="biaya_masuk" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tiket Masuk Wahana</label>
            <input type="text" id="biaya_masuk" v-model="wahanaku.biaya_masuk" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required>
        </div>
        <div>
            <label for="gambar" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gambar</label>
            <input type="text" id="gambar" v-model="wahanaku.gambar" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required>
        </div>
        <div class="mt-4">
            <button type="submit" class="px-4 py-2 mr-4 bg-indigo-500 hover:bg-indigo-700 rounded text-white">Input</button>
        </div>
        </div>
    </form>
</div>
</template>