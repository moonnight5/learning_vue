<template>
  <div>
    <counter />
  </div>
</template>
<script>
// 两个兄弟组件，共享count数据

import Counter from './components/Counter';
// import CounterBrother from './components/CounterBrother';
export default {
  data() {
    return {
      count: 0
    }
  },
  components: {
    'counter': Counter,
    // 'counter-brother': CounterBrother
  },
  methods: {
    // incrementCounter () {
    //   this.count++;
    // }
  },
}
</script>
<style>
  
</style>
