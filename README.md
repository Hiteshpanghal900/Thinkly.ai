# Thinkly.ai

![Node.js](https://img.shields.io/badge/Node.js-18.x-green?logo=node.js)
![React](https://img.shields.io/badge/React-18-blue?logo=react)
![Clerk](https://img.shields.io/badge/Auth-Clerk-orange)

Thinkly.ai is a full-stack AI-powered web application designed to enhance productivity and content creation. It provides features like:

- ✍️ AI-generated articles and blog titles  
- 🖼️ Background and object removal from images  
- 📄 Resume review and optimization  

This project blends modern UI design, real-time API integration, and scalable architecture.
<p align="center">
  <img src="preview.png" alt="Thinkly.ai Preview" width="700"/>
</p>

## 🛠️ Tech Stack

**Frontend:** React, TailwindCSS, Clerk  
**Backend:** Node.js, Express, PostgreSQL  
**APIs & Services:** Google Gemini, Clipdrop, Cloudinary  


## 📁 Project Structure
```
Thinkly.ai/
├── Frontend/ # React frontend with Clerk authentication
├── server/ # Express backend with PostgreSQL and API integrations
├── preview.png
├── .gitignore
└── README.md
```

## 🚀 Getting Started

1. Clone the repository:
```bash
git clone https://github.com/Hiteshpanghal900/thinkly.ai.git
cd thinkly.ai
```

2. Install dependencies:
```bash
cd Frontend
npm install

cd ../server
npm install
```

## 🔧 Environment Setup

Before running the project, create a `.env` file in the `server/` directory and add the following environment variables:

```env
# PostgreSQL Database URL (Neon)
DATABASE_URL=your_database_url_here

# Clerk (Authentication)
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Gemini AI (Google)
GEMINI_API_KEY=your_gemini_api_key

# Clipdrop (Image Editing API)
CLIPDROP_API_KEY=your_clipdrop_api_key

# Cloudinary (Media Upload)
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

Before running the frontend, create a `.env` file in the `Frontend/` directory and add the following environment variables:
```env
VITE_CLERK_PUBLISHABLE_KEY=your_vite_clerk_publishable_key

VITE_BASE_URL = localhost
```

## ▶️ Run the Application
**Start Frontend**
```bash
npm run dev
```

**Start Backend (in parallel)**
```bash
npm run server
```

![Node.js](https://img.shields.io/badge/Node.js-18.x-green?logo=node.js)
![React](https://img.shields.io/badge/React-18-blue?logo=react)
![Clerk](https://img.shields.io/badge/Auth-Clerk-orange)

**The project is ready to run.**
