# ONE-React

基于 React.js 技术栈重写 ONE·一个 手机站

# 声明

数据采用手动收集/三方接口，该项目只作为学习练手项目，没有作为商业用途，如果涉及侵权等请告知[作者](isiontom@gmail.com)，会将项目关闭

# 参考资料

## ONE·一个

[m.wufazhuce.com](http://m.wufazhuce.com/)

### 接口拓展

搜素接口

图文
http://v3.wufazhuce.com:8000/api/search/hp/[keyword]

阅读
http://v3.wufazhuce.com:8000/api/search/reading/[keyword]

音乐
http://v3.wufazhuce.com:8000/api/search/music/[keyword]

影视
http://v3.wufazhuce.com:8000/api/search/movie/[keyword]

列表滚动加载接口

http://v3.wufazhuce.com:8000/api/channel/music/more/0

下一屏的参数 -> 上一次数据的最后一个参数

## 构建工具

React.js 初步练习

*写写简单的Demo应该足够*

[create-react-app](https://github.com/facebookincubator/create-react-app)

```
npm install -g create-react-app

create-react-app my-app
cd my-app/
npm start
```

React.js 实际使用构建

[React-Study]()

## 技术栈

1. React.js
2. Redux
3. react-router

## 文件夹 & 相关内容

*这里的文件组织形式以及对应功能，主要参考 《深入React技术栈》*

- routes
- redux
- views
- components
- utils

### routes

这里控制本单页面应用程序的所有路由相关的内容

### redux

这里从各个页面/路由中获取对应的 reducer，在这里配合 redux middleware 以生成 store，给整个单页面应用程序提供数据源 store，并且把 store 中的数据按照页面/路由分发给各个页面顶层组件

### views

按照页面/路由的顶层组件

# 需求分析

随着学习 Redux ，在编写单页面应用程序时，首先需要考虑的就是路由的设置，在 ONE 的 React 的仿站编写中，还是维持原来的路由标准

## 页面 / 路由

1. 首页 /
2. 推荐列表页 /index
3. 图文列表页 /one
4. 阅读列表页 /article
5. 音乐列表页 /music
6. 影视列表页 /movie
7. App 下载推广页 /apps
8. 关于介绍页 /about

