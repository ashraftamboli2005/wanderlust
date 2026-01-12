# 🌍 Wanderlust – Travel & Stay Listing Platform

A full-stack web application inspired by Airbnb, built using **Node.js, Express, MongoDB, and EJS**.  
Wanderlust allows users to explore, create, review, and manage travel stay listings with secure authentication, image uploads, and a clean MVC architecture.

---

## 🔗 Live Website
👉(https://wanderlust-kdl3.onrender.com/)
*(replace with your actual Render URL)*

## 📦 GitHub Repository
👉 https://github.com/ashraftamboli2005/wanderlust

---

## 🚀 Features

### 🏡 Listings Management (CRUD)
- Create, edit, view, and delete travel stay listings
- Upload and manage listing images using Cloudinary

### 🔐 Authentication & Authorization
- User signup and login
- Secure authentication using Passport.js
- Authorization to ensure only listing owners can edit or delete their listings

### ⭐ Reviews & Ratings
- Users can add and delete reviews
- Ratings displayed for each listing

### 📷 Image Upload & Storage
- Multer + Cloudinary integration for secure image handling

### 🧱 Clean MVC Architecture
- Modular routes, controllers, models, and middleware
- Custom error handling and server-side validations

### ⚡ Responsive UI
- Server-side rendering using EJS
- Styled with Bootstrap and custom CSS




⚙️ Installation and Setup
1️⃣ Clone the repository
git clone https://github.com/ashraftamboli2005/wanderlust
cd wanderlust

2️⃣ Install dependencies
npm install

3️⃣ Create a .env file and add
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_KEY=your_cloudinary_key
CLOUDINARY_SECRET=your_cloudinary_secret
SESSION_SECRET=your_session_secret
MONGO_URL=your_mongodb_connection_string

4️⃣ Run the server
npm start

5️⃣ Open in browser
http://localhost:8080


⚠️ Ensure MongoDB Atlas and Cloudinary credentials are properly configured before running the application.



🛠️ Technologies Used

Node.js & Express.js – Backend framework

MongoDB & Mongoose – Database

EJS – Server-side templating

Passport.js – Authentication

Multer & Cloudinary – Image upload and storage

Bootstrap – Responsive UI

Render – Deployment platform

📄 License

This project is open-source and available under the MIT License.

📬 Contact

Feel free to reach out:

👤 Ashraf Tamboli

📧 Email: ashraftamboli2005@gmail.com

🔗 GitHub: https://github.com/ashraftamboli2005
