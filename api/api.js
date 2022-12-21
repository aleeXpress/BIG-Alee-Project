import axios from "axios"
async function getAllGuns() {
  const guns = await axios.get("http://localhost:1337/api/guns")
  return  guns.data.data.flat()
}

async function getGuns(id){
    const guns = await axios.get(`http://localhost:1337/api/guns/${id}`)
    return guns.data.data
}
export {getAllGuns,getGuns}


