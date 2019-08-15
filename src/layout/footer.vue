<template>
  <div class="footer">
    <slot>Footer</slot>
  </div>
</template>

<script>
  export default {
    name:'gulu-footer',
    data(){
      return {
      }
    }
  }
</script>

<style lang='scss' scoped>
  .footer{
    height: 15vh;
    background: #888;
    display: flex;
    align-items:center;
    justify-content: center;
    font-size: 20px;
  }
</style>