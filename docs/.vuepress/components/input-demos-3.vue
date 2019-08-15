<template>
  <div style="padding-top: 16px;">
    <h2>提示信息</h2>

    <g-input value="错误状态提示消息" error="这是一个提示错误信息"></g-input>
    <g-input value="请在这里输入" v-model="message" ></g-input>
    <span class="vmodel">双向绑定:{{message}}</span>
    <p @click='show = !show' class="code">
      <strong>展示代码</strong>
    </p>
     <span v-if="show">
       <pre><code>{{content}}</code></pre>
     </span>
  </div>
</template>
<script>
  import Input from '../../../src/input'
  export default {
    components: {
      'g-input': Input
    },
    data () {
      return {
        content: `
         <g-input value="错误状态提示消息" error="这是一个提示错误信息"></g-input>
  ----------------------------
  <g-input value="请在这里输入" v-model="message" ></g-input>
  <span class="vmodel">双向绑定:{{message}}</span>
        `.replace(/^ {8}/gm, '').trim(),
        show:false,
        message:''
      }
    }
  }
</script>
<style scoped>
.code { 
    color:#409eff;
    cursor: pointer;
    user-select: none;
}
.vmodel{
  font-size: 12px;
  color: #50af51;
}
</style>
