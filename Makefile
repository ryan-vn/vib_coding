.PHONY: help install dev build start stop clean restart logs

help: ## 显示帮助信息
	@echo "可用命令:"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-15s\033[0m %s\n", $$1, $$2}'

install: ## 安装所有依赖
	@echo "安装前端依赖..."
	cd frontend && npm install
	@echo "安装后端依赖..."
	cd backend && npm install
	@echo "依赖安装完成!"

dev: ## 启动开发环境 (需要先启动 MySQL 和 Redis)
	@echo "启动开发环境..."
	docker-compose up -d mysql redis
	@echo "等待数据库启动..."
	sleep 5
	@echo "启动后端..."
	cd backend && npm run start:dev &
	@echo "启动前端..."
	cd frontend && npm run dev

build: ## 构建所有服务
	@echo "构建 Docker 镜像..."
	docker-compose build

start: ## 启动所有服务 (使用 Docker)
	@echo "启动所有服务..."
	docker-compose up -d
	@echo "服务启动完成!"
	@echo "前端: http://localhost:3000"
	@echo "后端: http://localhost:3001"
	@echo "API 文档: http://localhost:3001/api/docs"

stop: ## 停止所有服务
	@echo "停止所有服务..."
	docker-compose down

restart: ## 重启所有服务
	@echo "重启所有服务..."
	docker-compose restart

logs: ## 查看服务日志
	docker-compose logs -f

clean: ## 清理容器和数据卷
	@echo "清理所有容器和数据卷..."
	docker-compose down -v
	@echo "清理完成!"

db-init: ## 初始化数据库
	@echo "初始化数据库..."
	docker-compose exec backend npm run typeorm migration:run

db-seed: ## 填充测试数据
	@echo "填充测试数据..."
	@echo "TODO: 实现数据填充脚本"

test-backend: ## 运行后端测试
	cd backend && npm run test

test-frontend: ## 运行前端测试
	cd frontend && npm run test

lint-backend: ## 后端代码检查
	cd backend && npm run lint

lint-frontend: ## 前端代码检查
	cd frontend && npm run lint

