# 个人博客网站

一个基于 Next.js 14 和 TypeScript 构建的现代化个人博客网站。

## 功能特性

- ✅ 响应式设计，支持移动端和桌面端
- ✅ 现代化的 UI 设计，使用 Tailwind CSS
- ✅ 博客文章列表和详情页
- ✅ 文章分类和标签
- ✅ 相关文章推荐
- ✅ SEO 优化
- ✅ 静态站点生成（SSG）

## 技术栈

- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **日期处理**: date-fns

## 开始使用

### 安装依赖

```bash
npm install
# 或
yarn install
# 或
pnpm install
```

### 运行开发服务器

```bash
npm run dev
# 或
yarn dev
# 或
pnpm dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看网站。

### 构建生产版本

```bash
npm run build
npm start
```

## 项目结构

```
.
├── app/                  # Next.js App Router 目录
│   ├── blog/            # 博客相关页面
│   ├── about/           # 关于页面
│   ├── layout.tsx       # 根布局
│   ├── page.tsx         # 首页
│   └── globals.css      # 全局样式
├── components/          # React 组件
│   ├── Navbar.tsx      # 导航栏
│   ├── Footer.tsx      # 页脚
│   └── PostCard.tsx    # 文章卡片
├── data/               # 数据文件
│   └── posts.ts        # 博客文章数据
└── public/             # 静态资源
```

## 添加新文章

编辑 `data/posts.ts` 文件，按照现有格式添加新的文章对象：

```typescript
{
  id: '4',
  title: '文章标题',
  excerpt: '文章摘要',
  content: '文章内容（支持 Markdown 格式）',
  date: '2024-01-30',
  author: '博主',
  category: '技术',
  tags: ['标签1', '标签2'],
}
```

## 自定义配置

- 修改 `tailwind.config.js` 来自定义主题颜色
- 修改 `app/layout.tsx` 中的 metadata 来更新网站信息
- 在 `components/Navbar.tsx` 和 `components/Footer.tsx` 中自定义导航和页脚内容
- 在 `app/about/page.tsx` 中更新关于页面的内容

## 部署

### Vercel（推荐）

最简单的部署方式是使用 [Vercel](https://vercel.com)：

1. 将代码推送到 GitHub
2. 在 Vercel 中导入项目
3. Vercel 会自动检测 Next.js 项目并完成部署

### 其他平台

这个项目也可以部署到任何支持 Next.js 的平台上，如 Netlify、AWS 等。

## 许可证

MIT License

## 贡献

欢迎提交 Issue 和 Pull Request！





