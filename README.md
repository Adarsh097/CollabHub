# ⚡ Real-time Collaboration Platform

A **full-stack real-time collaboration platform** built with scalable technologies like **Stream**, **Clerk**, **Prisma + PostgreSQL**, and **Sentry**.  
It features **chat, file sharing, polls, video calls, authentication, and more** — designed for **production-grade deployments**.

<img width="1601" height="928" alt="Preview" src="https://github.com/user-attachments/assets/603d599b-55bd-4dcf-aa41-643d387f182d" />

---

## ✨ Features
- 💬 **Real-time Messaging** with Threads, Reactions & Pinned Messages  
- 📂 **File Sharing** (Images, PDFs, ZIPs & more)  
- 📊 **Polls** with Multiple Options, Anonymous Mode, Suggestions & Comments  
- 🔐 **Clerk Authentication** with Secure User Management  
- 📨 **Direct Messages & Private Channels**  
- 📹 **1-on-1 and Group Video Calls** with Screen Sharing & Recording  
- 🎉 **Real-time Reactions** during Calls  
- 🔧 **Background Jobs** powered by Inngest  
- 🚨 **Production-grade Error Monitoring** with Sentry  
- 🎯 **Scalable Technologies** powered by Stream  

---

## 🛠 Tech Stack
- **Frontend:** React + Vite + TailwindCSS  
- **Backend:** Node.js + Express  
- **Database:** PostgreSQL with Prisma ORM  
- **Authentication:** Clerk  
- **Real-time Messaging & Calls:** Stream  
- **Background Jobs:** Inngest  
- **Error Monitoring:** Sentry  

---

## ⚙️ Environment Configuration

### Backend (`/backend/.env`)
```env
PORT=5001

# Database (PostgreSQL)
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public"

NODE_ENV=development

# Clerk Authentication
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key_here
CLERK_SECRET_KEY=your_clerk_secret_key_here

# Stream API
STREAM_API_KEY=your_stream_api_key_here
STREAM_API_SECRET=your_stream_api_secret_here

# Sentry
SENTRY_DSN=your_sentry_dsn_here

# Inngest Background Jobs
INNGEST_EVENT_KEY=your_inngest_event_key_here
INNGEST_SIGNING_KEY=your_inngest_signing_key_here

# Client URL
CLIENT_URL=http://localhost:5173
