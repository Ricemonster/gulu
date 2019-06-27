<template>
<div class="wrapper" :class="{error:error}" >
  <input type="text" :placeholder ="value" :disabled="disabled" :readonly="readonly" 
    @change="$emit('change', $event.target.value)"
    @input="$emit('input', $event.target.value)"
    @focus="$emit('focus', $event.target.value)"
    @blur="$emit('blur', $event.target.value)"
  >
  <!--  $event.target.value 实现v-model双向绑定 -->
  <!-- $emit中第一个为事件名，第二个为给用户的第一个参数，后面还可以添加阐述 -->
  <template v-if="error">
    <Icon name="error" class="icon-error" ></Icon>
    <span class="errorMessage" >{{error}}</span>
  </template>
</div>
</template>
<script>
import Icon from './icon'
export default {
    name: 'gulu-input',
    components:{Icon},
    props:{
      value: {
        type: String
      },
      disabled: {
        type: Boolean,
        default: false
      },
      readonly: {
        type: Boolean,
        default: false
      },
      error: {
        type: String
      }
    }
    // 有无default 决定是否要传参数
}
</script>
<style lang="scss" scoped>
  $height: 32px;
  $border-color: #999;
  $border-color-hover:#666;
  $font-size: 12px;
  $box-shadow-color: rgba(0,0,0,0.5);
  $red: #F1453D;
  .wrapper{
      font-size: $font-size;
      // 居中代码
      display: inline-flex;
      align-items: center;
      > :not(:last-child) {margin-right: .5em}
      > input{
        height: 32px;
        border: 1px solid $border-color;
        border-radius: 4px;
        padding: 0 8px;
        font-size: inherit;
        &:hover{
        border-color: $border-color-hover;
        }
        &:focus{
          box-shadow: inset 0 1px 3px $box-shadow-color;
        }
        &[disabled], &[readonly]{
          border-color: #aaa;
          color: #aaa;
          cursor: not-allowed;
        }
    }
    &.error{
      > input{border-color: $red;}
    }
    .icon-error{fill:$red}
    .errorMessage{color:$red}
}

</style>
