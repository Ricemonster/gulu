<template>
  <div style="padding-top: 16px;">
    <h1>基础布局</h1>
    
    <h3>上中下布局</h3>
      <g-layout>
          <g-layout>
              <g-header>header</g-header>
              <g-content>content</g-content>
              <g-footer>footer</g-footer>
          </g-layout>
      </g-layout>

    <p @click='show = !show' class="code">
      <strong>展示代码</strong>
    </p>
     <span v-if="show">
       <pre><code>{{content}}</code></pre>
     </span>
  </div>
</template>
<script>
import Layout from "../../../src/layout/layout";
import Header from "../../../src/layout/header";
import Content from "../../../src/layout/content";
import Slider from "../../../src/layout/slider";
import Footer from "../../../src/layout/footer";
  export default {
    components: {
       "g-layout": Layout,
        "g-header": Header,
        "g-content": Content,
        "g-slider": Slider,
        "g-footer": Footer
    },
    data () {
      return {
        content: `
          <g-layout>
            <g-layout>
                <g-header>header</g-header>
                <g-content>content</g-content>
                <g-footer>footer</g-footer>
            </g-layout>
          </g-layout>
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
