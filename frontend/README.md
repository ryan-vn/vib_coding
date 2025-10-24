# 面试管理系统 - 前端

基于 Next.js 14 的企业级面试管理系统前端应用。

## 技术栈

- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript
- **状态管理**: Zustand
- **UI 框架**: TailwindCSS + shadcn/ui
- **请求库**: Axios

## 目录结构

```
src/
├── app/              # Next.js App Router 页面
├── components/       # 通用 UI 组件
├── features/         # 功能模块
│   ├── job/         # 岗位管理
│   ├── resume/      # 简历管理
│   ├── question/    # 题库管理
│   ├── interview/   # 面试管理
│   └── match/       # 匹配推荐
├── store/           # Zustand 状态管理
├── lib/             # 工具函数与 API 封装
├── hooks/           # 自定义 Hooks
└── types/           # TypeScript 类型定义
```

## 开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 启动生产服务器
npm start

# 代码检查
npm run lint

# 类型检查
npm run type-check
```

## 环境变量

创建 `.env.local` 文件:

```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:3001
```

## API 集成

所有 API 请求通过 `src/lib/api.ts` 中的 `apiClient` 进行:

```typescript
import apiClient from '@/lib/api'

// GET 请求
const jobs = await apiClient.get('/jobs')

// POST 请求
const newJob = await apiClient.post('/jobs', data)
```

## 状态管理

使用 Zustand 进行状态管理:

```typescript
import { useAuthStore } from '@/store/authStore'

const { user, login, logout } = useAuthStore()
```

## 组件库

使用 shadcn/ui 组件库，组件位于 `src/components/ui/` 目录。

## 代码规范

- 使用 ESLint 进行代码检查
- 使用 Prettier 进行代码格式化
- 遵循 TypeScript 最佳实践

