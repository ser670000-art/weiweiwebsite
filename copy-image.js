const fs = require('fs');
const path = require('path');

// 确保 public 目录存在
const publicDir = path.join(__dirname, 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
  console.log('已创建 public 目录');
}

// 复制图片文件
const sourceFile = path.join(__dirname, 'image.png');
const destFile = path.join(publicDir, 'image.png');

if (fs.existsSync(sourceFile)) {
  fs.copyFileSync(sourceFile, destFile);
  console.log('✓ 图片已成功复制到 public/image.png');
  console.log('现在可以运行 npm run dev 启动网站了！');
} else {
  console.error('✗ 错误：找不到 image.png 文件');
  console.error('请确保 image.png 文件在当前目录中');
  process.exit(1);
}


