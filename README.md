# 个人网页项目

本项目位于 `personal-web.zip.extract\personal-web` 目录下，结合JavaScript与CSS资源，构建了一个内容丰富、交互流畅且视觉美观的个人主页。以下是关键文件功能概览及文件组织结构：

## 功能概述

### JavaScript功能

- `daily-saying.js`实现了“每日一言”功能，通过jQuery异步获取并展示API提供的随机引述及作者信息。

### CSS样式

- 全局样式表`style.css`设定基础样式框架，包括全局样式重置、主体尺寸与背景、文本样式等。
- 特定页面/组件样式：
  - `about-myweb.css`：为“关于我的网站”页面定制样式。
  - `box.css`：定义各类盒子组件样式，如导航菜单、内容区域布局与响应式设计。
  - `daily-saying.css`：“每日一言”样式。
  - `footer.css`：页脚区域样式与响应式设计。
  - `friend-link.css`：“好友链接”列表样式。
  - `header.css`：头部区域（含导航、搜索、徽标等）样式与响应式设计。

## 文件结构

```bash
personal-web/
├── css/
│   ├── about-myweb.css
│   ├── box.css
│   ├── daily-saying.css
│   ├── footer.css
│   ├── friend-link.css
│   ├── header.css
│   └── style.css
├── js/
│   └── daily-saying.js
└── index.html  # 示例主页
```



### 效果截图
```markdown
![个人主页首页示例](./screenshots/homepage.png "首页布局与视觉效果")
```