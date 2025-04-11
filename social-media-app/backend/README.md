# Social Media Application Backend

This is the backend part of the Social Media Application built using Node.js, Express, and MongoDB. The backend provides RESTful APIs for user authentication, profile management, and CRUD operations for posts and comments.

## Features

- User Registration and Login
- Profile Management
- CRUD Operations for Posts
- CRUD Operations for Comments
- Engagement Features (Likes and Shares)

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT for Authentication

## Project Structure

```
backend
├── src
│   ├── controllers         # Contains the logic for handling requests
│   │   ├── authController.js
│   │   ├── postController.js
│   │   └── userController.js
│   ├── models              # Contains Mongoose models for MongoDB
│   │   ├── commentModel.js
│   │   ├── postModel.js
│   │   └── userModel.js
│   ├── routes              # Contains route definitions
│   │   ├── authRoutes.js
│   │   ├── postRoutes.js
│   │   └── userRoutes.js
│   ├── utils               # Utility functions
│   │   └── db.js
│   └── app.js              # Entry point of the application
├── package.json            # NPM dependencies and scripts
└── README.md               # Documentation for the backend
```

## Getting Started

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the backend directory:
   ```
   cd social-media-app/backend
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Set up your MongoDB database and update the connection string in `src/utils/db.js`.

5. Start the server:
   ```
   npm start
   ```

## API Documentation

Refer to the individual route files in the `src/routes` directory for detailed API endpoints and usage.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or features.