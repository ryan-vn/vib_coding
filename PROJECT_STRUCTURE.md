# 项目结构

```
vib-coding/
│
├── 📁 docs/                              # 项目文档
│   ├── PRD.md                           # 产品需求文档
│   ├── TAD.md                           # 技术架构设计文档
│   └── FSD.md                           # 功能设计文档
│
├── 📁 frontend/                          # 前端项目 (Next.js 14)
│   ├── 📁 src/
│   │   ├── 📁 app/                      # Next.js App Router
│   │   │   ├── layout.tsx              # 根布局
│   │   │   ├── page.tsx                # 首页
│   │   │   └── globals.css             # 全局样式
│   │   │
│   │   ├── 📁 components/               # 通用组件
│   │   │   ├── ui/                     # shadcn/ui 组件
│   │   │   ├── layout/                 # 布局组件
│   │   │   └── common/                 # 公共组件
│   │   │
│   │   ├── 📁 features/                 # 功能模块
│   │   │   ├── 📁 job/                 # 岗位管理
│   │   │   ├── 📁 resume/              # 简历管理
│   │   │   ├── 📁 question/            # 题库管理
│   │   │   ├── 📁 interview/           # 面试管理
│   │   │   └── 📁 match/               # 智能推荐
│   │   │
│   │   ├── 📁 store/                    # Zustand 状态管理
│   │   │   └── authStore.ts            # 认证状态
│   │   │
│   │   ├── 📁 lib/                      # 工具库
│   │   │   ├── api.ts                  # API 客户端
│   │   │   └── utils.ts                # 工具函数
│   │   │
│   │   ├── 📁 hooks/                    # 自定义 Hooks
│   │   │   └── useAuth.ts              # 认证 Hook
│   │   │
│   │   └── 📁 types/                    # TypeScript 类型
│   │       └── index.ts                # 全局类型定义
│   │
│   ├── 📁 public/                       # 静态资源
│   ├── package.json                     # 依赖配置
│   ├── tsconfig.json                    # TypeScript 配置
│   ├── next.config.js                   # Next.js 配置
│   ├── tailwind.config.ts               # Tailwind 配置
│   ├── postcss.config.js                # PostCSS 配置
│   ├── .eslintrc.json                   # ESLint 配置
│   ├── .env.example                     # 环境变量模板
│   ├── Dockerfile                       # Docker 镜像
│   ├── .dockerignore                    # Docker 忽略文件
│   ├── .gitignore                       # Git 忽略文件
│   └── README.md                        # 前端说明文档
│
├── 📁 backend/                           # 后端项目 (NestJS)
│   ├── 📁 src/
│   │   ├── 📁 auth/                     # 认证模块
│   │   │   ├── auth.module.ts          # 模块定义
│   │   │   ├── auth.service.ts         # 业务逻辑
│   │   │   ├── auth.controller.ts      # 路由控制
│   │   │   └── 📁 strategies/          # Passport 策略
│   │   │       └── jwt.strategy.ts     # JWT 策略
│   │   │
│   │   ├── 📁 job/                      # 岗位管理模块
│   │   │   ├── job.module.ts
│   │   │   ├── job.service.ts
│   │   │   └── job.controller.ts
│   │   │
│   │   ├── 📁 resume/                   # 简历管理模块
│   │   │   ├── resume.module.ts
│   │   │   ├── resume.service.ts
│   │   │   └── resume.controller.ts
│   │   │
│   │   ├── 📁 question/                 # 题库管理模块
│   │   │   ├── question.module.ts
│   │   │   ├── question.service.ts
│   │   │   └── question.controller.ts
│   │   │
│   │   ├── 📁 interview/                # 面试管理模块
│   │   │   ├── interview.module.ts
│   │   │   ├── interview.service.ts
│   │   │   └── interview.controller.ts
│   │   │
│   │   ├── 📁 match/                    # 匹配推荐模块
│   │   │   ├── match.module.ts
│   │   │   ├── match.service.ts
│   │   │   └── match.controller.ts
│   │   │
│   │   ├── 📁 common/                   # 公共模块
│   │   │   ├── 📁 guards/              # 守卫
│   │   │   │   ├── jwt-auth.guard.ts   # JWT 认证守卫
│   │   │   │   └── roles.guard.ts      # 角色权限守卫
│   │   │   ├── 📁 decorators/          # 装饰器
│   │   │   │   ├── public.decorator.ts # 公开路由装饰器
│   │   │   │   └── roles.decorator.ts  # 角色装饰器
│   │   │   ├── 📁 filters/             # 过滤器
│   │   │   │   └── http-exception.filter.ts
│   │   │   ├── 📁 interceptors/        # 拦截器
│   │   │   │   └── transform.interceptor.ts
│   │   │   └── 📁 pipes/               # 管道
│   │   │
│   │   ├── 📁 database/                 # 数据库
│   │   │   ├── database.module.ts      # 数据库模块
│   │   │   └── 📁 entities/            # 实体模型
│   │   │       ├── user.entity.ts      # 用户实体
│   │   │       ├── job.entity.ts       # 岗位实体
│   │   │       ├── resume.entity.ts    # 简历实体
│   │   │       ├── question.entity.ts  # 题目实体
│   │   │       ├── interview.entity.ts # 面试实体
│   │   │       └── match-result.entity.ts # 匹配结果实体
│   │   │
│   │   ├── main.ts                     # 应用入口
│   │   └── app.module.ts               # 根模块
│   │
│   ├── package.json                     # 依赖配置
│   ├── tsconfig.json                    # TypeScript 配置
│   ├── nest-cli.json                    # NestJS 配置
│   ├── .eslintrc.js                     # ESLint 配置
│   ├── .prettierrc                      # Prettier 配置
│   ├── .env.example                     # 环境变量模板
│   ├── Dockerfile                       # Docker 镜像
│   ├── .dockerignore                    # Docker 忽略文件
│   ├── .gitignore                       # Git 忽略文件
│   └── README.md                        # 后端说明文档
│
├── 📁 scripts/                           # 脚本文件
│   ├── init-db.sql                      # 数据库初始化
│   └── seed-data.sql                    # 测试数据填充
│
├── 📁 .github/                           # GitHub 配置
│   └── 📁 workflows/
│       └── ci.yml                       # CI/CD 配置
│
├── 📁 .vscode/                           # VSCode 配置
│   ├── settings.json                    # 编辑器设置
│   ├── extensions.json                  # 推荐扩展
│   └── launch.json                      # 调试配置
│
├── docker-compose.yml                    # Docker Compose 配置
├── Makefile                             # Make 命令
├── .editorconfig                        # 编辑器配置
├── .gitignore                           # Git 忽略文件
│
├── 📄 README.md                         # 项目主文档 ⭐
├── 📄 QUICKSTART.md                     # 快速开始指南 🚀
├── 📄 ARCHITECTURE.md                   # 架构设计文档 🏗️
├── 📄 PROJECT_SUMMARY.md                # 项目总结 📊
├── 📄 PROJECT_STRUCTURE.md              # 项目结构 (本文件) 📁
├── 📄 CONTRIBUTING.md                   # 贡献指南 🤝
├── 📄 CHANGELOG.md                      # 变更日志 📝
└── 📄 LICENSE                           # MIT 许可证 📜
```

## 目录说明

### 根目录

| 目录/文件 | 说明 |
|---------|------|
| `docs/` | 业务和技术文档 |
| `frontend/` | Next.js 前端项目 |
| `backend/` | NestJS 后端项目 |
| `scripts/` | 数据库脚本 |
| `.github/` | GitHub Actions CI/CD |
| `.vscode/` | VSCode 开发配置 |
| `docker-compose.yml` | Docker 编排配置 |
| `Makefile` | 快捷命令 |

### 前端结构

| 目录 | 说明 | 文件数 |
|-----|------|--------|
| `src/app/` | Next.js 页面 | 3 |
| `src/components/` | UI 组件 | 0 (待开发) |
| `src/features/` | 业务模块 | 5 个模块目录 |
| `src/store/` | 状态管理 | 1 |
| `src/lib/` | 工具函数 | 2 |
| `src/types/` | 类型定义 | 1 |

### 后端结构

| 目录 | 说明 | 文件数 |
|-----|------|--------|
| `src/auth/` | 认证模块 | 4 |
| `src/job/` | 岗位模块 | 3 |
| `src/resume/` | 简历模块 | 3 |
| `src/question/` | 题库模块 | 3 |
| `src/interview/` | 面试模块 | 3 |
| `src/match/` | 推荐模块 | 3 |
| `src/common/` | 公共模块 | 5 |
| `src/database/` | 数据库 | 7 |

## 模块关系图

```
┌─────────────┐
│   Frontend  │
│  (Next.js)  │
└──────┬──────┘
       │ HTTP/REST
       │
       ↓
┌─────────────────────────────────────┐
│           Backend (NestJS)           │
│  ┌─────────────────────────────┐   │
│  │   Controllers (API 层)       │   │
│  └──────────┬──────────────────┘   │
│             │                        │
│             ↓                        │
│  ┌─────────────────────────────┐   │
│  │   Services (业务逻辑层)      │   │
│  │  ┌────┐ ┌────┐ ┌────┐       │   │
│  │  │Job │ │Res │ │Int │ ...   │   │
│  │  └────┘ └────┘ └────┘       │   │
│  └──────────┬──────────────────┘   │
│             │                        │
│             ↓                        │
│  ┌─────────────────────────────┐   │
│  │   TypeORM (数据访问层)       │   │
│  └──────────┬──────────────────┘   │
└─────────────┼────────────────────────┘
              │
              ↓
     ┌────────────────┐
     │  MySQL + Redis │
     └────────────────┘
```

## 数据库关系图

```
┌─────────┐         ┌──────────┐         ┌───────────┐
│  Users  │         │   Jobs   │         │  Resumes  │
└────┬────┘         └────┬─────┘         └─────┬─────┘
     │                   │                      │
     │                   │ 1:N                  │
     │                   ├──────────────────────┤
     │                   │                      │
     │                   │                      │
     │                   ↓           1:N        ↓
     │            ┌──────────────────────────────┐
     └───────────→│       Interviews             │
        N:1       └──────────────────────────────┘
                                │
                                │ N:1
                                ↓
                       ┌─────────────────┐
                       │  Match Results  │
                       └─────────────────┘
                                ↑
                                │ N:1
                       ┌────────┴─────────┐
                       │                  │
                    Jobs            Resumes

       ┌───────────┐
       │ Questions │  (独立表)
       └───────────┘
```

## 配置文件清单

### 前端配置
- ✅ `package.json` - npm 依赖
- ✅ `tsconfig.json` - TypeScript 配置
- ✅ `next.config.js` - Next.js 配置
- ✅ `tailwind.config.ts` - Tailwind CSS
- ✅ `postcss.config.js` - PostCSS
- ✅ `.eslintrc.json` - ESLint
- ✅ `.env.example` - 环境变量模板

### 后端配置
- ✅ `package.json` - npm 依赖
- ✅ `tsconfig.json` - TypeScript 配置
- ✅ `nest-cli.json` - NestJS CLI
- ✅ `.eslintrc.js` - ESLint
- ✅ `.prettierrc` - Prettier
- ✅ `.env.example` - 环境变量模板

### Docker 配置
- ✅ `docker-compose.yml` - 服务编排
- ✅ `frontend/Dockerfile` - 前端镜像
- ✅ `backend/Dockerfile` - 后端镜像
- ✅ `.dockerignore` - 忽略文件

### 开发工具
- ✅ `.vscode/settings.json` - VSCode 设置
- ✅ `.vscode/extensions.json` - 推荐插件
- ✅ `.vscode/launch.json` - 调试配置
- ✅ `.editorconfig` - 编辑器配置
- ✅ `Makefile` - Make 命令

### CI/CD
- ✅ `.github/workflows/ci.yml` - GitHub Actions

## 文件统计

### 按类型统计
- **源代码文件**: ~50 个
- **配置文件**: ~20 个
- **文档文件**: ~10 个
- **脚本文件**: ~2 个
- **总计**: **~82 个文件**

### 按模块统计
- **前端模块**: 15 个文件
- **后端模块**: 35 个文件
- **配置和工具**: 22 个文件
- **文档**: 10 个文件

## 核心功能模块

### 1. 认证模块 (Auth)
- 用户登录
- 用户注册
- JWT 认证
- 权限控制

### 2. 岗位管理 (Job)
- 岗位创建
- 岗位编辑
- 岗位查询
- 岗位删除

### 3. 简历管理 (Resume)
- 简历导入
- 简历解析
- 简历编辑
- 简历搜索

### 4. 题库管理 (Question)
- 题目创建
- 题目分类
- 题目标签
- 题目搜索

### 5. 面试管理 (Interview)
- 面试创建
- 面试安排
- 面试评估
- 面试流程

### 6. 智能推荐 (Match)
- 匹配度计算
- 岗位推荐
- 简历推荐

## 技术架构层次

```
┌──────────────────────────────────────┐
│         Presentation Layer           │  ← Next.js UI
├──────────────────────────────────────┤
│         Application Layer            │  ← NestJS Controllers
├──────────────────────────────────────┤
│          Business Layer              │  ← Services & Logic
├──────────────────────────────────────┤
│        Data Access Layer             │  ← TypeORM
├──────────────────────────────────────┤
│        Persistence Layer             │  ← MySQL & Redis
└──────────────────────────────────────┘
```

## 快速导航

### 开始开发
1. 📖 阅读 [README.md](./README.md)
2. 🚀 参考 [QUICKSTART.md](./QUICKSTART.md)
3. 🏗️ 理解 [ARCHITECTURE.md](./ARCHITECTURE.md)

### 了解业务
1. 📋 产品需求 [docs/PRD.md](./docs/PRD.md)
2. 🔧 技术设计 [docs/TAD.md](./docs/TAD.md)
3. 💡 功能设计 [docs/FSD.md](./docs/FSD.md)

### 参与贡献
1. 🤝 贡献指南 [CONTRIBUTING.md](./CONTRIBUTING.md)
2. 📝 变更日志 [CHANGELOG.md](./CHANGELOG.md)

---

**文档生成时间**: 2025-10-24

