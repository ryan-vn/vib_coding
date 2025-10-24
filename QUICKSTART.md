# 快速开始指南

本指南将帮助您在 5 分钟内启动面试管理系统。

## 前置要求

确保您的系统已安装：
- [Docker](https://www.docker.com/get-started) 和 Docker Compose
- [Git](https://git-scm.com/)

## 快速启动 (推荐)

### 1. 克隆项目

```bash
git clone <repository-url>
cd vib-coding
```

### 2. 配置环境变量

```bash
# 后端环境变量
cp backend/.env.example backend/.env

# 前端环境变量  
cp frontend/.env.example frontend/.env
```

> 默认配置即可运行，如需自定义请编辑 `.env` 文件

### 3. 启动所有服务

```bash
# 使用 Docker Compose 一键启动
docker-compose up -d
```

等待几分钟，让服务完全启动...

### 4. 访问应用

- 🌐 **前端应用**: http://localhost:3000
- 🔌 **后端 API**: http://localhost:3001
- 📚 **API 文档**: http://localhost:3001/api/docs

### 5. 初始化数据 (可选)

```bash
# 创建测试数据
docker-compose exec backend npm run seed
```

## 本地开发模式

如果您想进行开发，可以使用本地开发模式：

### 1. 启动数据库服务

```bash
# 仅启动 MySQL 和 Redis
docker-compose up -d mysql redis
```

### 2. 安装依赖

```bash
# 前端
cd frontend
npm install

# 后端
cd backend
npm install
```

### 3. 启动开发服务器

```bash
# 在一个终端中启动后端
cd backend
npm run start:dev

# 在另一个终端中启动前端
cd frontend
npm run dev
```

## 使用 Makefile (推荐)

项目提供了 Makefile 简化操作：

```bash
# 查看所有可用命令
make help

# 安装所有依赖
make install

# 启动所有服务 (Docker)
make start

# 查看服务日志
make logs

# 停止所有服务
make stop

# 清理数据
make clean
```

## 默认账号

系统初始化后的默认管理员账号：

```
邮箱: admin@example.com
密码: admin123
```

> ⚠️ **生产环境请务必修改默认密码！**

## 常用操作

### 查看服务状态

```bash
docker-compose ps
```

### 查看日志

```bash
# 查看所有服务日志
docker-compose logs -f

# 查看特定服务日志
docker-compose logs -f backend
docker-compose logs -f frontend
```

### 重启服务

```bash
# 重启所有服务
docker-compose restart

# 重启特定服务
docker-compose restart backend
```

### 进入容器

```bash
# 进入后端容器
docker-compose exec backend sh

# 进入数据库容器
docker-compose exec mysql mysql -uroot -p
```

## 常见问题

### 端口被占用

如果 3000 或 3001 端口被占用，可以修改 `docker-compose.yml` 中的端口映射：

```yaml
ports:
  - "3000:3000"  # 改为 "8000:3000"
```

### 数据库连接失败

等待 MySQL 完全启动（通常需要 10-20 秒）：

```bash
# 检查 MySQL 状态
docker-compose logs mysql
```

### 前端无法访问后端

确保后端服务已启动并检查环境变量：

```bash
# 检查后端状态
docker-compose ps backend

# 检查前端环境变量
cat frontend/.env
```

## 下一步

- 📖 阅读 [完整文档](./README.md)
- 🏗️ 了解 [架构设计](./ARCHITECTURE.md)
- 📝 查看 [API 文档](http://localhost:3001/api/docs)
- 🔧 配置 [开发环境](./docs/DEVELOPMENT.md)

## 停止和清理

```bash
# 停止服务（保留数据）
docker-compose down

# 停止服务并删除数据
docker-compose down -v

# 完全清理（包括镜像）
docker-compose down -v --rmi all
```

## 需要帮助？

- 查看 [FAQ](./docs/FAQ.md)
- 提交 [Issue](https://github.com/your-repo/issues)
- 查看 [贡献指南](./CONTRIBUTING.md)

---

🎉 **恭喜！您的面试管理系统已经运行起来了！**

