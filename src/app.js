import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import Group from './button-group'
import Input from './input'
import Row from './grid/row'
import Col from './grid/col'
import Layout from './layout/layout'
import Header from './layout/header'
import Content from './layout/content'
import Slider from './layout/slider'
import Footer from './layout/footer'

// 全局注册
Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.component('g-button-group',Group)
Vue.component('g-input',Input)
Vue.component('g-row',Row)
Vue.component('g-col',Col)
Vue.component('g-layout',Layout)
Vue.component('g-header',Header)
Vue.component('g-footer',Footer)
Vue.component('g-slider',Slider)
Vue.component('g-content',Content)


new Vue({
    el:'#app',
    data:{
        loading1: true,
        message: ''
    },
    methods: {
      inputChange (e){
        console.log(e.target.value)
      }
    }
})


// 单元测试 : 用代码测试代码
import chai from 'chai'
import spies from 'chai-spies'
chai.use(spies)

// ------------------------------------

const expect = chai.expect
{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'settings'
    }
  })
  vm.$mount()
  let useElement = vm.$el.querySelector('use')
  let href = useElement.getAttribute('xlink:href')
  expect(href).to.eq('#i-settings')
  vm.$el.remove()
  vm.$destroy()
}
{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'settings',
      loading: true
    }
  })
  vm.$mount()
  let useElement = vm.$el.querySelector('use')
  let href = useElement.getAttribute('xlink:href')
  expect(href).to.eq('#i-loading')
  vm.$el.remove()
  vm.$destroy()
}
{
  const div = document.createElement('div')
  document.body.appendChild(div)
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'settings'
    }
  })
  vm.$mount(div)
  let svg = vm.$el.querySelector('svg')
  let {order} = window.getComputedStyle(svg)
  expect(order).to.eq('1')
  vm.$el.remove()
  vm.$destroy()
}
{
  const div = document.createElement('div')
  document.body.appendChild(div)
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'settings',
      iconPosition: 'right'
    }
  })
  vm.$mount(div)
  let svg = vm.$el.querySelector('svg')
  let {order} = window.getComputedStyle(svg)
  expect(order).to.eq('2')
  vm.$el.remove()
  vm.$destroy()
}
{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        icon: 'settings',
      }
    })
    vm.$mount()
    let spy = chai.spy(function(){})
  
    vm.$on('click', spy)
    // 希望这个函数被执行
    let button = vm.$el
    button.click()
    expect(spy).to.have.been.called()
  }