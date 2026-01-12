🌍 Wanderlust – Travel & Stay Listing Platform
=============================================

A full-stack web application inspired by Airbnb, built using **Node.js, Express, MongoDB, and EJS**.  
Wanderlust allows users to explore, create, review, and manage travel stay listings with secure authentication, image uploads, and a clean MVC architecture.

🔗 **Live Website**  
👉 https://wanderlust-xxxxxxxx.onrender.com  
*(replace with your actual Render URL)*

📦 **GitHub Repository**  
👉 https://github.com/ashraftamboli2005/wanderlust

---

🚀 Features
-----------

- 🏡 **Listings Management (CRUD)**  
  Create, edit, view, and delete travel stay listings.

- 📷 **Image Upload & Storage**  
  Upload and manage listing images using Cloudinary.

- 🔐 **Authentication & Authorization**  
  Secure user signup and login using Passport.js.  
  Only listing owners can edit or delete their listings.

- ⭐ **Reviews & Ratings**  
  Users can add and delete reviews.  
  Ratings are displayed for each listing.

- 🧱 **Clean MVC Architecture**  
  Modular routes, controllers, models, and middleware.  
  Custom error handling and server-side validations.

- ⚡ **Responsive UI**  
  Server-side rendering using EJS.  
  Styled with Bootstrap and custom CSS.

---

⚙️ Installation and Setup
-------------------------

### 1. Clone the repository
```bash
git clone https://github.com/ashraftamboli2005/wanderlust
cd wanderlust

---

```md
### 2. Install requirements
```bash
npm install
3. Create a .env file and add
env
Copy code
CLOUDINARY_CLOUD_NAME=<your cloudinary name>
CLOUDINARY_KEY=<your cloudinary key>
CLOUDINARY_SECRET=<your cloudinary secret>
SESSION_SECRET=<your session secret>
MONGO_URL=<your mongodb connection string>
4. Run the server
bash
Copy code
npm start
5. Open in browser
text
Copy code
http://localhost:8080
