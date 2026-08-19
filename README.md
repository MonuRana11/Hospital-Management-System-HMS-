🏥 Hospital Management System

A full-stack Hospital Management System built using the MERN stack — MongoDB, Express.js, React.js, and Node.js. The project is designed to help hospitals manage patients, doctors, appointments, authentication, and other hospital-related operations through a centralized web application.

🚀 Features
🔐 User authentication and authorization
👨‍⚕️ Doctor management
🧑‍🤝‍🧑 Patient management
📅 Appointment booking and management
🏥 Hospital/department management
📋 Patient records management
👤 Admin dashboard
📊 Dashboard with hospital statistics
🔎 Search and manage doctors/patients
📱 Responsive user interface
🔒 Secure API endpoints
🗄️ MongoDB database integration
🛠️ Tech Stack
Frontend
React.js
Vite
React Router
Axios
CSS / Bootstrap / Tailwind CSS
Backend
Node.js
Express.js
MongoDB
Mongoose
JWT Authentication
bcrypt.js
Development Tools
Git & GitHub
VS Code
Postman
ESLint
📁 Project Structure
hospital-management-system/
│
├── client/                 # React + Vite frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── context/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── server/                 # Node + Express backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   ├── server.js
│   └── package.json
│
├── .gitignore
└── README.md

⚙️ Installation & Setup
1. Clone the repository
git clone https://github.com/your-username/hospital-management-system.git
cd hospital-management-system

2. Install frontend dependencies
cd client
npm install

3. Install backend dependencies
cd ../server
npm install

4. Configure environment variables

Create a .env file inside the server directory:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

5. Start the backend
cd server
npm run dev


The backend will run on:

http://localhost:5000

6. Start the frontend

Open another terminal:

cd client
npm run dev


The frontend will normally be available at:

http://localhost:5173

🔑 User Roles

The system can support different roles, such as:

Role	Responsibilities
Admin	Manage doctors, patients, appointments, and hospital data
Doctor	View appointments and manage patient information
Patient	Book appointments and view their records
🔄 Application Flow
User
  │
  ▼
React + Vite Frontend
  │
  ▼
Express.js REST API
  │
  ▼
Node.js Backend
  │
  ▼
MongoDB Database

🔒 Security
Passwords are hashed using bcrypt.
JWT is used for authentication.
Protected routes restrict unauthorized access.
Environment variables are used for sensitive configuration.
Server-side validation is applied to API requests.
📸 Screenshots

Add screenshots of your project here:

screenshots/
├── login.png
├── dashboard.png
├── patients.png
├── doctors.png
└── appointments.png


Example:

![Login Page](screenshots/login.png)
![Dashboard](screenshots/dashboard.png)

📌 Future Improvements
Online payment integration
Prescription management
Medical report uploads
Email/SMS appointment notifications
Advanced analytics and reports
Hospital billing system
Doctor availability scheduling
Video consultation
Cloud deployment
🤝 Contributing

Contributions are welcome!

Fork the repository.
Create a new branch.
Make your changes.
Commit your changes.
Push the branch.
Open a Pull Request.
git checkout -b feature/new-feature
git add .
git commit -m "Add new feature"
git push origin feature/new-feature

📄 License

This project is created for educational and development purposes. You can add your preferred open-source license, such as the MIT License.

👨‍💻 Author

Monu Thakkur

GitHub: [https://github.com/your-username](https://github.com/MonuRana11)
Email: m.thakur.tech@gmail.com

⭐ If you find this project useful, consider giving it a star on GitHub!
