⚡ Real-time Collaboration Platform

A full-stack real-time collaboration platform built with scalable technologies like Stream, Clerk, Prisma + PostgreSQL, and Sentry.
It features chat, file sharing, polls, video calls, authentication, and more — designed for production-grade deployments.

<img width="1601" height="928" alt="image" src="https://github.com/user-attachments/assets/603d599b-55bd-4dcf-aa41-643d387f182d" />



✨ Features

💬 Real-time Messaging with Threads, Reactions & Pinned Messages

📂 File Sharing (Images, PDFs, ZIPs & more)

📊 Polls with Multiple Options, Anonymous Mode, Suggestions & Comments

🔐 Clerk Authentication with Secure User Management

📨 Direct Messages & Private Channels

📹 1-on-1 and Group Video Calls with Screen Sharing & Recording

🎉 Real-time Reactions during Calls

🔧 Background Jobs powered by Inngest

🚨 Production-grade Error Monitoring with Sentry

🎯 Scalable Technologies like Stream


🛠 Tech Stack

Frontend: React + Vite + TailwindCSS

Backend: Node.js + Express

Database: PostgreSQL with Prisma ORM

Authentication: Clerk

Real-time Messaging & Calls: Stream

Background Jobs: Inngest

Error Monitoring: Sentry

⚙️ Environment Variables

Backend (/backend/.env)

PORT=5001

# Database (PostgreSQL)
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public"

NODE_ENV=development

CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key_here
CLERK_SECRET_KEY=your_clerk_secret_key_here

STREAM_API_KEY=your_stream_api_key_here
STREAM_API_SECRET=your_stream_api_secret_here

SENTRY_DSN=your_sentry_dsn_here

INNGEST_EVENT_KEY=your_inngest_event_key_here
INNGEST_SIGNING_KEY=your_inngest_signing_key_here

CLIENT_URL=http://localhost:5173


Frontend (/frontend/.env)

VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key_here
VITE_STREAM_API_KEY=your_stream_api_key_here
VITE_SENTRY_DSN=your_sentry_dsn_here
VITE_API_BASE_URL=http://localhost:5001/api



🚀 Setup Instructions
1️⃣ Clone the Repository
git clone https://github.com/your-username/your-repo.git
cd your-repo

2️⃣ Backend Setup
cd backend
npm install

Start development server:
npm run dev

3️⃣ Frontend Setup
cd frontend
npm install
npm run dev

🧪 Development Notes

.env files are required for both backend and frontend.

Ensure PostgreSQL is running and DATABASE_URL is correctly configured.

Prisma will generate types automatically after running migrations.

In production, set NODE_ENV=production and adjust environment values accordingly.



