// 用户角色
export enum UserRole {
  ADMIN = 'admin',
  HR = 'hr',
  INTERVIEWER = 'interviewer',
  VIEWER = 'viewer',
}

// 岗位状态
export enum JobStatus {
  OPEN = 'open',
  CLOSED = 'closed',
}

// 面试状态
export enum InterviewStatus {
  PENDING = 'pending',
  IN_PROGRESS = 'in_progress',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled',
}

// 用户类型
export interface User {
  id: string
  name: string
  email: string
  phone: string
  role: UserRole
  createdAt: string
  updatedAt: string
}

// 岗位类型
export interface Job {
  id: string
  title: string
  department: string
  description: string
  skills: string[]
  requirements: string
  count?: number
  status: JobStatus
  createdAt: string
  updatedAt: string
}

// 简历类型
export interface Resume {
  id: string
  name: string
  phone: string
  email: string
  skills: string[]
  experience: Experience[]
  education: Education[]
  linkedJobId?: string
  status: string
  createdAt: string
  updatedAt: string
}

// 工作经历
export interface Experience {
  company: string
  title: string
  years: number
  description?: string
}

// 教育经历
export interface Education {
  school: string
  degree: string
  major: string
  year: number
}

// 题目类型
export interface Question {
  id: string
  content: string
  answer?: string
  category: string
  tags: string[]
  createdAt: string
  updatedAt: string
}

// 面试类型
export interface Interview {
  id: string
  jobId: string
  resumeId: string
  interviewerIds: string[]
  scheduleTime: string
  room: string
  status: InterviewStatus
  result?: InterviewResult
  createdAt: string
  updatedAt: string
  // 关联数据
  job?: Job
  resume?: Resume
  interviewers?: User[]
}

// 面试结果
export interface InterviewResult {
  score: number
  comments: string
  recommendation: string
  questions?: string[]
}

// 匹配结果
export interface MatchResult {
  id: string
  jobId: string
  resumeId: string
  score: number
  matchedSkills: string[]
  createdAt: string
}

// API 响应
export interface ApiResponse<T> {
  success: boolean
  data: T
  message?: string
}

// 分页数据
export interface PaginatedData<T> {
  items: T[]
  total: number
  page: number
  pageSize: number
}

