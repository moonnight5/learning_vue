<template>
  <div class="hello">
    <Menu></Menu>
    <Button size="large" @click.native="handleClick">
      按钮
    </Button>
  </div>
</template>

<script>
import button from '@/components/com/button'
import menu from '@/components/com/menu'
export default {
  name: 'HelloWorld',
  provide () {
    return {
      name: this.obj
    }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      obj: {
        name: '蜗牛'
      }
    }
  },
  methods: {
    handleClick (e) {
      // console.log(e)
    }
  },
  components: {
    'Button': button,
    'Menu': menu
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
