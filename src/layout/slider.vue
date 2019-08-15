<template>
  <div class="slider">
    <slot>Slider</slot>
  </div>
</template>

<script>
  export default {
    name:'gulu-slider',
    data(){
      return {
      }
    }
  }
</script>

<style lang='scss' scoped>
  .slider{
    text-align: center;
    background: #666;
    width: 120px;
    display: flex;
    align-items:center;
    justify-content: center;
    font-size: 20px;
  }
</style>