<template>
    <svg class="icon">
      <use :xlink:href="`#i-${name}`"></use>
    </svg>
</template>
<script>
// 本地svg,不用用户自己引用
import './svg'

export default {
    name: 'gulu-icon',
    props:['name']
}
</script>
<style lang="scss" scoped>
.icon{height: 1em;width: 1em;}
</style>

