-- 创建数据库
CREATE DATABASE IF NOT EXISTS interview_management
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

-- 使用数据库
USE interview_management;

-- 创建管理员账户 (密码: admin123)
-- 注意: 实际使用时应该通过 API 注册，这里仅用于初始化
INSERT INTO users (id, name, email, phone, password, role, isActive, createdAt, updatedAt)
VALUES (
  UUID(),
  'System Admin',
  'admin@example.com',
  '13800138000',
  '$2b$10$YourHashedPasswordHere',  -- 需要替换为实际的 bcrypt 哈希
  'admin',
  1,
  NOW(),
  NOW()
)
ON DUPLICATE KEY UPDATE id=id;

-- 创建索引以提高查询性能
ALTER TABLE jobs ADD INDEX idx_status (status);
ALTER TABLE jobs ADD INDEX idx_department (department);
ALTER TABLE resumes ADD INDEX idx_phone (phone);
ALTER TABLE resumes ADD INDEX idx_email (email);
ALTER TABLE resumes ADD INDEX idx_status (status);
ALTER TABLE interviews ADD INDEX idx_status (status);
ALTER TABLE interviews ADD INDEX idx_schedule_time (scheduleTime);
ALTER TABLE questions ADD INDEX idx_category (category);

