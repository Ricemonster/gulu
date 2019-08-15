<template>
  <div style="padding-top: 16px;">
    <h2>全部Icon图标</h2>
    提供了一套常用的图标集合
    
    <h3>使用方法</h3>
    直接通过设置  <span class="code1">name</span>  参数来使用即可<br>


    <g-icon class="icon" name="thumbs-up"></g-icon>
    <g-icon class="icon" name="setting"></g-icon>
    <g-icon class="icon" name="info"></g-icon><br>
    <g-button class="btn" icon="thumbs-up">点赞</g-button>
    <p @click='show = !show' class="code">
      <strong>展示代码</strong>
    </p>
     <span v-if="show">
       <pre><code>{{content}}</code></pre>
     </span>
  </div>
</template>
<script>
    import Button from '../../../src/button'
    import Icon from '../../../src/icon'
  export default {
    components: {
      'g-icon': Icon,
      'g-button': Button
    },
    data () {
      return {
        content: `
        <g-icon name="thumbs-up"></g-icon>
<g-icon name="setting"></g-icon>
<g-icon name="info"></g-icon><br>
<g-button icon="thumbs-up">点赞</g-button>
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
.code1{
    font-size: 14px;
    color: #5e6d82;
    line-height: 1.5em;
}
.icon{
    margin-top: 20px;
}
.btn{
    margin-top:10px;
}
</style>
