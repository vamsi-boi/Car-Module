# DriveEasy Car Rental Backend API

A complete RESTful API for a car rental service built with Node.js, Express.js, and MongoDB.

## Features

- **Cars Management**: CRUD operations for car inventory
- **Booking System**: Complete booking workflow with availability checks
- **Reviews System**: Customer review management
- **Newsletter**: Email subscription management
- **Data Validation**: Comprehensive input validation using express-validator
- **Error Handling**: Centralized error handling with consistent responses
- **CORS Support**: Cross-origin resource sharing for frontend integration
- **Database Seeding**: Automated sample data insertion

## Technology Stack

- **Runtime**: Node.js 18+
- **Framework**: Express.js v4
- **Database**: MongoDB with Mongoose ODM
- **Validation**: express-validator
- **Logging**: Morgan HTTP request logger

## Project Structure

```
backend/
├── src/
│   ├── config/
│   │   └── database.js          # Database connection configuration
│   ├── controllers/             # Route handlers
│   │   ├── carController.js
│   │   ├── bookingController.js
│   │   ├── reviewController.js
│   │   └── newsletterController.js
│   ├── middleware/              # Custom middleware
│   │   ├── errorHandler.js      # Error handling middleware
│   │   └── validation.js        # Validation rules
│   ├── models/                  # Mongoose schemas
│   │   ├── Car.js
│   │   ├── Booking.js
│   │   ├── Review.js
│   │   └── NewsletterSubscriber.js
│   ├── routes/                  # API routes
│   │   ├── cars.js
│   │   ├── bookings.js
│   │   ├── reviews.js
│   │   └── newsletter.js
│   ├── seed.js                  # Database seeding script
│   └── server.js                # Main server file
├── .env.example                 # Environment variables template
├── .env                         # Environment configuration (created)
├── package.json                 # Dependencies and scripts
├── postman_collection.json      # API testing collection
└── README.md                    # This file
```

## Quick Start

### Prerequisites
- Node.js 18 or higher
- MongoDB installed and running locally on port 27017
- npm or yarn package manager

### MongoDB Setup

**Option 1: Install MongoDB locally**
1. **Download and install MongoDB Community Server** from [https://www.mongodb.com/try/download/community](https://www.mongodb.com/try/download/community)
2. **Start MongoDB service**:
   - **Windows**: MongoDB should start automatically as a service, or run `mongod` in Command Prompt
   - **macOS**: Run `brew services start mongodb/brew/mongodb-community` (if installed via Homebrew) or `mongod`
   - **Linux**: Run `sudo systemctl start mongod` or `mongod`
3. **Verify MongoDB is running**: Open a new terminal and run `mongo` or `mongosh` to connect to the database

**Option 2: Use MongoDB Atlas (Cloud)**
1. Create a free account at [https://www.mongodb.com/atlas](https://www.mongodb.com/atlas)
2. Create a new cluster and get your connection string
3. Update the `MONGODB_URI` in your `.env` file with the Atlas connection string

**Option 3: Use Docker**
```bash
docker run -d -p 27017:27017 --name mongodb mongo:latest
```

### Installation

1. **Clone and navigate to backend directory**:
   ```bash
   cd backend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Setup environment variables**:
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` file with your configuration:
   ```env
   MONGODB_URI=mongodb://localhost:27017/car_rental
   PORT=5000
   CORS_ORIGINS=http://localhost:5173,http://localhost:3000
   ```

4. **Seed the database with sample data**:
   ```bash
   npm run seed
   ```

5. **Start the development server**:
   ```bash
   npm run dev
   ```

The API will be available at `http://localhost:5000`

### Production Start
```bash
npm start
```

## API Endpoints

### Health Check
- **GET** `/api/health` - Server health status

### Cars (Public)
- **GET** `/api/cars` - List all cars (supports filtering)
  - Query parameters:
    - `type` - Filter by car type
    - `fuelType` - Filter by fuel type
    - `minPrice` - Minimum price filter
    - `maxPrice` - Maximum price filter
    - `available` - Filter by availability
- **GET** `/api/cars/:id` - Get single car details

### Cars (Admin)
- **POST** `/api/admin/cars` - Add new car
- **PATCH** `/api/admin/cars/:id` - Update car
- **DELETE** `/api/admin/cars/:id` - Delete car

### Bookings
- **POST** `/api/bookings` - Create new booking
- **GET** `/api/admin/bookings` - List all bookings (Admin)

### Reviews
- **GET** `/api/reviews` - List all reviews
  - Query parameters:
    - `rating` - Filter by rating
    - `verified` - Filter by verification status
- **POST** `/api/reviews` - Add new review

### Newsletter
- **POST** `/api/newsletter` - Subscribe to newsletter

## Data Models

### Car Model
```javascript
{
  name: String (required, max: 100),
  type: String (required, enum: ['Sedan', 'SUV', 'Hatchback', 'Luxury', 'Sports', 'Electric']),
  pricePerDay: Number (required, min: 0, max: 50000),
  seats: Number (required, min: 2, max: 10),
  fuelType: String (required, enum: ['Petrol', 'Diesel', 'CNG', 'Electric', 'Hybrid']),
  imageUrl: String (required, valid URL),
  available: Boolean (default: true),
  features: [String]
}
```

### Booking Model
```javascript
{
  userName: String (required, max: 100),
  userEmail: String (required, valid email),
  userPhone: String (optional, valid phone),
  carId: ObjectId (required, ref: 'Car'),
  startDate: Date (required, future date),
  endDate: Date (required, after startDate),
  totalPrice: Number (calculated automatically),
  status: String (enum: ['pending', 'confirmed', 'cancelled', 'completed']),
  specialRequests: String (optional, max: 500)
}
```

### Review Model
```javascript
{
  reviewerName: String (required, max: 100),
  rating: Number (required, 1-5),
  comment: String (required, max: 1000),
  verified: Boolean (default: false)
}
```

### Newsletter Subscriber Model
```javascript
{
  email: String (required, unique, valid email),
  active: Boolean (default: true)
}
```

## Sample API Responses

### Success Response Format
```json
{
  "success": true,
  "data": { /* response data */ },
  "message": "Operation completed successfully"
}
```

### Error Response Format
```json
{
  "success": false,
  "data": null,
  "message": "Error description",
  "errors": [ /* validation errors if any */ ]
}
```

## Business Logic

### Booking System
1. **Availability Check**: Verifies car exists and is available
2. **Date Validation**: Ensures dates are valid and in the future
3. **Overlap Prevention**: Checks for existing bookings with overlapping dates
4. **Price Calculation**: Automatically calculates total price based on duration
5. **Status Management**: Sets booking status to 'confirmed' upon creation
6. **Car Availability**: Marks car as unavailable after booking (demo logic)

### Validation Rules
- All inputs are validated using express-validator
- MongoDB ObjectIds are validated for all ID parameters
- Email addresses are validated with regex patterns
- Date validations ensure logical booking periods
- Price ranges are enforced to prevent invalid values

## Error Handling

The API uses a centralized error handling system:
- **422**: Validation errors with detailed field-specific messages
- **404**: Resource not found
- **400**: Bad requests (business logic violations)
- **500**: Internal server errors

## Database Seeding

The seed script populates the database with:
- **20 Indian cars** with realistic data and image URLs
- **5 customer reviews** with authentic Indian names and testimonials

Run seeding:
```bash
npm run seed
```

## Development Features

- **Morgan Logging**: HTTP request logging for debugging
- **CORS Configuration**: Supports multiple frontend origins
- **Environment Configuration**: Flexible environment-based settings
- **Validation Middleware**: Reusable validation rules
- **Error Middleware**: Consistent error response formatting

## Testing

Use the provided Postman collection (`postman_collection.json`) to test all API endpoints. Import the collection into Postman and update the base URL if needed.

## Deployment Notes

1. Set `NODE_ENV=production` in production
2. Use a production MongoDB URI
3. Configure appropriate CORS origins
4. Ensure proper error logging and monitoring

## License

MIT License - feel free to use for learning and development purposes.

---

**DriveEasy Car Rental API** - Built for intermediate developers learning full-stack development.