import { defineStore } from 'pinia'
// import { ref, computed } from 'vue'

export const useInputStore = defineStore('input', {
    state: () => ({
        movieInputs: '',
        resultMovie: '',
        personInputs: '',
        controller: new AbortController(),
        headerHeight: 0,
    }),
    actions:{
        // async getData(state) {
        //     const routeName = this.$route.path
        //     // if ( this.$route.path == '/shows' ) {
        //     //     routeName = '/shows'
        //     // }else if (this.$route.path == '/people' ){
        //     //     routeName = '/people'
        //     // }  
        //     console.log(routeName);
        //     const url = `https://api.tvmaze.com/search/${routeName}?q=`
        //     const response = await fetch(`${url}${state.movieInputs}`, {
        //       method: 'GET',
        //       signal: this.controller.signal
        //     })
        //     const data = await response.json()
        //     state.resultMovie = await data.map(item => ({
        //       ...item.show
        //     }))
        // },
        // requestCancel(){
        //     this.controller.abort()
        //     this.controller = new AbortController()
        //     this.getData()
        // }
    },
})
