<template>
  <div style="padding-top: 16px;">
    <h2>基础布局</h2>
    <p class="p1">使用单一分栏创建基础的栅格布局。</p>
    <div class="div1" style="padding-top: 20px;">
        <g-row>
            <g-col class="g-col"></g-col>
        </g-row>
        <br />
        <g-row>
            <g-col  span="12" class="cleft"></g-col>
            <g-col span="12" class="cright"></g-col>
        </g-row>
        <br />
        <g-row>
            <g-col span="8" class="cleft"></g-col>
            <g-col span="8" class="cright"></g-col>
            <g-col span="8" class="cleft"></g-col>
        </g-row>
        <br />
        <g-row>
            <g-col span="6" class="cleft"></g-col>
            <g-col span="6" class="cright"></g-col>
            <g-col span="6" class="cleft"></g-col>
             <g-col span="6" class="cright"></g-col>
        </g-row>
        <br>
         <g-row>
            <g-col span="4" class="cleft"></g-col>
            <g-col span="4" class="cright"></g-col>
            <g-col span="4" class="cleft"></g-col>
            <g-col span="4" class="cright"></g-col>
            <g-col span="4" class="cleft"></g-col>
            <g-col span="4" class="cright"></g-col>
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
             <g-row>
            <g-col class="g-col"></g-col>
        </g-row>
        <br />
        <g-row>
            <g-col  span="12" class="cleft"></g-col>
            <g-col span="12" class="cright"></g-col>
        </g-row>
        <br />
        <g-row>
            <g-col span="8" class="cleft"></g-col>
            <g-col span="8" class="cright"></g-col>
            <g-col span="8" class="cleft"></g-col>
        </g-row>
        <br />
        <g-row>
            <g-col span="6" class="cleft"></g-col>
            <g-col span="6" class="cright"></g-col>
            <g-col span="6" class="cleft"></g-col>
             <g-col span="6" class="cright"></g-col>
        </g-row>
        <br>
         <g-row>
            <g-col span="4" class="cleft"></g-col>
            <g-col span="4" class="cright"></g-col>
            <g-col span="4" class="cleft"></g-col>
            <g-col span="4" class="cright"></g-col>
            <g-col span="4" class="cleft"></g-col>
            <g-col span="4" class="cright"></g-col>
        </g-row>
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
.p1{
    font-size: 15px;
}
.div1{
    border: 1px solid #ebebeb;
}
.g-col{
    background: #99a9bf;
}
.cleft{
 background: #d3dce6;
}
.cright{
 background: #e5e9f2;
}
</style>
