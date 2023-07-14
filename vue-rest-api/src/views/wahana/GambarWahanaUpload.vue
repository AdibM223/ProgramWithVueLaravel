<template>
<div>
    <h3> Upload Foto Wahana</h3>
    <img :src="previewimage" width="300" />
    <div class="input-group">
        <input type="file" name="gambar" @change="upload">
    </div>
    <button @click="submit">Upload</button>
</div>
</template>
<script>
import axios from 'axios'
import { useRouter } from "vue-router";
const router = useRouter();
export default {
    props: ['id'],
    data(){
        return{
            previewimage: null,
            gambar:null
        }
    },
    methods:{
        upload(e){            
        let files = e.target.files[0]
        this.previewimage = URL.createObjectURL(files)
        this.gambar = files
        },
        submit(){
            let formData= new FormData()
            formData.append('gambar',this.gambar)
           axios.post('http://127.0.0.1:8000/api/wahana/gambar/'+this.id,formData).then(
            response => {
                console.log(response)
                this.$router.push({
                    name : 'wahanaIndex',
                    
                })
            }
           )
        }
    }
}
</script>