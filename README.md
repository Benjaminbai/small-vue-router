# vue-router
realize vue-router

## 原理
1. 路由改变
2. 触发监听事件
3. 改变router里current变量
4. vue监听current的监视者
5. 获取到新的组件
6. render新组件

## hash和history
1. hash
    - #后面的就是hash的内容
    - 可以通过location.hash获取内容
    - 可以通过onhashchange监听hash的改变
2. history
    - 可以通过location.pathname获取内容
    - 可以通过onpopstate监听history的变化


## 手写分析
1. 包装导出插件供Vue.use使用
    - 如果参数里没有install这个属性，执行参数本身
    - 如果参数里有install这个属性，就只执行install
    - 如果use（）的参数接收参数，第一个参数会传Vue
2. VueRouter实例
3. main.js中注册
4. 两个全局组件

## 注意点
1. 要在每一个组件上挂载$router
2. router-view要想更新，必须保证路由的变化是响应式的，使用Vue.util.defineReactive解决