import {ref} from "vue"
import axios from "axios";
import { useRouter } from "vue-router";

axios.defaults.baseURL = "http://127.0.0.1:8000/api/v1/";
export default function useWahana(){
    const wahana = ref([]); //skills
    const wahanaku = ref([]); //skill
    const error = ref({});
    const router = useRouter();
const getWahana = async() => {
    const response = await axios.get("wahana")
    wahana.value = response.data.data;
}

const getWahanaku = async (id) => {
    const response = await axios.get("wahana/" + id);
    wahanaku.value = response.data.data;
}

const storeWahana = async (data) => {
    try {
        await axios.post('wahana',data);
        router.push({name:"wahanaIndex"})
    } catch (error) {
        if(error.response.status === 422){
            error.value = error.response.data.error
        }
    }
}



const updateWahana = async (id) =>{
    try {
        await axios.put('wahana/'+ id, wahanaku.value);
        router.push({name:"wahanaIndex"})
    } catch (error) {
        if(error.response.status === 422){
            error.value = error.response.data.error
        }
    }
}

const destroyWahana = async(id)=> {
    if(!window.confirm("Are You Sure?"))
    {
        return;
    }
    await axios.delete('wahana/'+id);
    await getWahana();
}

return{
    wahana,
    wahanaku, 
    getWahana, 
    getWahanaku,
    storeWahana, 
    updateWahana,
    destroyWahana,
    error
};
}