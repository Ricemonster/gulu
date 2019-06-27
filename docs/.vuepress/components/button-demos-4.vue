<template>
  <div style="padding-top: 16px;">
    <h2>按钮组</h2>

    <g-button-group>
        <g-button icon="left">上一页</g-button>
        <g-button>...</g-button>
        <g-button icon="right" icon-position="right">下一页</g-button>
    </g-button-group>

    <p @click='show = !show' class="code">
      <strong>展示代码</strong>
    </p>
     <div v-if="show">
       <pre><code>{{content}}</code></pre>
     </div>
  </div>
</template>
<script>
  import ButtonGroup from '../../../src/button-group'
  import Button from '../../../src/button'
  export default {
    components: {
      'g-button': Button,
      'g-button-group': ButtonGroup
    },
    data () {
      return {
        content: `
            <g-button-group>
                <g-button icon="left">上一页</g-button>
                <g-button>...</g-button>
                <g-button icon="right" icon-position="right">下一页</g-button>
            </g-button-group>
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
