# Simple Restaurant Management System

This project is a simple restaurant management system built using Node.js, Express, and MongoDB. It demonstrates basic CRUD operations through RESTful APIs.

## Microproject questions

```
You will create a MongoDB, Express, and Node.js application:

Consider using the ES module import/export statements
Install the full Express required and recommended dependencies:
Install Express, dotenv, mongoose as full dependences
Install Nodemon as development dependency only
Following the MEN folder structure, add all required folders and place each JS file in its corresponding folder as explained in the lecture
Connect your application with your Atlas cloud MongoDB. Make sure to place the connection string in a safe file and just include it within your application as explained in our lecture
Prepare a good professional schema for your collection (add some rules and validation) for demonstration
Your collection in MongoDB [table in SQL] should contain at least five fields (5 keys with their values)
Add all the required code/files to full implement the "CREATE" operation

```

## Features

- Add new restaurants (CREATE operation).
- Add new menu items linked to restaurants.
- Retrieve, Update, and Delete restaurants and menu items.

## Technologies Used

- Node.js
- Express.js
- MongoDB (Atlas)
- Mongoose
- dotenv for environment variable management
- Nodemon (for development)

## System Architecture


## Folder Structure

```
Microproject2/
│
├── models/          # Contains Mongoose schemas
│   ├── MenuItem.js
│   └── Restaurant.js
│
├── controllers/     # Contains logic for handling requests
│   └── restaurantController.js
│
├── routes/          # Contains route definitions
│   └── restaurantRoutes.js
│
├── config/          # Contains configuration files
│   └── db.js
│
├── .env             # Environment variables (e.g., MongoDB connection string)
├── server.js        # Entry point of the application
└── package.json     # Project metadata and dependencies
```

## How to Run

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd Microproject2
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Install Nodemon as a development dependency:

   ```bash
   npm install --save-dev nodemon
   ```

4. Set up your `.env` file with the following content:

   ```
   MONGO_URI=<Your MongoDB Atlas Connection String>
   PORT=3000
   ```

5. Start the server:

   ```bash
   npm start
   ```

6. Use tools like Postman or a browser to interact with the APIs.

## Example "CREATE" Operation

### Restaurant Schema

The `Restaurant` schema contains the following fields:

- `name` (String, required, trimmed)
- `location` (String, required)
- `cuisine` (String, required)
- `rating` (Number, default: 3, min: 1, max: 5)
- `isOpen` (Boolean, default: true)

### Sample API Endpoint

**POST** `/api/restaurants`

**Request Body:**

```json
{
  "name": "The Gourmet Kitchen",
  "location": "Downtown, City Center",
  "cuisine": "Italian",
  "rating": 4.5,
  "isOpen": true
}
```

**Response:**

```json
{
  "message": "Restaurant created successfully",
  "data": {
    "_id": "64b7f9c2e4b0f5a1d8c9e123",
    "name": "The Gourmet Kitchen",
    "location": "Downtown, City Center",
    "cuisine": "Italian",
    "rating": 4.5,
    "isOpen": true
  }
}
```

## Notes

- Ensure your MongoDB Atlas cluster is properly set up and accessible.
- Use environment variables to securely store sensitive information like the MongoDB connection string.
- The application uses the MEN (Models, Express, Node.js) architecture for better organization and scalability.
