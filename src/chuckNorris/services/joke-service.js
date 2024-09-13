import axios from "axios";


const http = axios.create({baseURL:'https://api.chucknorris.io'});


export class JokeService {

    getAllCategories() {
        return http.get('/jokes/categories');
    }

    getJokeByCategory(category) {
        return http.get(`/jokes/random?category=${category}`);
    }
}