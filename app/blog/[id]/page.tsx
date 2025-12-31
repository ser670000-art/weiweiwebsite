import { notFound } from 'next/navigation'
import Link from 'next/link'
import { format } from 'date-fns'
import zhCN from 'date-fns/locale/zh-CN'
import { posts, Post } from '@/data/posts'

interface BlogPostPageProps {
  params: {
    id: string
  }
}

function getPost(id: string): Post | undefined {
  return posts.find(post => post.id === id)
}

export async function generateStaticParams() {
  return posts.map((post) => ({
    id: post.id,
  }))
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPost(params.id)

  if (!post) {
    notFound()
  }

  // 将 markdown 样式的标题转换为 HTML
  const formatContent = (content: string) => {
    const lines = content.split('\n')
    let html = ''
    let inList = false
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i]
      const trimmed = line.trim()
      
      // 处理标题
      if (trimmed.startsWith('# ')) {
        if (inList) {
          html += '</ul>'
          inList = false
        }
        html += `<h1>${trimmed.substring(2)}</h1>`
      } else if (trimmed.startsWith('## ')) {
        if (inList) {
          html += '</ul>'
          inList = false
        }
        html += `<h2>${trimmed.substring(3)}</h2>`
      } else if (trimmed.startsWith('### ')) {
        if (inList) {
          html += '</ul>'
          inList = false
        }
        html += `<h3>${trimmed.substring(4)}</h3>`
      } else if (trimmed.startsWith('- ')) {
        if (!inList) {
          html += '<ul>'
          inList = true
        }
        html += `<li>${trimmed.substring(2)}</li>`
      } else if (trimmed === '') {
        if (inList) {
          html += '</ul>'
          inList = false
        }
        html += '<br />'
      } else {
        if (inList) {
          html += '</ul>'
          inList = false
        }
        html += `<p>${line}</p>`
      }
    }
    
    if (inList) {
      html += '</ul>'
    }
    
    return html
  }

  const formattedContent = formatContent(post.content)

  // 获取相关文章（同一分类的其他文章）
  const relatedPosts = posts
    .filter(p => p.id !== post.id && p.category === post.category)
    .slice(0, 3)

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 返回按钮 */}
        <Link
          href="/blog"
          className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8 transition-colors"
        >
          ← 返回博客列表
        </Link>

        {/* 文章头部 */}
        <article className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-8 md:p-12">
            {/* 分类和日期 */}
            <div className="flex items-center justify-between mb-6">
              <span className="inline-block bg-primary-100 text-primary-700 text-sm font-semibold px-4 py-2 rounded-full">
                {post.category}
              </span>
              <time className="text-gray-500">
                {format(new Date(post.date), 'yyyy年MM月dd日', { locale: zhCN })}
              </time>
            </div>

            {/* 标题 */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {post.title}
            </h1>

            {/* 作者和标签 */}
            <div className="flex items-center justify-between mb-8 pb-8 border-b border-gray-200">
              <div className="flex items-center">
                <span className="text-gray-600">作者: </span>
                <span className="ml-2 font-medium text-gray-900">{post.author}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-sm bg-gray-100 text-gray-600 px-3 py-1 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* 文章内容 */}
            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: formattedContent }}
            />
          </div>
        </article>

        {/* 相关文章 */}
        {relatedPosts.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">相关文章</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.id}`}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-primary-600 transition-colors">
                    {relatedPost.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {relatedPost.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

