import { defineStore } from "pinia";

export const useHeaderStore = defineStore('header', {
    state:() => ({                              
        favourite: null 
    }),
    actions:{
        async getFavourite(){
            const URL = 'http://localhost:3000/favourite'
            const response = await fetch(URL)
            this.favourite = await response.json() || null
        }
    }
})