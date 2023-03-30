import axios from "axios";

const randomNamesAPI = `https://randomuser.me/api?nat=BR&exc=login,
info,location,email,phone,cell,id,picture,gender,dob,registered,nat`;

export async function generateName(){
  try{
    const { data } = await axios.get(randomNamesAPI);
    return data.results[0].name.first;
  }catch(error){
    console.log({error});
    return "Cassio";
  }
}