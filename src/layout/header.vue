<template>
  <div class="header">
    <slot>Header</slot>
  </div>
</template>

<script>
  export default {
    name:'gulu-header',
  }
</script>

<style lang='scss' scoped>
  .header{
    background: #333333;
    text-align:center;
    height: 10vh;
    display: flex;
    align-items:center;
    justify-content: center;
    font-size: 20px;
  }
</style>