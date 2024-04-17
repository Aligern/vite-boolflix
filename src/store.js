import { reactive } from "vue";

export const store = reactive({
    // this is our api url
    apiUrl: 'https://api.themoviedb.org/3/',
    // these are our api endpoints:
    endPoint: {
        movie: 'search/movie',
        tv: 'search/tv'
    },
    options: {
        params: {
            // this is our personal API key:
            api_key: '72b9f59bb742a327478b7837ff8f5382',
            query: 'ciao',
        }
    },
    // this is our image url base path
    ImageUrl: 'http://image.tmdb.org/t/p/original',
    
});