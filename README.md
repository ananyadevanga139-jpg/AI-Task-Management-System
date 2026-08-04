# 🤖 AI Task Management System

An AI-powered task management web application that helps users create, organize, and track tasks efficiently. The application provides secure authentication, task management features, and a responsive user interface with a full-stack architecture.

## 🚀 Live Demo

### Frontend
🔗 https://ai-task-management-frontend-7iam.onrender.com

### Backend API
🔗 https://ai-task-management-system.onrender.com

---

## 📌 Features

### 🔐 User Authentication
- User registration and login
- Secure password encryption using bcrypt
- JWT-based authentication
- Protected routes

### ✅ Task Management
- Create tasks
- View tasks
- Update task status
- Delete tasks
- Track task progress

### 🤖 AI Integration
- AI-powered task assistance
- Smart task management workflow
- Intelligent productivity support

### 🖥️ Responsive UI
- Modern React interface
- Mobile-friendly design
- Clean dashboard experience

---

## 🏗️ System Architecture

```
React Frontend
      |
      |
REST API
      |
      |
Node.js + Express Backend
      |
      |
PostgreSQL Database (Supabase)
```

---

## 🛠️ Technologies Used

### Frontend
- React.js
- TypeScript
- Vite
- Tailwind CSS
- JavaScript
- HTML5
- CSS3

### Backend
- Node.js
- Express.js
- TypeScript
- JWT Authentication
- bcrypt

### Database
- PostgreSQL
- Supabase

### Deployment
- Render (Frontend)
- Render (Backend)
- Supabase PostgreSQL

---

## 📂 Project Structure

```
AI-Task-Management-System/

│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.ts
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── middleware/
│   │   └── config/
│   │
│   ├── package.json
│   └── Dockerfile
│
└── README.md
```

---

# ⚙️ Installation & Setup

## Clone Repository

```bash
git clone https://github.com/ananyadevanga139-jpg/AI-Task-Management-System.git
```

Move into project:

```bash
cd AI-Task-Management-System
```

---

# Frontend Setup

Navigate:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

# Backend Setup

Navigate:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create `.env` file:

```env
PORT=5000

DATABASE_URL=your_postgresql_database_url

JWT_SECRET=your_secret_key

NODE_ENV=development
```

Run backend:

```bash
npm run dev
```

Backend runs on:

```
http://localhost:5000
```

---

# 🔌 API Endpoints

## Authentication

### Register User

```
POST /api/auth/register
```

### Login User

```
POST /api/auth/login
```

---

## Tasks

### Get Tasks

```
GET /api/tasks
```

### Create Task

```
POST /api/tasks
```

### Update Task

```
PUT /api/tasks/:id
```

### Delete Task

```
DELETE /api/tasks/:id
```

---

# 🌐 Deployment

The application is deployed using Render.

## Frontend Deployment

```
https://ai-task-management-frontend-7iam.onrender.com
```

## Backend Deployment

```
https://ai-task-management-system.onrender.com
```

Database hosted using:

```
Supabase PostgreSQL
```

---

# 📸 Screenshots

(Add your application screenshots here)

Example:

- Login Page
- Register Page
- Dashboard
- Task Management Screen

---

# 🎯 Learning Outcomes

- Developed a complete full-stack application
- Implemented authentication and authorization
- Built REST APIs using Express.js
- Integrated PostgreSQL database
- Connected frontend and backend services
- Deployed production-ready application

---

# 👩‍💻 Author

**Ananya K**


---

⭐ If you like this project, consider giving it a star!
