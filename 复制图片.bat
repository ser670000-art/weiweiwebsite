@echo off
chcp 65001 >nul
echo 正在复制图片文件到 public 目录...

if not exist public (
    mkdir public
    echo 已创建 public 目录
)

if exist image.png (
    copy /Y image.png public\image.png >nul
    echo [✓] 图片已复制到 public\image.png
    echo.
    echo 复制完成！现在可以运行 npm run dev 启动网站了。
) else (
    echo [✗] 错误：找不到 image.png 文件
    echo 请确保 image.png 文件在当前目录中
)

pause

