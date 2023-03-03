<template>
  <div>
      <div class="castMainWrap">
          <div>  
              <div>
                  <img :src="cast?.character?.image?.medium" alt="">
              </div>
              <div>
                  <span>{{ cast?.character?.name }}</span>
              </div>
          </div>
          <div>
          </div>
          <div>  
              <div>
                  <img :src="cast?.person?.image?.medium" alt="">
              </div>
              <div>
                  <span>{{ cast?.person?.name }}</span>
              </div>
          </div>
      </div>
  </div>
</template>
<script>

export default {
  props:{
      cast:{
          type: Object,
          default: null
      }
  }
}
</script>
<style>
  .castMainWrap{
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 50px;
  }
</style>