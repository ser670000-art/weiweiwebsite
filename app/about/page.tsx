export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">关于BGA封装</h1>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">BGA封装简介</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                欢迎来到BGA封装技术主页。BGA（Ball Grid Array，球栅阵列封装）是一种先进的集成电路封装技术，
                通过在封装底部排列的焊球来实现与印刷电路板的连接。
              </p>
              <p className="text-gray-700 leading-relaxed">
                这个网站致力于分享BGA封装相关的技术知识、应用经验和最新发展。
                希望通过这些内容，能够帮助到对封装技术感兴趣的工程师和研究者。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">技术特点</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>高密度封装：在较小面积内提供更多引脚</li>
                <li>优良的电学性能：缩短信号路径，提高性能</li>
                <li>良好的散热特性：通过焊球实现更好的热传导</li>
                <li>广泛应用于：CPU、GPU、芯片组等高性能器件</li>
                <li>技术发展：从传统BGA到倒装芯片BGA（FC-BGA）</li>
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
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">网站内容</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                在这个网站中，我们会分享：
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>BGA封装技术原理和应用</li>
                <li>封装设计的最佳实践</li>
                <li>焊接和返修技术</li>
                <li>最新的封装技术发展趋势</li>
                <li>相关的工程案例和经验分享</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}






