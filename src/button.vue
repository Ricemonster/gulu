<template>
    <button class="g-button" :class="{[`icon-${iconPosition}`]: true}"
    @click="$emit('click')">
        <g-icon v-if="icon && !loading" :name="icon"></g-icon>
        <g-icon v-if="loading" class="loading icon" name="loading"></g-icon>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>
<script>
import Icon from './icon'

export default {
    name: 'gulu-button',
    components:{
        'g-icon': Icon
    },
    // props:['icon','iconPosition']
    props:{
        icon:{},
        loading:{   
            type: Boolean,
            default: false
        },
        iconPosition:{
            type: String,
            default: 'left',
            validator(value){
                return value === 'left' || value === 'right'
            }
        }
    }
}
</script>
<style lang="scss" scoped>
$font-size: 14px;
$button-height: 32px;
$button-bg: white;
$button-active-bg: #eee;
$border-radius: 4px;
$color: #333;
$border-color: #999;
$border-color-hover: #666;
@keyframes spin{
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
.g-button{
    height: $button-height;
    font-size: $font-size;
    padding: 0 1em;
    margin:1px;
    border-radius: $border-radius;
    border: 1px solid $border-color;
    background: $button-bg;
    // 弹性盒和文字对齐
    display: inline-flex;justify-content: center;align-items:center;
    vertical-align: middle;
    &:hover{border-color: $border-color-hover}
    &:active{background-color: $button-active-bg}
    &:focus{outline: none;}
    // 默认为icon在slot的前面
    > .icon{order: 1;margin-right: .1em;margin-top: .2em;}
    > .content{order: 2}
    &.icon-right{
        > .icon{
        order: 2
        }
        > .content{
            order: 1;margin-right:0;margin-right: .1em;
        }
    }
    .loading{
        animation: spin 1s infinite linear;
    }
}
</style>
