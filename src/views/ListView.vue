<template>
  <Layout> 
      <div>
          <div v-for="item in this.data">
              <!-- <p>{{ item.resolutions.original.url }}</p> -->
          </div>
      </div>
  </Layout>
  </template>
  <script>
    export default {
      data() {
          return {
              data: null
          };
      },
      methods: {
          async getTest(){
          }
      },
      mounted(){
      }
  }
  </script>
  <style>
  </style>