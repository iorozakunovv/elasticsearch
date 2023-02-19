import { defineStore } from 'pinia'
// import { ref, computed } from 'vue'

export const useGenreStore = defineStore('genre', {
    state: () => ({
        genres:{
            Thriller:[],
            Comedy:[],
            Horror:[],
            Romantic:[],
            Drama:[],
            Action:[],
            Crime:[],
            Fantasy:[],
            Detective:[],
        }
    }),
    actions:{
     async getGenres(){
        const url = 'https://api.tvmaze.com/shows'
        const response = await fetch(url)
        const data = await response.json()
        this.genres.Thriller = await data.filter(item => item.genres[2] === 'Thriller')
        this.genres.Horror = await data.filter(item => item.genres[1] === 'Horror')
        this.genres.Crime = await data.filter(item => item.genres[1] === 'Crime')
        this.genres.Detective = await data.filter(item => item.genres[1] === 'Science-Fiction')
        this.genres.Comedy = await data.filter(item => item.genres[1] === 'Comedy')
        this.genres.Drama = await data.filter(item => item.genres[0] === 'Drama')
        this.genres.Romantic = await data.filter(item => item.genres[1] === 'Romance')
        this.genres.Fantasy = await data.filter(item => item.genres[1] === 'Fantasy')
        this.genres.Action = await data.filter(item => item.genres[1] === 'Action')
     }
    },
})
