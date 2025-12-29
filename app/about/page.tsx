export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">关于我</h1>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">个人介绍</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                你好！欢迎来到我的个人博客。我是一名热爱编程和技术的开发者，
                专注于 Web 开发和前端技术。我喜欢探索新技术，分享知识，并在不断学习中成长。
              </p>
              <p className="text-gray-700 leading-relaxed">
                这个博客是我记录学习历程、分享技术经验和思考的地方。
                希望通过这些内容，能够帮助到正在学习或工作的朋友们。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">技术栈</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>前端框架：React, Next.js, Vue.js</li>
                <li>样式：Tailwind CSS, CSS-in-JS</li>
                <li>编程语言：JavaScript, TypeScript</li>
                <li>工具和构建：Webpack, Vite, Git</li>
                <li>其他：Node.js, 数据库, API 开发</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">联系我</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                如果你有任何问题、建议或想要合作，欢迎通过以下方式联系我：
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>邮箱：[你的邮箱]</li>
                <li>GitHub：[你的GitHub]</li>
                <li>社交媒体：[你的社交媒体]</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">博客内容</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                在这个博客中，我会分享：
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>技术教程和最佳实践</li>
                <li>项目开发经验和总结</li>
                <li>新技术的学习笔记</li>
                <li>编程思考和感悟</li>
                <li>生活中的一些随笔</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}


