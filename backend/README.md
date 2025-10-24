# 面试管理系统 - 后端

基于 NestJS 的企业级面试管理系统后端 API 服务。

## 技术栈

- **框架**: NestJS
- **语言**: TypeScript
- **ORM**: TypeORM
- **数据库**: MySQL 8.0
- **缓存**: Redis
- **认证**: JWT + Passport

## 目录结构

```
src/
├── auth/              # 认证模块
├── job/               # 岗位管理模块
├── resume/            # 简历管理模块
├── question/          # 题库管理模块
├── interview/         # 面试管理模块
├── match/             # 匹配推荐模块
├── common/            # 公共模块
│   ├── guards/       # 守卫
│   ├── decorators/   # 装饰器
│   ├── filters/      # 过滤器
│   ├── interceptors/ # 拦截器
│   └── pipes/        # 管道
└── database/          # 数据库
    └── entities/     # 实体模型
```

## 开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run start:dev

# 启动调试模式
npm run start:debug

# 构建生产版本
npm run build

# 启动生产服务器
npm run start:prod

# 代码检查
npm run lint

# 运行测试
npm run test

# E2E 测试
npm run test:e2e
```

## 环境变量

创建 `.env` 文件:

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

## API 文档

启动服务后访问 Swagger 文档:

- 开发环境: http://localhost:3001/api/docs

## 数据库

### 运行迁移

```bash
npm run typeorm migration:run
```

### 创建新迁移

```bash
npm run typeorm migration:generate -- -n MigrationName
```

### 还原迁移

```bash
npm run typeorm migration:revert
```

## 模块说明

### Auth 模块
- 用户登录/注册
- JWT 认证
- 权限控制

### Job 模块
- 岗位 CRUD
- 岗位状态管理

### Resume 模块
- 简历导入
- 简历解析
- 简历管理

### Question 模块
- 题库管理
- 题目分类

### Interview 模块
- 面试流程管理
- 面试评估

### Match 模块
- 匹配度计算
- 职位推荐

## 代码规范

- 使用 ESLint 进行代码检查
- 使用 Prettier 进行代码格式化
- 遵循 NestJS 最佳实践
- 使用 TypeORM 进行数据库操作

