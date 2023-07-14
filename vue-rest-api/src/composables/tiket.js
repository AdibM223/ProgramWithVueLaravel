import {ref} from "vue"
import axios from "axios";
import { useRouter } from "vue-router";

axios.defaults.baseURL = "http://127.0.0.1:8000/api/v1/";
export default function useTiket(){
    const tiket = ref([]); //skills
    const tiketku = ref([]); //skill
    const error = ref({});
    const router = useRouter();
const gettiket = async() => {
    const response = await axios.get("tiket")
    tiket.value = response.data.data;
}

const gettiketku = async (id) => {
    const response = await axios.get("tiket/" + id);
    tiketku.value = response.data.data;
}

const storetiket = async (data) => {
    try {
        await axios.post('tiket',data);
        router.push({name:"tiketIndex"})
    } catch (error) {
        if(error.response.status === 422){
            error.value = error.response.data.error
        }
    }
}



const updatetiket = async (id) =>{
    try {
        await axios.put('tiket/'+ id, tiketku.value);
        router.push({name:"tiketIndex"})
    } catch (error) {
        if(error.response.status === 422){
            error.value = error.response.data.error
        }
    }
}

const destroytiket = async(id)=> {
    if(!window.confirm("Are You Sure?"))
    {
        return;
    }
    await axios.delete('tiket/'+id);
    await gettiket();
}

return{
    tiket,
    tiketku, 
    gettiket, 
    gettiketku,
    storetiket, 
    updatetiket,
    destroytiket,
    error
};
}