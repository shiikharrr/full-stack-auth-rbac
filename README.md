# Full Stack Authentication and Role-Based Access Control System

## Author

Shikhar

## Overview

This project is a full stack web application that implements user authentication and role-based access control. Users can register, log in, and access content based on their assigned roles. The system demonstrates secure authentication using JSON Web Tokens and enforces role-based authorization at both backend and frontend levels.

## Technology Stack

### Backend

* Java 17
* Spring Boot
* Spring Security
* JSON Web Token (JWT)
* Spring Data JPA and Hibernate
* Maven
* H2 Database

### Frontend

* React with TypeScript
* Vite
* React Router
* Axios
* React Hook Form
* Tailwind CSS

## Features

* User registration with role selection (USER or ADMIN)
* Secure login with JWT token generation
* Token-based authentication for protected API endpoints
* Role-based authorization
* Separate content rendering for USER and ADMIN roles
* Dashboard displaying role-specific content
* Logout functionality

## System Flow

1. A user registers with name, email, password, and role.
2. The backend stores user details securely.
3. The user logs in using credentials.
4. The backend validates credentials and returns a JWT token.
5. The frontend stores the token in local storage.
6. The token is used for authenticated requests.
7. The frontend decodes the token to determine user role.
8. UI components are rendered based on the user role.

## API Endpoints

### Authentication

* POST /api/auth/register
  Registers a new user

* POST /api/auth/login
  Authenticates user and returns JWT token

### Access Control

* GET /api/public
  Accessible by anyone

* GET /api/user
  Accessible only by users with USER role

* GET /api/admin
  Accessible only by users with ADMIN role

## Frontend Pages

* Register Page
  Allows new users to create an account

* Login Page
  Allows existing users to authenticate

* Dashboard Page
  Displays content based on user role

## Project Structure

FullStack Auth
├── backend
│   ├── controller
│   ├── service
│   ├── repository
│   ├── entity
│   ├── config
│   └── dto
└── frontend
├── src
│   ├── pages
│   ├── components
│   ├── api
│   └── routes

## Setup Instructions

### Backend Setup

1. Navigate to backend folder
   cd backend

2. Run the application
   mvnw.cmd spring-boot:run

3. Backend will run on
   http://localhost:8080

### Frontend Setup

1. Navigate to frontend folder
   cd frontend

2. Install dependencies
   npm install

3. Start development server
   npm run dev

4. Frontend will run on
   http://localhost:5173

## Notes

* The application uses an H2 in-memory database, so all data is reset when the backend restarts.
* JWT token is used for authentication and contains the user role.
* Role-based rendering is handled on the frontend by decoding the token.

## Future Improvements

* Integration with a persistent database such as MySQL or PostgreSQL
* Refresh token implementation
* Password validation and encryption improvements
* Enhanced UI and responsive design
* Role management through admin panel

## Conclusion

This project demonstrates a complete implementation of authentication and role-based authorization in a full stack application. It covers backend security, token management, and frontend access control, making it a strong foundation for scalable web applications.
