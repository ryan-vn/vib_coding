# 贡献指南

感谢您对面试管理系统的关注！我们欢迎任何形式的贡献。

## 开发流程

### 1. Fork 项目

点击右上角的 "Fork" 按钮，将项目 fork 到您的账号下。

### 2. 克隆项目

```bash
git clone https://github.com/your-username/vib-coding.git
cd vib-coding
```

### 3. 创建分支

```bash
git checkout -b feature/your-feature-name
```

分支命名规范:
- `feature/*` - 新功能
- `fix/*` - Bug 修复
- `docs/*` - 文档更新
- `refactor/*` - 代码重构
- `test/*` - 测试相关

### 4. 安装依赖

```bash
# 安装前后端依赖
make install

# 或者分别安装
cd frontend && npm install
cd backend && npm install
```

### 5. 开发

```bash
# 启动开发环境
make dev

# 或者使用 Docker
make start
```

### 6. 提交代码

我们使用 [Conventional Commits](https://www.conventionalcommits.org/) 规范:

```bash
# 格式
<type>(<scope>): <subject>

# 类型
feat:     新功能
fix:      Bug 修复
docs:     文档更新
style:    代码格式调整
refactor: 重构
test:     测试相关
chore:    构建/工具链等

# 示例
git commit -m "feat(job): 添加岗位筛选功能"
git commit -m "fix(resume): 修复简历导入失败的问题"
```

### 7. 推送代码

```bash
git push origin feature/your-feature-name
```

### 8. 创建 Pull Request

在 GitHub 上创建 Pull Request，描述您的改动。

## 代码规范

### TypeScript

- 使用 TypeScript 严格模式
- 为所有函数添加类型注解
- 避免使用 `any` 类型

### 命名规范

- 文件名使用 kebab-case: `user-profile.tsx`
- 组件名使用 PascalCase: `UserProfile`
- 变量/函数使用 camelCase: `getUserData`
- 常量使用 UPPER_SNAKE_CASE: `API_BASE_URL`

### 代码风格

项目使用 ESLint 和 Prettier 进行代码检查和格式化:

```bash
# 检查代码
npm run lint

# 格式化代码
npm run format
```

## 测试

### 编写测试

- 为新功能编写单元测试
- 为关键流程编写 E2E 测试

### 运行测试

```bash
# 后端测试
make test-backend

# 前端测试
make test-frontend
```

## 文档

- 更新相关文档 (如果需要)
- 为新功能添加使用说明
- 更新 API 文档

## 提交 Pull Request 检查清单

在提交 PR 之前，请确保:

- [ ] 代码通过所有测试
- [ ] 代码符合项目规范
- [ ] 没有 ESLint 错误
- [ ] 已添加必要的测试
- [ ] 已更新相关文档
- [ ] 提交信息符合 Conventional Commits 规范

## 问题反馈

如果您发现 Bug 或有功能建议，请:

1. 在 Issues 中搜索是否已有相关问题
2. 如果没有，创建新的 Issue
3. 清晰描述问题或建议
4. 提供必要的截图或代码示例

## 代码审查

所有 Pull Request 都需要经过代码审查:

- 至少一位维护者的批准
- 通过所有自动化测试
- 解决所有评审意见

## 联系方式

如有问题，欢迎通过以下方式联系:

- GitHub Issues
- 项目维护者邮箱

## 行为准则

请遵守项目的 [行为准则](CODE_OF_CONDUCT.md)，友善、尊重地与社区成员交流。

---

再次感谢您的贡献！🎉

