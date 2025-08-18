# DriveEasy - Full-Stack Car Rental Website

A complete, responsive car rental website built from scratch using modern web technologies. This project demonstrates intermediate-level full-stack development skills with a clean, professional design and comprehensive functionality.

## 🚗 Project Overview

DriveEasy is a premium car rental service website that provides users with an intuitive platform to browse, search, and book rental cars. The project includes both frontend and backend implementations with a focus on maintainable, readable code suitable for learning and development.

## ✨ Features

### Frontend Features
- **Responsive Design**: Mobile-first approach with clean, modern UI
- **Car Catalogue**: Display of 20 Indian cars with detailed information
- **Advanced Search & Filtering**: Filter by name, fuel type, and price range
- **Interactive Booking System**: Modal-based booking with validation
- **Customer Reviews**: Testimonials section with 5 authentic Indian reviews
- **Newsletter Subscription**: Email subscription with client-side validation
- **Smooth Animations**: ScrollReveal animations and CSS transitions
- **Modern UI Components**: Clean cards, buttons, and form elements

### Backend Features
- **RESTful API**: Complete API with proper HTTP status codes
- **Database Integration**: MongoDB with Mongoose ODM
- **Data Validation**: Comprehensive input validation using express-validator
- **Booking Logic**: Availability checks and date conflict resolution
- **Error Handling**: Centralized error handling with consistent responses
- **CORS Support**: Cross-origin resource sharing for frontend integration
- **Database Seeding**: Automated sample data insertion

## 🛠️ Technology Stack

### Frontend
- **HTML5**: Semantic markup with accessibility considerations
- **CSS3**: Flexbox & Grid layouts, custom properties, animations
- **JavaScript (ES6+)**: Modern vanilla JavaScript, no frameworks
- **Google Fonts**: Poppins font family for typography
- **Boxicons**: Icon library for UI elements
- **ScrollReveal**: Animation library for scroll-triggered effects

### Backend
- **Node.js 18+**: JavaScript runtime environment
- **Express.js v4**: Web application framework
- **MongoDB**: NoSQL database for data storage
- **Mongoose**: Object Document Mapping (ODM) library
- **express-validator**: Input validation and sanitization
- **Morgan**: HTTP request logger middleware
- **CORS**: Cross-origin resource sharing middleware

## 📁 Project Structure

```
car-rental-fullstack/
├── frontend/                    # Frontend application
│   ├── index.html              # Main HTML file
│   ├── styles/
│   │   └── style.css           # Main stylesheet
│   └── js/
│       ├── app.js              # Main JavaScript application
│       └── data.js             # Sample data (fallback)
├── backend/                     # Backend API
│   ├── src/
│   │   ├── config/
│   │   │   └── database.js     # Database configuration
│   │   ├── controllers/        # Route handlers
│   │   ├── middleware/         # Custom middleware
│   │   ├── models/             # Mongoose schemas
│   │   ├── routes/             # API routes
│   │   ├── seed.js             # Database seeding
│   │   └── server.js           # Main server file
│   ├── .env                    # Environment configuration
│   ├── package.json            # Backend dependencies
│   └── README.md               # Backend documentation
├── package.json                # Root package configuration
└── README.md                   # This file
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18 or higher
- MongoDB running locally
- Modern web browser

### Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd car-rental-fullstack
   ```

2. **Install dependencies**:
   ```bash
   npm run setup
   ```
   This command will install backend dependencies and seed the database.

3. **Start the backend server**:
   ```bash
   npm run backend-dev
   ```
   Backend will be available at `http://localhost:5000`

4. **Start the frontend (in a new terminal)**:
   ```bash
   npm run dev
   ```
   Frontend will be available at `http://localhost:5173`

### Alternative Setup (Step by Step)

1. **Backend Setup**:
   ```bash
   cd backend
   npm install
   cp .env.example .env  # Edit with your MongoDB URI
   npm run seed          # Populate database with sample data
   npm run dev           # Start development server
   ```

2. **Frontend Setup**:
   ```bash
   cd frontend
   # Open index.html in browser or use a local server
   python -m http.server 5173  # If using Python
   ```

## 🌐 API Endpoints

### Public Endpoints
- `GET /api/health` - Server health check
- `GET /api/cars` - List all cars (with filtering)
- `GET /api/cars/:id` - Get single car details
- `POST /api/bookings` - Create new booking
- `GET /api/reviews` - List customer reviews
- `POST /api/reviews` - Add new review
- `POST /api/newsletter` - Subscribe to newsletter

### Admin Endpoints
- `POST /api/admin/cars` - Add new car
- `PATCH /api/admin/cars/:id` - Update car details
- `DELETE /api/admin/cars/:id` - Delete car
- `GET /api/admin/bookings` - List all bookings

## 📊 Data Models

### Car Model
- Name, type (Sedan, SUV, Hatchback, Luxury, Sports, Electric)
- Price per day, number of seats, fuel type
- Image URL, availability status, features list

### Booking Model
- Customer details (name, email, phone)
- Car reference, booking dates, total price
- Booking status, special requests

### Review Model
- Reviewer name, rating (1-5 stars)
- Comment, verification status

## 🎨 Design Features

- **Apple-level Design Aesthetics**: Clean, sophisticated visual presentation
- **Consistent Color System**: Primary (#667eea), secondary, accent colors
- **Typography**: Poppins font with proper hierarchy (150% line height for body)
- **8px Spacing System**: Consistent spacing throughout
- **Responsive Breakpoints**: Mobile (<768px), tablet (768-1024px), desktop (>1024px)
- **Micro-interactions**: Hover states, transitions, loading animations

## 🔧 Development Features

### Frontend Integration
- Graceful backend fallback (uses hardcoded data if API unavailable)
- Real-time search and filtering
- Form validation with user feedback
- Loading states and error handling
- Responsive notification system

### Backend Architecture
- **MVC Pattern**: Clear separation of concerns
- **Middleware Pipeline**: Authentication, validation, error handling
- **Database Indexing**: Optimized queries for better performance
- **Input Sanitization**: Protection against malicious input
- **Comprehensive Logging**: Request logging for debugging

## 📱 Responsive Design

The website is fully responsive with:
- Mobile-first CSS approach
- Flexible grid layouts that adapt to screen size
- Touch-friendly interface elements
- Optimized images and performance
- Cross-browser compatibility

## 🧪 Testing

Use the provided Postman collection (`backend/postman_collection.json`) to test all API endpoints:
1. Import the collection into Postman
2. Set the base URL to `http://localhost:5000/api`
3. Test all endpoints with sample data

## 🚢 Deployment

### Frontend Deployment
- Can be deployed to any static hosting service (Netlify, Vercel, GitHub Pages)
- Update API base URL for production environment

### Backend Deployment
- Deploy to cloud services (Heroku, DigitalOcean, AWS)
- Use MongoDB Atlas for production database
- Set appropriate environment variables

## 📚 Learning Outcomes

This project demonstrates:
- **Frontend Skills**: Responsive design, vanilla JavaScript, API integration
- **Backend Skills**: RESTful API design, database modeling, validation
- **Full-Stack Integration**: Frontend-backend communication, error handling
- **Best Practices**: Code organization, documentation, version control
- **Problem Solving**: Booking logic, data validation, user experience

## 🤝 Contributing

This project is designed for learning purposes. Feel free to:
- Fork the repository
- Create feature branches
- Submit pull requests
- Report issues or suggest improvements

## 📄 License

MIT License - free to use for learning and development purposes.

## 🎯 Next Steps

Potential enhancements for advanced learning:
- User authentication and authorization
- Payment gateway integration (Stripe/Razorpay)
- Real-time notifications
- Car location and GPS tracking
- Admin dashboard with analytics
- Email templates for booking confirmations
- Image upload functionality
- Multi-language support

---

**DriveEasy Car Rental Website** - Built for intermediate developers learning full-stack development with modern web technologies.