import Link from 'next/link'
import { format } from 'date-fns'
import { zhCN } from 'date-fns/locale/zh-CN'
import { Post } from '@/data/posts'

interface PostCardProps {
  post: Post
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <article className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <Link href={`/blog/${post.id}`}>
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <span className="inline-block bg-primary-100 text-primary-700 text-xs font-semibold px-3 py-1 rounded-full">
              {post.category}
            </span>
            <time className="text-sm text-gray-500">
              {format(new Date(post.date), 'yyyy年MM月dd日', { locale: zhCN })}
            </time>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-primary-600 transition-colors">
            {post.title}
          </h2>
          <p className="text-gray-600 mb-4 line-clamp-3">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span 
                  key={tag} 
                  className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                >
                  #{tag}
                </span>
              ))}
            </div>
            <span className="text-primary-600 font-medium hover:underline">
              阅读更多 →
            </span>
          </div>
        </div>
      </Link>
    </article>
  )
}

