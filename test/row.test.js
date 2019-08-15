const expect = chai.expect;
import Vue from 'vue'
import Row from '../src/grid/row.vue'
import Col from '../src/grid/col.vue'


Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', () => {
  it('存在.', () => {
    expect(Row).to.be.exist
  })
  it('接受gutter属性.', (done) => {
    Vue.component('z-row',Row)
    Vue.component('z-col',Col)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
      <z-row gutter="20">
        <z-col span="12"></z-col>
        <z-col span="12"></z-col>
      </z-row>
    `
    const vm = new Vue({
      el: div
    })
    setTimeout(()=>{ 
      const row = vm.$el.querySelector('.row')
      expect(getComputedStyle(row).marginRight).to.eq('-10px')
      expect(getComputedStyle(row).marginLeft).to.eq('-10px')
      const cols = vm.$el.querySelectorAll('.col-wrapper')
      expect(getComputedStyle(cols[0]).paddingRight).to.eq('10px')
      expect(getComputedStyle(cols[1]).paddingLeft).to.eq('10px')
      done()
      vm.$el.remove()
      vm.$destroy()
    })
  })
  it('接收 align 属性',()=>{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Row)
    const vm = new Constructor({
      propsData:{
        align: 'right'
      }
    }).$mount(div)
    const element = vm.$el
    expect(getComputedStyle(element).justifyContent).to.eq('flex-end')
    div.remove()
    vm.$destroy()
  })
})