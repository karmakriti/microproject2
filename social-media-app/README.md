# Social Media Application

This project is a simple social media application built using MongoDB, Node.js, and React (or Vue.js). It features user registration, profile management, CRUD operations for posts and comments, and engagement functionalities like likes and shares.

## Project Structure

The project is divided into two main parts: the backend and the frontend.

### Backend

The backend is built with Node.js and Express, and it handles all the server-side logic, including database interactions.

- **src/app.js**: Entry point of the backend application. Initializes the Express app, connects to MongoDB, and sets up middleware and routes.
- **src/controllers/**: Contains controllers for handling authentication, posts, and user profiles.
  - `authController.js`: Functions for user authentication (registration and login).
  - `postController.js`: Functions for CRUD operations related to posts.
  - `userController.js`: Functions for managing user profiles.
- **src/models/**: Defines Mongoose schemas for the application.
  - `commentModel.js`: Schema for comments.
  - `postModel.js`: Schema for posts.
  - `userModel.js`: Schema for users.
- **src/routes/**: Contains route definitions for the application.
  - `authRoutes.js`: Routes for authentication.
  - `postRoutes.js`: Routes for posts.
  - `userRoutes.js`: Routes for user management.
- **src/utils/db.js**: Database connection logic for MongoDB.
- **package.json**: Configuration file for npm, listing dependencies and scripts.

### Frontend

The frontend is built using React (or Vue.js) and provides the user interface for the application.

- **public/index.html**: Main HTML file serving as the entry point for the frontend application.
- **src/components/**: Contains reusable components for the application.
  - `Comment.js`: Component for displaying and managing comments.
  - `Post.js`: Component for displaying and managing posts.
  - `Profile.js`: Component for displaying and managing user profiles.
- **src/pages/**: Contains page components for different views.
  - `HomePage.js`: Displays posts and user interactions.
  - `LoginPage.js`: User login functionality.
  - `RegisterPage.js`: User registration functionality.
- **src/services/**: Contains services for making API calls.
  - `api.js`: Functions for making API calls to the backend.
  - `auth.js`: Functions for handling authentication-related API calls.
- **src/App.js**: Main component setting up routes and rendering components.
- **src/index.js**: Entry point of the frontend application, rendering the App component into the DOM.
- **package.json**: Configuration file for npm, listing dependencies and scripts.

## Features

- User registration and authentication
- Profile management
- CRUD operations for posts and comments
- Engagement functionalities (likes and shares)

## Getting Started

To get started with the project, clone the repository and install the necessary dependencies for both the backend and frontend.

### Backend

1. Navigate to the `backend` directory.
2. Run `npm install` to install dependencies.
3. Set up your MongoDB connection in `src/utils/db.js`.
4. Run `npm start` to start the backend server.

### Frontend

1. Navigate to the `frontend` directory.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the frontend application.

## License

This project is licensed under the MIT License.