<template>
  <div class="col-wrapper" :class="colClass" :style="colStyle" >
    <div class="col">
      <slot></slot>
    </div>
  </div>
</template>
<script>
  let validator = (value)=>{
    let keys = Object.keys(value)
    let valid = true
    keys.forEach((key)=>{
      if(!['span','offset'].includes(key)){
        valid = false
      }
    })
    return valid
  }
  export default {
    name:'gulu-col',
    props:{
      span:{
        type:[Number,String],
        default: 24
      },
      offset:{
        type:[Number,String]
      },
      ipad:{ type: Object, validator,},
      narrowPc:{ type: Object, validator,},
      pc:{ type: Object, validator,},
      widePc:{ type: Object, validator,},
    },
    data() {
      return {
        gutter:{
          type:[Number,String]
        }
      }
    },
    methods: {
      createClasses (obj,str = ''){
        let array = []
        if(!obj){return []} //如果pc没写，就是 undfined ,没办法获取 undfined 的属性
        if(obj.span){
          array.push(`col-${str}${obj.span}`)
        }
        if(obj.offset){
          array.push(`offset-${str}${obj.offset}`)
        }
        return array
      }
    },
    computed: {
      colStyle(){
        let {gutter} = this
        return {paddingLeft:gutter/2+'px',paddingRight:gutter/2+'px'}
      },
      colClass(){
        let {span,offset,ipad,narrowPc,pc,widePc} = this
        let createClasses = this.createClasses
        return [
          ...createClasses({span,offset}),
          ...createClasses(ipad,'ipad-'),
          ...createClasses(narrowPc,'narrow-pc-'),
          ...createClasses(pc,'pc-'),
          ...createClasses(widePc,'wide-pc-'),
        ]
      }
    },
  }
    
</script>

<style scoped lang="scss">
  .col-wrapper {
    height: 36px;
  }
  .col {
    height: 100%;
  }
  .col-wrapper{
    $class-prefix:col-;
    @for $n from 1 through 24{
      &.#{$class-prefix}#{$n}{
        width: ($n/24)*100%
      }
    }
    $class-prefix:offset-;
    @for $n from 1 through 24{
      &.#{$class-prefix}#{$n}{
        margin-left: ($n/24)*100%
      }
    }
    @media(min-width:577px){
      $class-prefix:col-ipad-;
      @for $n from 1 through 24{
        &.#{$class-prefix}#{$n}{
          width: ($n/24)*100%
        }
      }
      $class-prefix:offset-ipad-;
      @for $n from 1 through 24{
        &.#{$class-prefix}#{$n}{
          margin-left: ($n/24)*100%
        }
      }
    }
    @media(min-width:769px){
      $class-prefix:col-narrow-pc-;
      @for $n from 1 through 24{
        &.#{$class-prefix}#{$n}{
          width: ($n/24)*100%
        }
      }
      $class-prefix:offset-narrow-pc-;
      @for $n from 1 through 24{
        &.#{$class-prefix}#{$n}{
          margin-left: ($n/24)*100%
        }
      }
    }
    @media(min-width:993px){
      $class-prefix:col-pc-;
      @for $n from 1 through 24{
        &.#{$class-prefix}#{$n}{
          width: ($n/24)*100%
        }
      }
      $class-prefix:offset-pc-;
      @for $n from 1 through 24{
        &.#{$class-prefix}#{$n}{
          margin-left: ($n/24)*100%
        }
      }
    }
    @media(min-width:1201px){
      $class-prefix:col-wide-pc-;
      @for $n from 1 through 24{
        &.#{$class-prefix}#{$n}{
          width: ($n/24)*100%
        }
      }
      $class-prefix:offset-wide-pc-;
      @for $n from 1 through 24{
        &.#{$class-prefix}#{$n}{
          margin-left: ($n/24)*100%
        }
      }
    }
  }
</style>