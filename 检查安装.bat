@echo off
chcp 65001 >nul
echo ========================================
echo Node.js 和 npm 安装检查工具
echo ========================================
echo.

echo 正在检查 Node.js...
node --version >nul 2>&1
if %errorlevel% == 0 (
    echo [✓] Node.js 已安装
    node --version
) else (
    echo [✗] Node.js 未安装
    echo     请访问 https://nodejs.org/zh-cn/ 下载安装 Node.js
)

echo.
echo 正在检查 npm...
npm --version >nul 2>&1
if %errorlevel% == 0 (
    echo [✓] npm 已安装
    npm --version
) else (
    echo [✗] npm 未安装
    echo     npm 会随 Node.js 一起安装
)

echo.
echo ========================================
if %errorlevel% == 0 (
    echo 检查完成！如果看到版本号，说明安装成功。
    echo.
    echo 下一步：
    echo   1. 运行: npm install
    echo   2. 运行: npm run dev
) else (
    echo 请先安装 Node.js: https://nodejs.org/zh-cn/
)
echo ========================================
pause



