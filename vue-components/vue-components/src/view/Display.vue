<template>
  <div>
    <h3>动态渲染 .vue 文件的组件 --display</h3>
    <Display :code="code"></Display>
  </div>
</template>

<script>
import display from '@/components/com/display'
import defaultCode from './default-code'
export default {
  components: {
    'Display': display
  },data() {
    return {
      code: defaultCode  
    }
  },
}
</script>

<style>

</style>
