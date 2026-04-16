# Cake Shop Backend API

A Node.js + Express REST API for a cake shop application with MongoDB database.

## Features

- Cake management (CRUD operations)
- Order processing and management
- User authentication with JWT
- Role-based access control (customer/admin)
- MongoDB integration with Mongoose

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file with the following variables:
   ```
   MONGO_URI=mongodb://localhost:27017/cake-shop
   PORT=5000
   JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
   AWS_ACCESS_KEY=your-aws-access-key
   AWS_SECRET_KEY=your-aws-secret-key
   AWS_REGION=us-east-1
   AWS_S3_BUCKET=your-s3-bucket-name
   ```

4. Make sure MongoDB is running on localhost:27017

## Running the Application

- Development mode: `npm run dev`
- Production mode: `npm start`

## API Endpoints

### Cakes
- `GET /api/v1/cakes` - Get all cakes
- `GET /api/v1/cakes/:id` - Get single cake
- `POST /api/v1/cakes` - Create cake (admin only)
- `PUT /api/v1/cakes/:id` - Update cake (admin only)
- `DELETE /api/v1/cakes/:id` - Delete cake (admin only)

### Orders
- `POST /api/v1/orders` - Create new order
- `GET /api/v1/orders` - Get all orders (admin only)
- `GET /api/v1/orders/myorders` - Get user's orders
- `GET /api/v1/orders/:id` - Get order by ID
- `PUT /api/v1/orders/:id/status` - Update order status (admin only)

## Project Structure

```
backend/
├── config/
│   └── db.js              # Database connection
├── controllers/
│   ├── cakeController.js  # Cake logic
│   └── orderController.js # Order logic
├── models/
│   ├── Cake.js           # Cake schema
│   ├── User.js           # User schema
│   └── Order.js          # Order schema
├── routes/
│   ├── cakeRoutes.js     # Cake routes
│   └── orderRoutes.js    # Order routes
├── middleware/
│   └── auth.js           # JWT authentication
├── uploads/              # Temporary storage for cake images
├── server.js             # Main entry point
├── package.json
└── .env                  # Environment variables
```
