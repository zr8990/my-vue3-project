import { ref } from 'vue'
import axios from 'axios' 
let dogList = ref<string[]>([])
let dogListMore = ref<string[]>([])
export default  function() {
    async function getDogImg(){

        try{ 
            await axios.get('https://dog.ceo/api/breeds/image/random').then(res =>{
            console.log('res',res)
            dogList.value.push(res.data.message)
            })
        } catch(err){ 
        }
    }

    async function getDogMore(){
        // 
        try{ 
            await axios.get('https://dog.ceo/api/breed/hound/afghan/images').then(res =>{
            console.log('res--更多图片',res)
            dogListMore.value=res.data.message
            })
        } catch(err){ 
        }
    }

    return {dogList,getDogImg,dogListMore,getDogMore}
}