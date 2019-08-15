<template>
  <div style="padding-top: 16px;">
    <h2>混合布局</h2>
    <p class="p1">通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。</p>
    <div class="div1" style="padding-top: 20px;">
   <g-row gutter="20" >
        <g-col span="15"><div class="grid-content bg-purple"></div></g-col>
        <g-col span="7"><div class="grid-content bg-purple"></div></g-col>
    </g-row>
    <br>
    <g-row gutter="20" >
        <g-col span="7"><div class="grid-content bg-purple"></div></g-col>
        <g-col span="7"><div class="grid-content bg-purple"></div></g-col>
        <g-col span="3"><div class="grid-content bg-purple"></div></g-col>
        <g-col span="3"><div class="grid-content bg-purple"></div></g-col>
    </g-row>
    <br>
    <g-row gutter="20" >
          <g-col span="3"><div class="grid-content bg-purple"></div></g-col>
        <g-col span="15"><div class="grid-content bg-purple"></div></g-col>
        <g-col span="3"><div class="grid-content bg-purple"></div></g-col>
    </g-row>
    <br>

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
        <g-row gutter="20" >
            <g-col span="15"><div class="grid-content bg-purple"></div></g-col>
            <g-col span="7"><div class="grid-content bg-purple"></div></g-col>
        </g-row>
        <br>
        <g-row gutter="20" >
            <g-col span="7"><div class="grid-content bg-purple"></div></g-col>
            <g-col span="7"><div class="grid-content bg-purple"></div></g-col>
            <g-col span="3"><div class="grid-content bg-purple"></div></g-col>
            <g-col span="3"><div class="grid-content bg-purple"></div></g-col>
        </g-row>
        <br>
        <g-row gutter="20" >
            <g-col span="3"><div class="grid-content bg-purple"></div></g-col>
            <g-col span="15"><div class="grid-content bg-purple"></div></g-col>
            <g-col span="3"><div class="grid-content bg-purple"></div></g-col>
        </g-row>
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
 .g-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
.div1{
    border: 1px solid #ebebeb;
}
 .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
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
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
