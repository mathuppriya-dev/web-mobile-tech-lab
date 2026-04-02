# 📘 Student Management API (Models & Routes)

👩‍💻 Developed by **Mathuppriya Naguleswaran**

---

## 🚀 Project Overview

This project is a simple backend application built using **Node.js, Express.js, MongoDB, and Mongoose** to manage student data.

It demonstrates how to:

- 📌 define a MongoDB data model using Mongoose  
- 🔀 create API routes using Express  
- ✅ validate student data before storing it  
- ⚠️ handle errors properly in backend development  

---

## 🏗️ Technologies Used

- 🟢 Node.js  
- ⚡ Express.js  
- 🍃 MongoDB  
- 🧩 Mongoose  
- 🔄 Nodemon  

---

## 📂 Project Structure

```bash
student-management-api/
│
├── 📁 models/
│   └── 📄 Student.js
│
├── 📁 routes/
│   └── 📄 students.js
│
├── 📄 server.js
├── 📄 package.json
└── 📄 README.md
````

---

## 📌 Student Model

📄 `models/Student.js`

Defines the structure of student data in MongoDB.

### 🧠 Fields

* 📝 name → String (required, trimmed)
* 📧 email → String (required, unique, trimmed)
* 🏫 faculty → String (optional)
* 🎓 year → Number (1–4)

### ⚙️ Features of the Model

* ✅ Required field validation
* ✂️ Removes extra spaces (`trim`)
* 🚫 Prevents duplicate emails
* 🔢 Restricts year between 1–4
* 🕒 Auto timestamps (`createdAt`, `updatedAt`)

---

## 🔀 Student Routes

📄 `routes/students.js`

The `students.js` file defines and handle the API endpoints related to students.

---

## 📡 API Endpoints

### ➕ Create Student

```
POST /students
```

📥 Request Body:

```json
{
  "name": "Alice",
  "email": "alice@example.com",
  "faculty": "Computing",
  "year": 2
}
```

---

### 🔍 Get Student by ID

```
GET /students/:id
```

---

## ⚠️ Error Handling

* ❌ 400 → Bad Request
* 🔍 404 → Not Found
* ✅ 201 → Created

---

## 🔄 Request Flow

### 📌 POST Flow

1. 📤 Client sends request
2. 🔀 Route receives data
3. 🧩 Model validates data
4. 💾 Data saved to MongoDB
5. 📥 Response returned

---

### 📌 GET Flow

1. 📤 Client sends ID
2. 🔍 Route reads `req.params.id`
3. 🗄️ Database is queried
4. 📥 Response returned

---

## ▶️ How to Run

```bash
npm init -y
npm install express mongoose nodemon
npx nodemon server.js
```

---

## 🧪 Testing (Postman)

* ➕ POST → `http://localhost:5000/students`
* 🔍 GET → `http://localhost:5000/students/:id`

---

## 🧠 Learning Outcomes
* By completing this project, I learned how to:

* create Mongoose schemas and models
* apply validation rules in MongoDB
* use Express Router for modular routing
* connect Node.js applications to MongoDB
* create REST API endpoints
* handle backend errors properly
* organize backend files using models and routes


A few small corrections i faced during this learning
`server.js` inside the `routes` folder. Move `server.js` to the **root folder** . 
make sure your project folder name is simple, like `student-management-api`, so `npm init -y` works properly.

---

## 📌 Key Concepts

### Model

A model defines how data is structured in the database.

### Schema

A schema defines the rules for each field in the model.

### Route

A route defines how clients interact with the application through API endpoints.

### Validation

Validation ensures only correct and meaningful data is stored.

### Middleware

Middleware processes requests before they reach the route logic.

## Summary

This project is a beginner-friendly backend application that demonstrates the relationship between **models and routes** in Node.js and MongoDB development.

In simple terms:

* **Model** defines the student data structure
* **Route** defines how users can create and retrieve student data

This project is a strong foundation for learning real-world backend development with the MERN stack.

👉 **Model = Data Structure**
👉 **Route = Operations**

---

## 👩‍💻 Author

**Mathuppriya Naguleswaran**
🎓 BSc (Hons) Software Engineering


```







