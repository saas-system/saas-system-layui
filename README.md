# saas-system-layui

## 预览主题
在 localhost 下访问根目录下的 index.html 即可预览主题

建议
```shell
npm i -g http-server
http-server
```
打开 http://127.0.0.1:8080


## 目录说明

```
- res/             # 静态资源目录
  - adminui/       # 主题核心代码目录（重要：一般升级时主要替换此目录）
    - dist/        # 主题核心代码构建后的目录（为主要引用）
      - modules/   # 主题核心 JS 模块
      - css/       # 主题核心 CSS 样式
    - src/         # 主题核心源代码目录（不推荐引用，除非要改动核心代码），结构同 dist 目录
  - modules/       # 业务 JS 模块（可按照实际的业务需求进行修改）
  - style/         # 业务 CSS 图片等资源目录
  - config.js      # 初始化配置文件
  - index.js       # 初始化主题入口模块
- index.html       # 访问的主入口页面，可放置在任意地方（注意修改里面的 css/js 相关路径即可） 
```

## 感谢
### 特别鸣谢
💕 感谢巨人提供肩膀，排名不分先后
- [LayUI](https://layui.dev/)
- [HttpServer](https://www.npmjs.com/package/http-server)