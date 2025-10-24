-- 测试数据填充脚本
USE interview_management;

-- 插入测试岗位数据
INSERT INTO jobs (id, title, department, description, skills, requirements, count, status, createdAt, updatedAt)
VALUES
  (UUID(), '高级前端工程师', '技术部', '负责前端架构设计与开发', 'React,TypeScript,Next.js', '3年以上前端开发经验', 2, 'open', NOW(), NOW()),
  (UUID(), 'Node.js 后端工程师', '技术部', '负责后端 API 开发与维护', 'Node.js,NestJS,MySQL', '2年以上后端开发经验', 3, 'open', NOW(), NOW()),
  (UUID(), '产品经理', '产品部', '负责产品规划与需求管理', '产品设计,需求分析,Axure', '3年以上产品经验', 1, 'open', NOW(), NOW());

-- 插入测试题目数据
INSERT INTO questions (id, content, answer, category, tags, isDeleted, createdAt, updatedAt)
VALUES
  (UUID(), '请介绍一下你自己', '开放性问题', '通用', 'general,introduction', 0, NOW(), NOW()),
  (UUID(), '描述一次你在团队中遇到的挑战及如何解决', '开放性问题', '行为面试', 'behavioral,teamwork', 0, NOW(), NOW()),
  (UUID(), '什么是闭包？请举例说明', '闭包是指有权访问另一个函数作用域中变量的函数', '技术面试', 'technical,javascript', 0, NOW(), NOW()),
  (UUID(), '解释一下 React Hooks 的原理', '开放性问题', '技术面试', 'technical,react,frontend', 0, NOW(), NOW()),
  (UUID(), '数据库索引的作用是什么？', '索引可以加快数据检索速度', '技术面试', 'technical,database', 0, NOW(), NOW());

-- 注意: 简历和面试数据需要在系统运行后通过 API 添加

