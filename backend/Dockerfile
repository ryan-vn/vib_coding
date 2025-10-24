# 基础镜像
FROM node:20-alpine AS base

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 lock 文件
COPY package*.json ./

# 安装依赖
RUN npm ci --only=production && npm cache clean --force

# 构建阶段
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

# 构建应用
RUN npm run build

# 生产阶段
FROM node:20-alpine AS production

WORKDIR /app

# 复制依赖
COPY --from=base /app/node_modules ./node_modules

# 复制构建结果
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./

# 暴露端口
EXPOSE 3001

# 启动应用
CMD ["node", "dist/main"]

