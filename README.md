# 面试管理系统 (Interview Management System)

企业内部面试管理系统，覆盖从岗位发布、简历导入、面试题库维护到面试流程执行的完整闭环。

## 📋 项目概述

本系统为企业内部人力资源部门定制，旨在提高招聘流程透明度、面试协作效率及候选人数据管理质量。

### 核心功能模块

- **岗位管理** - 创建、编辑、维护招聘岗位信息
- **简历管理** - 多格式简历导入、解析、结构化存储
- **题库管理** - 面试题库创建、分类、标签管理
- **面试管理** - 面试流程创建、分配、追踪、评估
- **智能推荐** - 岗位匹配度评分、职位推荐

## 🏗️ 技术栈

### 前端
- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript
- **状态管理**: Zustand
- **UI 框架**: TailwindCSS + shadcn/ui
- **请求层**: Axios

### 后端
- **框架**: NestJS
- **语言**: TypeScript
- **ORM**: TypeORM
- **数据库**: MySQL 8.0
- **缓存**: Redis 7
- **认证**: JWT + Passport

### 部署
- **容器化**: Docker + Docker Compose
- **反向代理**: Nginx (生产环境)

## 📁 项目结构

```
vib-coding/
├── docs/                  # 项目文档
│   ├── PRD.md            # 产品需求文档
│   ├── TAD.md            # 技术架构设计文档
│   └── FSD.md            # 功能设计文档
├── frontend/             # 前端项目
│   ├── src/
│   │   ├── app/          # Next.js App Router 页面
│   │   ├── components/   # 通用 UI 组件
│   │   ├── features/     # 功能模块 (job, resume, etc.)
│   │   ├── store/        # Zustand 状态管理
│   │   ├── lib/          # 工具函数与 API 封装
│   │   ├── hooks/        # 自定义 Hooks
│   │   └── types/        # TypeScript 类型定义
│   ├── public/           # 静态资源
│   └── package.json
├── backend/              # 后端项目
│   ├── src/
│   │   ├── auth/         # 认证模块
│   │   ├── job/          # 岗位管理模块
│   │   ├── resume/       # 简历管理模块
│   │   ├── question/     # 题库管理模块
│   │   ├── interview/    # 面试管理模块
│   │   ├── match/        # 匹配推荐模块
│   │   ├── common/       # 公共模块 (guards, filters, etc.)
│   │   └── database/     # 数据库实体
│   └── package.json
└── docker-compose.yml    # Docker 编排配置
```

## 🚀 快速开始

### 前置要求

- Node.js >= 20
- MySQL >= 8.0
- Redis >= 7.0
- Docker & Docker Compose (可选)

### 使用 Docker Compose (推荐)

1. **克隆项目**
```bash
git clone <repository-url>
cd vib-coding
```

2. **配置环境变量**
```bash
# 后端环境变量
cp backend/.env.example backend/.env

# 前端环境变量
cp frontend/.env.example frontend/.env
```

3. **启动所有服务**
```bash
docker-compose up -d
```

4. **访问应用**
- 前端: http://localhost:3000
- 后端 API: http://localhost:3001
- API 文档: http://localhost:3001/api/docs

### 本地开发

#### 1. 启动 MySQL 和 Redis

```bash
# 使用 Docker Compose 仅启动数据库
docker-compose up -d mysql redis
```

#### 2. 后端开发

```bash
cd backend

# 安装依赖
npm install

# 配置环境变量
cp .env.example .env

# 启动开发服务器
npm run start:dev
```

后端服务将在 http://localhost:3001 启动

#### 3. 前端开发

```bash
cd frontend

# 安装依赖
npm install

# 配置环境变量
cp .env.example .env

# 启动开发服务器
npm run dev
```

前端服务将在 http://localhost:3000 启动

## 📚 API 文档

启动后端服务后，访问 Swagger API 文档:
- 开发环境: http://localhost:3001/api/docs
- 生产环境: https://your-domain.com/api/docs

## 🗄️ 数据库

### 数据库表结构

- `users` - 用户表
- `jobs` - 岗位表
- `resumes` - 简历表
- `questions` - 题库表
- `interviews` - 面试表
- `match_results` - 匹配结果表

### 数据库迁移

```bash
cd backend
npm run typeorm migration:run
```

## 🧪 测试

### 后端测试
```bash
cd backend

# 单元测试
npm run test

# E2E 测试
npm run test:e2e

# 测试覆盖率
npm run test:cov
```

### 前端测试
```bash
cd frontend

# 运行测试
npm run test
```

## 🔧 环境变量

### 后端环境变量 (backend/.env)

```env
NODE_ENV=development
PORT=3001
FRONTEND_URL=http://localhost:3000

JWT_SECRET=your-secret-key

DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=password
DB_DATABASE=interview_management

REDIS_HOST=localhost
REDIS_PORT=6379
```

### 前端环境变量 (frontend/.env)

```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:3001
```

## 👥 用户角色

| 角色 | 权限 |
|------|------|
| 系统管理员 (admin) | 管理系统用户、配置题库、岗位模板等全局设置 |
| HR (hr) | 创建岗位、导入简历、安排面试、管理流程 |
| 面试官 (interviewer) | 查看分配的面试任务、填写面试评语、提交反馈 |
| 观察员 (viewer) | 查看统计数据与招聘进度 |

## 📦 部署

### 使用 Docker Compose 部署

```bash
# 构建并启动所有服务
docker-compose up -d --build

# 查看日志
docker-compose logs -f

# 停止服务
docker-compose down

# 停止并删除数据卷
docker-compose down -v
```

### 生产环境部署

详见 `docs/TAD.md` 中的部署架构说明。

## 🔒 安全性

- 所有 API 接口均需 JWT 认证
- 基于角色的访问控制 (RBAC)
- 密码使用 bcrypt 加密存储
- 敏感字段 AES-256 加密
- 文件上传安全校验

## 📝 开发规范

- 代码风格: ESLint + Prettier
- Git 提交: Conventional Commits
- 分支策略: Git Flow

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

MIT License

## 📞 联系方式

如有问题，请联系项目维护者。

---

**开发团队**

© 2025 Interview Management System

