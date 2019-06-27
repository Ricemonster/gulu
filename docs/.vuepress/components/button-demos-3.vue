<template>
  <div style="padding-top: 16px;">
    <h2>状态按钮</h2>

    <g-button :disabled="true">禁用</g-button>
    <g-button :loading="true">加载</g-button>

    <p @click='show = !show' class="code">
      <strong>展示代码</strong>
    </p>
     <div v-if="show">
       <pre><code>{{content}}</code></pre>
     </div>
  </div>
</template>
<script>
  import Button from '../../../src/button'
  export default {
    components: {
      'g-button': Button
    },
    data () {
      return {
        content: `
          <g-button :disabled="true">禁用</g-button>
          <g-button :loading="true">加载</g-button>
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
