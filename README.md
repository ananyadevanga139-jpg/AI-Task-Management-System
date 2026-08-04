# 🚀 AI Task Management System

An AI-powered full-stack task management application that helps users create, organize, track, and optimize their daily tasks with intelligent productivity assistance.

This project provides secure authentication, task management, dashboard analytics, and AI-generated productivity suggestions using a modern full-stack architecture.

---

## ✨ Features

### 🔐 Authentication

- User Registration
- User Login
- JWT Authentication
- Protected Routes
- Password Encryption using bcrypt

### ✅ Task Management

- Create tasks
- View tasks
- Update tasks
- Delete tasks
- Mark tasks as completed
- Filter tasks by status

### 📊 Dashboard

- Total task count
- Completed task count
- Pending task count
- Productivity overview

### 🤖 AI Productivity Assistant

- AI-generated task suggestions
- Smart productivity recommendations
- Workflow improvement suggestions

### 🎨 User Interface

- Responsive design
- Modern dashboard UI
- Interactive task cards
- Loading states
- Error handling

---

# 🛠️ Tech Stack

## Frontend

- React.js
- TypeScript
- Tailwind CSS
- Vite
- React Router

## Backend

- Node.js
- Express.js
- TypeScript
- JWT

## Database

- PostgreSQL

## Tools

- VS Code
- Thunder Client
- GitHub

---

# 📂 Project Structure

```
AI-Task-Management-System

├── frontend
│   ├── src
│   │   ├── pages
│   │   │   ├── Login.tsx
│   │   │   ├── Register.tsx
│   │   │   ├── Dashboard.tsx
│   │   │   └── Tasks.tsx
│   │   │
│   │   └── services
│   │       └── api.ts
│   │
│   └── package.json
│
├── backend
│   ├── src
│   │   ├── controllers
│   │   ├── routes
│   │   ├── middleware
│   │   ├── models
│   │   └── server.ts
│   │
│   └── package.json
│
└── README.md
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/ananyadevanga139-jpg/AI-Task-Management-System.git

cd AI-Task-Management-System
```

---

# Backend Setup

Go to backend folder:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create `.env` file:

```
PORT=5000

DATABASE_URL=your_postgresql_url

JWT_SECRET=your_secret_key
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

# Frontend Setup

Open another terminal:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Run frontend:

```bash
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

# 🔗 API Endpoints

## Authentication

### Register

```
POST /api/auth/register
```

### Login

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

## AI Assistant

```
GET /api/ai/suggestions
```

---

# 🚀 Deployment

## Frontend Deployment

Platform:

**Vercel**

Steps:

1. Connect GitHub repository to Vercel.
2. Select `frontend` as root directory.
3. Build command:

```
npm run build
```

4. Output directory:

```
dist
```

Frontend URL:

```
https://your-frontend-url.vercel.app
```

---

## Backend Deployment

Platform:

**Render**

Steps:

1. Connect GitHub repository.
2. Create Web Service.
3. Select `backend` folder.

Build Command:

```
npm install
```

Start Command:

```
npm run start
```

Environment Variables:

```
PORT
DATABASE_URL
JWT_SECRET
```

Backend URL:

```
https://your-backend-url.onrender.com
```

---

# 🔒 Security Features

- JWT authentication
- Password hashing
- Protected APIs
- Input validation
- User-specific data access

---

# 🔮 Future Enhancements

- Real-time task updates
- Email reminders
- Calendar integration
- AI task prioritization
- Team collaboration
- Mobile application

---

# 👩‍💻 Author

**Ananya K**

Information Science Engineering Student

---

# ⭐ Project Highlights

This project demonstrates:

- Full-stack development
- REST API development
- PostgreSQL integration
- Authentication systems
- AI-powered productivity features
- Cloud deployment workflow