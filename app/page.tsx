import Link from 'next/link'
import { posts } from '@/data/posts'
import PostCard from '@/components/PostCard'

export default function Home() {
  const featuredPosts = posts.slice(0, 3)

  return (
    <div className="min-h-screen">
      {/* 英雄区域 */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              欢迎来到ww个人主页
            </h1>
            <p className="text-xl mb-8 text-primary-100 max-w-2xl mx-auto">
              分享技术、生活和思考的空间
            </p>
            <Link
              href="/blog"
              className="inline-block bg-white text-primary-600 font-semibold px-8 py-3 rounded-lg hover:bg-primary-50 transition-colors shadow-lg"
            >
              浏览博客
            </Link>
          </div>
        </div>
      </section>

      {/* 最新文章 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">最新文章</h2>
            <p className="text-lg text-gray-600">分享最新的技术思考和经验</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/blog"
              className="inline-block bg-primary-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors"
            >
              查看所有文章
            </Link>
          </div>
        </div>
      </section>

      {/* 关于区域 */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">关于博客</h2>
            <div className="prose prose-lg mx-auto text-gray-700">
              <p className="text-lg leading-relaxed">
                这个博客是我分享学习心得、技术思考和生活感悟的地方。
                在这里，你会找到关于 Web 开发、前端技术、编程实践等内容。
                希望通过这些文章，能够帮助到正在学习或工作的朋友们。
              </p>
              <p className="text-lg leading-relaxed mt-4">
                如果你有任何问题或建议，欢迎随时联系我。让我们一起学习，共同进步！
              </p>
            </div>
            <Link
              href="/about"
              className="inline-block mt-8 text-primary-600 font-semibold hover:text-primary-700 transition-colors"
            >
              了解更多 →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}





