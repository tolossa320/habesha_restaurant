# 🍽️ Habesha Restaurant

Habesha Restaurant is a modern restaurant web application built with React.js. It provides customers with an interactive platform to explore Ethiopian food, browse menu categories, add dishes to their shopping basket, authenticate their accounts, and make online payments securely.
The application integrates Firebase for authentication and database management, Stripe for payment processing, and Render for backend deployment.


## 🎯 Project Objectives
- Develop a real-world restaurant web application.
- Practice React.js component-based development.
- Implement user authentication and database integration.
- Integrate a third-party payment gateway.
- Develop RESTful APIs using Node.js and Express.js.
- Gain practical experience deploying backend applications.


## 🚀 Features
- *Responsive Design*: User-friendly interface compatible with desktop, tablet, and mobile devices.
- Food Menu: Browse different Ethiopian food categories, including vegetarian dishes, meat dishes, snacks, and beverages.
- Shopping Cart: Add food items to the basket and manage orders.
- User Authentication: Register and sign in using Firebase Authentication.
- Database Management: Store and retrieve application data using Firebase Cloud Firestore.
- Online Payment: Integrated Stripe payment gateway for processing payments.
- Backend API: Node.js and Express.js backend for handling server-side operations.
- Order Management: Manage customer orders and payment-related operations.
## 🛠️ Technologies Used
Frontend
- React.js
- JavaScript (ES6+)
- HTML5
- CSS3
- CSS Modules
- React Router DOM
- Axios
- React Icons
Backend
- Node.js
- Express.js
- REST API
- Render (Backend Deployment)
Database & Authentication
- Firebase Authentication
- Firebase Cloud Firestore

Payment Integration
- Stripe Payment Gateway

Development Tools
- Visual Studio Code
- Git
- GitHub
# 🏗️ Project Architecture
The application follows a frontend-backend architecture:
1. React.js: Handles the user interface and client-side interactions.
2. Firebase Authentication: Manages user registration and login.
3. Cloud Firestore: Stores and retrieves application data.
4. Node.js & Express.js: Handle backend API requests and server-side operations.
5. Stripe: Processes online payment transactions.
6. Render: Hosts and deploys the backend server.
## 📂 Project Structure
habesha_restaurant/
│
├── restaurant/                  # React frontend
│   ├── public/
│   ├── src/
│   │   ├── Components/
│   │   │   ├── Header/
│   │   │   ├── Hero/
│   │   │   ├── Menu/
│   │   │   ├── About/
│   │   │   ├── Contact/
│   │   │   └── Footer/
│   │   │
│   │   ├── Pages/
│   │   ├── Context/
│   │   ├── Utility/
│   │   └── App.jsx
│   │
│   └── package.json
│
├── functions/                   # Backend
│   ├── index.js
│   ├── package.json
│   └── ...
│
└── README.md
