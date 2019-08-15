<template>
  <div style="padding-top: 16px;">
    <h2>禁用,只读</h2>

    <g-input value="禁用状态" :disabled="true"></g-input>
     <g-input value="只读状态" :readonly="true"></g-input>

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
        <g-input value="禁用状态" :disabled="true"></g-input>
<g-input value="只读状态" :readonly="true"></g-input>
        `.replace(/^ {8}/gm, '').trim(),
        show:false
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
</style>
