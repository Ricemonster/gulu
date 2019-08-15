<template>
  <div style="padding-top: 16px;padding-bottom: 16px;">
    <h2>响应式布局</h2>
    <p class="p1">参照了 Element-UI 的 响应式设计，预设了四个响应尺寸：<span>ipad</span>
    <span>pc</span>
    <span>narrow-pc</span>
    <span>wide-pc</span>
    <div class="div1" style="padding-top: 20px;">
        <g-row :gutter="10">
            <g-col pc="12"><div class="grid-content bg-purple"></div></g-col>
            <g-col><div class="grid-content bg-purple-light"></div></g-col>
            <g-col><div class="grid-content bg-purple"></div></g-col>
            <g-col><div class="grid-content bg-purple-light"></div></g-col>
        </g-row>

    </div>

     <p @click='show = !show' class="code">
      <strong>展示代码</strong>
    </p>
     <span v-if="show">
       <pre><code>{{content}}</code></pre>
     </span>
  </div>
</template>
<script>
import Col from "../../../src/grid/col";
import Row from "../../../src/grid/row";
  export default {
    components: {
      "g-col": Col,
      "g-row": Row
    },
    data () {
      return {
        content: `
      代码还在施工中......
        `.replace(/^ {8}/gm, '').trim(),
        show:false
      }
    }
  }
</script>
<style scoped lang='scss'>
.code { 
    color:#409eff;
    cursor: pointer;
    user-select: none;
}
.p1{
    font-size: 15px;
}
span{
    display: inline-block;
    border: 1px solid #eef1fb;
    background-color: #f9fafc;
    padding: 2px;
    border-radius: 4px;
}
 .g-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
.div1{
    border: 1px solid #ebebeb;
}
  .g-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>
