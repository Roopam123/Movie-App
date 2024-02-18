import axios from "axios";

const BASE_URl = "https://api.themoviedb.org/3";

const TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZWU3ZTViZjQ4NDBiNDAyZTliZjA0YjQ5YWExOWM5YyIsInN1YiI6IjY1ZDFmOTNmZGI3MmMwMDE2MzM5MzE5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RgruM4VUFywToBgbouHXvq0lA3tcMrJS3JplFNT1byI"


const headers = {
    authorization:"bearer " + TOKEN
};

export const fetchDataFromApi = async (url,params)=>{
    try {
        const {data} = await axios.get(BASE_URl+url,{headers,params})
        return data;
    } catch (error) {
        console.log(error);   
    }
};