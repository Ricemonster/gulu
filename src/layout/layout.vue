<template>
  <div class="layout" :class="layoutClass">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name:'gulu-layout',
    data(){
      return {
        layoutClass:{
          hasSlider: false
        }
      }
    },
    mounted(){
      // Slider是否存在,查看组件名
      this.$children.forEach((vm)=>{
        if(vm.$options.name === 'gulu-slider'){
          this.layoutClass.hasSlider = true
        }
      })
    }
  }
</script>

<style lang='scss' scoped>
  .layout{
    height: 80vh;
    display: flex;
    flex-grow:1; 
    color:white;
    flex-direction: column;
    &.hasSlider{
      flex-direction:row;
    }
  }
</style>