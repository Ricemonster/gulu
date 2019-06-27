<template>
  <div style="padding-top: 16px;">
    <h2>图标按钮</h2>

    <g-button icon="setting">设置</g-button>
    <g-button icon="info">信息</g-button>
    <g-button icon="error">警告</g-button>
    <g-button icon="left">左</g-button>
    <g-button icon="right" iconPosition="right">右</g-button>
    <g-button icon="bottom">下拉</g-button>
    <g-button icon="thumbs-up">点赞</g-button>
    <g-button icon='download'>下载</g-button>

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
          <g-button icon="setting">设置</g-button>
          <g-button icon="info">信息</g-button>
          <g-button icon="error">警告</g-button>
          <g-button icon="left">左</g-button>
          <g-button icon="right" iconPosition="right">右</g-button>
          <g-button icon="bottom">下拉</g-button>
          <g-button icon="thumbs-up">点赞</g-button>
          <g-button icon='download'>下载</g-button>
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
