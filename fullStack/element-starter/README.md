大前端全栈开发思路

在前端vue项目目录下，建一个server用来做MVC就好

- 前后端分离
  后端提供/api在server目录下
  前端src/
  后端就是负责API服务

- server
  npm init -y
  yarn add express


1. 后端在3000，未来等着ngnix将80端口指向3000  启动 /api API服务等着前端调用   / vue打包好的dist目录 index.html readFile返    回
2. 前端一般在8080端口，负责vue-router vuex axios
3. 前后端连调 api数据 -> vue组件的data
4. 跨域 前端面试最重要的问题
   domain域名，
   端口 cross domain 
   前端不允许 安全问题
   前端考虑，页面上显示的东西要安全
   后端考虑

- 前端
  book.douban.com
  www.douban.com
  subdomain:domain：port都一样
  js同源机制（相同的源是值得信赖的）
  前后端 8080:3000 跨域
  不跨 fetch('/api/user/login') 404
  3000 /api/ proxy 代理
  /api/ 匹配 
  target: http://localhost:3000/api,
  changeOrigin: true
  发出去的请求也不跨