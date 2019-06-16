# vue_counter

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).



----------------------------------------------------------------------------------------------------------

vue开发分为两个部分，
分别是 组件开发（协作）      vuex数据管理（整个应用程序的数据流 难）

store 超市  
new Vuex.Store({
  state
})

中央 组件 地方
对于状态：
读 this.$store.state.count
写 actions,mutations getters,
vuex不是什么时候都要，但是大项目离不开vuex
公司的概念
CEO 旅梦   state 100w
财务 mutations 唯一可以修改state的地方
审核一下，对状态的修改是否是被允许的

- Vue 实现核心mvvm，其他的通过Vue.use()插入进去
  this.$store
  this.$router
读完成
写？


- data() 将会被state取代
  data 只是自身状态的数据
  methods 改变状态的方法之后，会是actions

