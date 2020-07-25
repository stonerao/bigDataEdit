## 3D编辑器

### 项目结构

1. assets 资源
2. components 组件
3. router 前端路由
4. store 数据
5. style 样式
6. utils 公共js文件
7. views 页面
8. webgl webgl
9. model 前端和WEBGL交流js文件

### 交互流程

```
前端 和 webgl 通讯需要通过model管理
model 功能：数据 触发前端、webgl页面更新(手动触发)
前端  ==>  model  ==>  webgl  ==>  model  ==>  前端
```