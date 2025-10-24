# 项目架构文档

## 系统架构概览

面试管理系统采用前后端分离架构，前端使用 Next.js 14，后端使用 NestJS，数据库使用 MySQL，缓存使用 Redis。

```
┌─────────────────────────────────────────────────────────────┐
│                        用户浏览器                              │
└─────────────────────────────────────────────────────────────┘
                            │
                            ↓
┌─────────────────────────────────────────────────────────────┐
│                   前端 (Next.js 14)                          │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐         │
│  │  岗位管理    │  │  简历管理    │  │  面试管理    │         │
│  └─────────────┘  └─────────────┘  └─────────────┘         │
│  ┌─────────────┐  ┌─────────────┐                          │
│  │  题库管理    │  │  智能推荐    │                          │
│  └─────────────┘  └─────────────┘                          │
└─────────────────────────────────────────────────────────────┘
                            │
                            ↓ REST API / WebSocket
┌─────────────────────────────────────────────────────────────┐
│                   后端 (NestJS)                              │
│  ┌─────────────────────────────────────────────────────┐   │
│  │                   业务层                             │   │
│  │  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐ │   │
│  │  │ Auth │  │ Job  │  │Resume│  │Quest │  │Inter │ │   │
│  │  └──────┘  └──────┘  └──────┘  └──────┘  └──────┘ │   │
│  │  ┌──────┐                                          │   │
│  │  │Match │                                          │   │
│  │  └──────┘                                          │   │
│  └─────────────────────────────────────────────────────┘   │
│  ┌─────────────────────────────────────────────────────┐   │
│  │                   公共层                             │   │
│  │  Guards | Filters | Interceptors | Pipes            │   │
│  └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
                     │                    │
                     ↓                    ↓
         ┌──────────────────┐  ┌──────────────────┐
         │   MySQL 8.0      │  │    Redis 7       │
         │   (主存储)        │  │    (缓存)        │
         └──────────────────┘  └──────────────────┘
```

## 前端架构

### 技术栈
- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript
- **状态管理**: Zustand
- **UI**: TailwindCSS + shadcn/ui
- **HTTP 客户端**: Axios

### 目录结构
```
frontend/src/
├── app/                    # Next.js 页面路由
│   ├── (auth)/            # 认证相关页面组
│   ├── (dashboard)/       # 控制台页面组
│   ├── layout.tsx         # 根布局
│   ├── page.tsx           # 首页
│   └── globals.css        # 全局样式
├── components/            # 通用 UI 组件
│   ├── ui/               # shadcn/ui 组件
│   ├── layout/           # 布局组件
│   └── common/           # 公共组件
├── features/             # 功能模块
│   ├── job/             # 岗位管理
│   ├── resume/          # 简历管理
│   ├── question/        # 题库管理
│   ├── interview/       # 面试管理
│   └── match/           # 智能推荐
├── store/               # 状态管理
│   ├── authStore.ts    # 认证状态
│   ├── jobStore.ts     # 岗位状态
│   └── ...
├── lib/                 # 工具库
│   ├── api.ts          # API 客户端
│   └── utils.ts        # 工具函数
├── hooks/              # 自定义 Hooks
│   ├── useAuth.ts
│   └── ...
└── types/              # 类型定义
    └── index.ts
```

### 核心设计模式

#### 1. 状态管理 (Zustand)
```typescript
// 简单、类型安全的状态管理
const useStore = create<State>((set) => ({
  data: null,
  setData: (data) => set({ data }),
}))
```

#### 2. API 封装
```typescript
// 统一的 API 客户端，自动处理认证和错误
import { apiClient } from '@/lib/api'
const data = await apiClient.get('/jobs')
```

#### 3. 组件组织
- **Container Components**: 负责数据获取和状态管理
- **Presentation Components**: 纯展示组件，接收 props

## 后端架构

### 技术栈
- **框架**: NestJS
- **语言**: TypeScript
- **ORM**: TypeORM
- **认证**: Passport + JWT
- **文档**: Swagger

### 目录结构
```
backend/src/
├── auth/                  # 认证模块
│   ├── auth.module.ts
│   ├── auth.service.ts
│   ├── auth.controller.ts
│   └── strategies/       # Passport 策略
├── job/                  # 岗位模块
│   ├── job.module.ts
│   ├── job.service.ts
│   ├── job.controller.ts
│   └── dto/             # 数据传输对象
├── resume/              # 简历模块
├── question/            # 题库模块
├── interview/           # 面试模块
├── match/               # 匹配模块
├── common/              # 公共模块
│   ├── guards/         # 守卫 (认证、权限)
│   ├── decorators/     # 装饰器
│   ├── filters/        # 异常过滤器
│   ├── interceptors/   # 拦截器
│   └── pipes/          # 管道 (验证、转换)
└── database/           # 数据库
    └── entities/       # 实体模型
```

### 核心设计模式

#### 1. 模块化设计
每个功能模块独立，包含：
- Module: 模块定义
- Controller: 路由控制
- Service: 业务逻辑
- Entity: 数据模型
- DTO: 数据验证

#### 2. 依赖注入
```typescript
@Injectable()
export class JobService {
  constructor(
    @InjectRepository(Job)
    private jobRepository: Repository<Job>,
  ) {}
}
```

#### 3. 守卫和拦截器
```typescript
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles(UserRole.HR)
@Controller('jobs')
export class JobController { }
```

## 数据库设计

### 核心表结构

#### users 表 (用户)
```sql
- id: UUID (主键)
- name: VARCHAR(100)
- email: VARCHAR(100) UNIQUE
- phone: VARCHAR(20)
- password: VARCHAR(255)
- role: ENUM('admin','hr','interviewer','viewer')
- isActive: BOOLEAN
- createdAt: TIMESTAMP
- updatedAt: TIMESTAMP
```

#### jobs 表 (岗位)
```sql
- id: UUID (主键)
- title: VARCHAR(200)
- department: VARCHAR(100)
- description: TEXT
- skills: TEXT (数组存储)
- requirements: TEXT
- count: INT
- status: ENUM('open','closed')
- createdAt: TIMESTAMP
- updatedAt: TIMESTAMP
```

#### resumes 表 (简历)
```sql
- id: UUID (主键)
- name: VARCHAR(100)
- phone: VARCHAR(20)
- email: VARCHAR(100)
- skills: TEXT (数组存储)
- experience: JSON
- education: JSON
- linkedJobId: UUID (外键)
- status: VARCHAR(50)
- isDeleted: BOOLEAN
- createdAt: TIMESTAMP
- updatedAt: TIMESTAMP
```

#### interviews 表 (面试)
```sql
- id: UUID (主键)
- jobId: UUID (外键)
- resumeId: UUID (外键)
- interviewerIds: TEXT (数组存储)
- scheduleTime: DATETIME
- room: VARCHAR(200)
- status: ENUM('pending','in_progress','completed','cancelled')
- result: JSON
- createdAt: TIMESTAMP
- updatedAt: TIMESTAMP
```

### 关系设计
- Job 1:N Resume (一个岗位对应多个简历)
- Job 1:N Interview (一个岗位对应多个面试)
- Resume 1:N Interview (一个简历对应多个面试)
- Job/Resume N:1 MatchResult (多对一匹配结果)

## API 设计

### RESTful API 规范

#### 命名规范
- 使用复数名词: `/api/jobs`, `/api/resumes`
- 使用小写字母和连字符: `/api/match-results`

#### HTTP 方法
- GET: 查询资源
- POST: 创建资源
- PUT: 更新资源（完整更新）
- PATCH: 更新资源（部分更新）
- DELETE: 删除资源

#### 响应格式
```json
{
  "success": true,
  "data": { },
  "message": "操作成功",
  "timestamp": "2025-10-24T10:00:00.000Z"
}
```

#### 错误响应
```json
{
  "statusCode": 400,
  "message": "错误信息",
  "timestamp": "2025-10-24T10:00:00.000Z",
  "path": "/api/jobs"
}
```

### 主要 API 端点

#### 认证
- POST `/api/auth/login` - 登录
- POST `/api/auth/register` - 注册

#### 岗位管理
- GET `/api/jobs` - 获取岗位列表
- GET `/api/jobs/:id` - 获取岗位详情
- POST `/api/jobs` - 创建岗位
- PUT `/api/jobs/:id` - 更新岗位
- DELETE `/api/jobs/:id` - 删除岗位

#### 简历管理
- GET `/api/resumes` - 获取简历列表
- POST `/api/resumes` - 创建/导入简历
- PUT `/api/resumes/:id` - 更新简历
- DELETE `/api/resumes/:id` - 删除简历

#### 面试管理
- GET `/api/interviews` - 获取面试列表
- POST `/api/interviews` - 创建面试
- PUT `/api/interviews/:id` - 更新面试
- GET `/api/interviews/:id` - 获取面试详情

#### 匹配推荐
- POST `/api/match/calculate` - 计算匹配度
- GET `/api/match/job/:jobId` - 获取岗位匹配的简历
- GET `/api/match/resume/:resumeId` - 获取简历匹配的岗位

## 安全设计

### 认证机制
- JWT Token 认证
- Token 有效期: 7 天
- Refresh Token 机制

### 权限控制
- 基于角色的访问控制 (RBAC)
- 四种角色: admin, hr, interviewer, viewer
- 细粒度权限控制

### 数据安全
- 密码 bcrypt 加密 (10 轮)
- 敏感字段 AES-256 加密
- SQL 注入防护 (TypeORM 参数化查询)
- XSS 防护 (输入验证和转义)

## 性能优化

### 前端优化
- Next.js SSR/SSG 混合渲染
- 图片优化 (Next.js Image)
- 代码分割和懒加载
- 客户端缓存

### 后端优化
- Redis 缓存热点数据
- 数据库索引优化
- 分页查询
- 连接池管理

### 数据库优化
- 合理的索引设计
- 查询优化
- 定期数据清理

## 部署架构

### Docker 容器化
```yaml
services:
  - mysql (数据库)
  - redis (缓存)
  - backend (后端服务)
  - frontend (前端服务)
```

### 生产环境
- Nginx 反向代理
- SSL/TLS 加密
- 负载均衡
- 日志收集和监控

## 开发流程

### 开发环境
1. 克隆项目
2. 安装依赖: `make install`
3. 启动服务: `make dev` 或 `make start`

### 代码规范
- ESLint + Prettier
- Git Commit 规范
- Code Review

### 测试策略
- 单元测试
- 集成测试
- E2E 测试
- API 测试

## 未来扩展

### 第一阶段 (当前)
- ✅ 基础架构搭建
- ✅ 核心功能实现
- ✅ Docker 部署

### 第二阶段 (计划中)
- AI 简历解析
- 智能面试题推荐
- 视频面试集成
- 数据分析和报表

### 第三阶段 (长期规划)
- 微服务架构迁移
- 多租户支持
- 移动端应用
- 国际化支持

## 参考资源

- [Next.js 文档](https://nextjs.org/docs)
- [NestJS 文档](https://docs.nestjs.com)
- [TypeORM 文档](https://typeorm.io)
- [项目 PRD](./docs/PRD.md)
- [技术架构设计](./docs/TAD.md)
- [功能设计文档](./docs/FSD.md)

