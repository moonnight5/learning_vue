<template>
  <div id="app">
    clicked {{$store.state.count}} times,count is {{evenOrOdd}}
    <Button @click="increment">+</Button>
    <Button @click="decrement">-</Button>
    <Button @click="incrementIfOdd">increment if odd</Button>
    <Button @click="incrementAsync">increment async</Button>
  </div>
</template>

<script>
// 借
import { mapActions,mapGetters } from 'vuex'
export default {
  name: 'App',
  // computed: {
  //   evenOrOdd() {
  //     return this.$store.state.count % 2 === 0 ? 'odd' : 'even'
  //   如果有多处要用到奇数偶数判断怎么办？
  //   }
   
  // },
  computed: mapGetters([
      'evenOrOdd'
    ]),
  methods: mapActions([
    'increment',
    'decrement',
    'incrementIfOdd',
    'incrementAsync'
  ])
}
</script>

<style>

</style>
