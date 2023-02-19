<template>
  <div>
      <div>
          <v-row justify="space-around">
      <v-col cols="auto">
        <v-dialog
          transition="dialog-bottom-transition"
        >
          <template v-slot:activator="{ props }">
            <v-btn
              class="btnOfList"
              variant="text"
              v-bind="props"
              >List of
              <v-badge v-if="headerStore?.favourite?.length" :content="headerStore?.favourite?.length" color="error" floating>
                <v-icon 
              size="small"
              dark>mdi-heart</v-icon>
              </v-badge>
              <v-icon v-else
              size="small"
              dark>mdi-heart</v-icon>
            </v-btn>
          </template>
          <template v-slot:default="{ isActive }">
            <v-card>
              <v-toolbar
                class="toolbar_title"
                title="List of favourites"
              ></v-toolbar>
              <v-card-text>
                  <div class="chart_wrapper">
                      <div class="chart__inner">
                              <div v-for="item in headerStore.favourite">
                                  <router-link :to="`/${shows}/${item.id}`">
                                      <img :src="item?.image?.medium">
                                      <h2 class="nameofmovei">{{ item.name }}</h2>
                                      <div class="ex">
                                          <v-btn 
                                          @click.prevent="deleteFavourite(item)"
                                          class="inChartClass"
                                          variant="plain">
                                          <span>Delete</span>
                                            <v-icon class="icon___vtfy" dark>mdi-delete</v-icon>
                                        </v-btn>
                                      </div>
                                  </router-link>
                              </div>
                      </div>
                </div>
              </v-card-text>
              <v-card-actions class="justify-end">
                <v-btn
                  class="black--text"
                  variant="text"
                  color="primary"
                  @click="isActive.value = false"
                >Close</v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>
      </v-col>
          </v-row>
      </div>
  </div>
</template>
<script>
import { mapStores } from 'pinia';
import { useInputStore } from '../stores/getdata.js'
import { useHeaderStore } from '../stores/header';
export default {
data() {
  return {
    routePath: false,
    dialog: false,
    shows: 'shows'
  }
},
methods: {
  async deleteFavourite(show){
    const options = {
      method: 'DELETE'
    }
    const URL = `http://localhost:3000/favourite/${show.id}`
    const response = await fetch(URL, options)
    const data = await response.json()
    const index = this.headerStore.favourite.findIndex(i => i.id === show.id);
    this.headerStore.favourite.splice(index, 1);
  }
},
components:{
  // 'v-card':Card
},
watch:{
  favourite(){
      this.headerStore.favourite
  }
},
computed: {
    ...mapStores(useHeaderStore, useInputStore)
},
}
</script>
<style >
.v-btn--variant-elevated, .v-btn--variant-flat{
  color: white !important;
  background: black !important;
  height: 0 !important ;
}
.chart__inner{
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 5%;
  row-gap: 40px ;
}
.v-btn.inChartClass{
background: red;
/* color: white ; */
}
.v-col{
  padding: 0 !important;
}
.v-btn__content {
  color: white !important;
}
.btnOfList{
  height: 24px !important;
}
.nameofmovei{
color: black ;
}
.v-btn.black--text{
background: #18181890;
}
.v-toolbar.toolbar_title{
color: white;
font-weight: 600;
background: #18181890;
}
</style>