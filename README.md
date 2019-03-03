### 使用Vuepress搭建静态博客

```
 "name": "JackTeslaBlog",
  "version": "1.0.0",
  "description": "Blogs built with vuepress",
  "main": "index.js",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/18518300669/JackTeslaBlog.git"
  },
  "keywords": [
    "JavaScript",
    "vue",
    "mkdown",
    "blog"
  ],
  "author": "http://jacktesla.xyz/",
  "license": "ISC"
```

###目录结构
```
.
├─ docs
│  ├─ README.md	       //主页
│  └─ .vuepress
│  │  └─ components    //全局vue模版
│  │  └─ dist          //构建产生目录
│  │  └─ public        //存放静态文件
│  │  └─ config.js	   //配置
│  └─ React            //一级目录
│  └─ Stack            //一级目录
│  └─ ...              //一级目录
└─ package.json
```

###安装依赖
```
$ npm i
```
###启动开发环境

```
$ npm run dev
```
访问 localhost:8080

### 本地构建
```
$ npm run build
```
构建的文件会位于 docs/.vuepress/dist
