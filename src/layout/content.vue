<template>
  <div class="content">
    <slot>Content</slot>
  </div>
</template>

<script>
  export default {
    name:'gulu-content',
    data(){
      return {
      }
    }
  }
</script>

<style lang='scss' scoped>
  .content{
    flex-grow: 1;
    background: #bbb;
    display: flex;
    align-items:center;
    justify-content: center;
    font-size: 20px;
  }
</style>