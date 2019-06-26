<!-- # vue-chart-demo

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

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader). -->


----------------------------------------------------------------------------------------------------------------

- vuex 大型化由modules来支持，
  this.$store.user.     来找数据
- user
  state        info 登录 注册 退出 （登录后获取session，用户拿到cookie）
  actions
  mutations
  vuex先设计,搭好结构，围绕着我们的状态
  token 令牌环 访问：this.$store.user.token 如果没有，跳转到登录页面？
- 登录鉴权
  1. 延迟加载路由，性能优化
  2. 
