export interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  image?: string;
}

export const posts: Post[] = [
  {
    id: '1',
    title: '欢迎来到我的博客',
    excerpt: '这是我个人博客的第一篇文章，记录我的学习和生活点滴。',
    content: `# 欢迎来到我的博客

这是我个人博客的第一篇文章。在这里，我将分享我的学习心得、技术思考和生活感悟。

## 关于我

我是一名热爱编程和技术的开发者，喜欢探索新技术，分享知识和经验。

## 博客内容

在这个博客中，你将会看到：

- 技术文章和教程
- 项目经验分享
- 学习笔记
- 生活随笔

希望你能在这里找到有价值的内容！

感谢你的访问！`,
    date: '2024-01-15',
    author: '博主',
    category: '介绍',
    tags: ['博客', '介绍', '欢迎'],
  },
  {
    id: '2',
    title: 'Next.js 14 新特性详解',
    excerpt: '深入探讨 Next.js 14 带来的新特性和改进，包括 App Router、Server Components 等。',
    content: `# Next.js 14 新特性详解

Next.js 14 带来了许多令人兴奋的新特性和改进。在本文中，我们将深入探讨这些变化。

## App Router

Next.js 14 引入了全新的 App Router，它提供了更强大和灵活的路由系统。

### 主要优势

- 更好的代码组织
- 改进的性能
- 更直观的布局系统

## Server Components

Server Components 允许我们在服务器端渲染组件，从而减少客户端的 JavaScript 包大小。

### 使用场景

- 数据获取
- 访问后端资源
- 安全性敏感的内容

## 总结

Next.js 14 为 React 开发者提供了更好的开发体验和性能优化。`,
    date: '2024-01-20',
    author: '博主',
    category: '技术',
    tags: ['Next.js', 'React', 'Web开发'],
  },
  {
    id: '3',
    title: '前端开发最佳实践',
    excerpt: '分享一些前端开发的最佳实践，帮助你写出更好的代码。',
    content: `# 前端开发最佳实践

在多年的前端开发经验中，我总结了一些最佳实践，希望能帮助到大家。

## 代码组织

良好的代码组织是维护大型项目的关键。

### 文件结构

- 按功能模块组织
- 保持文件职责单一
- 使用清晰的命名规范

## 性能优化

前端性能直接影响用户体验。

### 优化策略

- 代码分割
- 图片优化
- 懒加载
- 缓存策略

## 可访问性

确保网站对所有用户都可用。

### 关键点

- 语义化 HTML
- ARIA 属性
- 键盘导航支持
- 颜色对比度

## 总结

遵循这些最佳实践可以让你的代码更加健壮、可维护，并提供更好的用户体验。`,
    date: '2024-01-25',
    author: '博主',
    category: '技术',
    tags: ['前端', '最佳实践', '性能优化'],
  },
];





