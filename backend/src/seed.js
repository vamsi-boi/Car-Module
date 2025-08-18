const mongoose = require('mongoose');
require('dotenv').config();

const Car = require('./models/Car');
const Review = require('./models/Review');

/**
 * Seed Script
 * Populates the database with sample data
 */

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ MongoDB Connected for seeding');
  } catch (error) {
    console.error('❌ Database connection error:', error.message);
    process.exit(1);
  }
};

// Sample Indian cars data
const sampleCars = [
  {
    name: "Maruti Swift Dzire",
    type: "Hatchback",
    pricePerDay: 1400,
    seats: 5,
    fuelType: "Petrol",
    imageUrl: "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg",
    features: ["AC", "Power Steering", "Central Locking", "ABS"]
  },
  {
    name: "Tata Indica",
    type: "Hatchback",
    pricePerDay: 1000,
    seats: 5,
    fuelType: "Diesel",
    imageUrl: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg",
    features: ["AC", "Power Steering", "Music System"]
  },
  {
    name: "Hyundai i10",
    type: "Hatchback",
    pricePerDay: 1200,
    seats: 5,
    fuelType: "Petrol",
    imageUrl: "https://images.pexels.com/photos/1319845/pexels-photo-1319845.jpeg",
    features: ["AC", "Power Windows", "Central Locking"]
  },
  {
    name: "Maruti Alto 800",
    type: "Hatchback",
    pricePerDay: 900,
    seats: 4,
    fuelType: "Petrol",
    imageUrl: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg",
    features: ["Basic AC", "Power Steering"]
  },
  {
    name: "Hyundai Santro",
    type: "Hatchback",
    pricePerDay: 1100,
    seats: 5,
    fuelType: "Petrol",
    imageUrl: "https://images.pexels.com/photos/1319845/pexels-photo-1319845.jpeg",
    features: ["AC", "Power Steering", "Music System"]
  },
  {
    name: "Tata Nano",
    type: "Hatchback",
    pricePerDay: 800,
    seats: 4,
    fuelType: "Petrol",
    imageUrl: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg",
    features: ["Basic Features", "Compact Design"]
  },
  {
    name: "Maruti Wagon R",
    type: "Hatchback",
    pricePerDay: 1300,
    seats: 5,
    fuelType: "CNG",
    imageUrl: "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg",
    features: ["AC", "Power Steering", "Tall Boy Design"]
  },
  {
    name: "Hyundai Accent",
    type: "SUV",
    pricePerDay: 1800,
    seats: 5,
    fuelType: "Petrol",
    imageUrl: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg",
    features: ["AC", "Power Windows", "Music System", "ABS"]
  },
  {
    name: "Tata Indigo",
    type: "Sedan",
    pricePerDay: 1600,
    seats: 5,
    fuelType: "Diesel",
    imageUrl: "https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg",
    features: ["AC", "Power Windows", "Central Locking"]
  },
  {
    name: "Maruti Esteem",
    type: "Sedan",
    pricePerDay: 1500,
    seats: 5,
    fuelType: "Petrol",
    imageUrl: "https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg",
    features: ["AC", "Power Steering", "Music System"]
  },
  {
    name: "Mahindra Scorpio",
    type: "SUV",
    pricePerDay: 2800,
    seats: 7,
    fuelType: "Diesel",
    imageUrl: "https://images.pexels.com/photos/1335077/pexels-photo-1335077.jpeg",
    features: ["4WD", "AC", "Power Steering", "High Ground Clearance"]
  },
  {
    name: "Tata Sumo",
    type: "SUV",
    pricePerDay: 2200,
    seats: 9,
    fuelType: "Diesel",
    imageUrl: "https://images.pexels.com/photos/1335077/pexels-photo-1335077.jpeg",
    features: ["AC", "High Seating", "Spacious Interior"]
  },
  {
    name: "Maruti Omni",
    type: "SUV",
    pricePerDay: 1400,
    seats: 8,
    fuelType: "Petrol",
    imageUrl: "https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg",
    features: ["AC", "Sliding Doors", "Commercial Use"]
  },
  {
    name: "Hyundai Getz",
    type: "Hatchback",
    pricePerDay: 1300,
    seats: 5,
    fuelType: "Petrol",
    imageUrl: "https://images.pexels.com/photos/1319845/pexels-photo-1319845.jpeg",
    features: ["AC", "Power Windows", "ABS", "Airbags"]
  },
  {
    name: "Tata Safari",
    type: "Luxury",
    pricePerDay: 3500,
    seats: 7,
    fuelType: "Diesel",
    imageUrl: "https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg",
    features: ["4WD", "Leather Seats", "Premium Interior", "AC"]
  },
  {
    name: "Mahindra Bolero",
    type: "SUV",
    pricePerDay: 2000,
    seats: 7,
    fuelType: "Diesel",
    imageUrl: "https://images.pexels.com/photos/1335077/pexels-photo-1335077.jpeg",
    features: ["AC", "High Ground Clearance", "Rugged Build"]
  },
  {
    name: "Honda Civic",
    type: "Luxury",
    pricePerDay: 2800,
    seats: 5,
    fuelType: "Petrol",
    imageUrl: "https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg",
    features: ["AC", "Automatic", "Premium Interior", "Sunroof"]
  },
  {
    name: "Maruti Zen",
    type: "Hatchback", 
    pricePerDay: 1100,
    seats: 5,
    fuelType: "Petrol",
    imageUrl: "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg",
    features: ["AC", "Power Steering", "Music System"]
  },
  {
    name: "Tata Venture",
    type: "SUV",
    pricePerDay: 1800,
    seats: 7,
    fuelType: "Diesel",
    imageUrl: "https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg",
    features: ["AC", "Spacious", "Commercial Vehicle"]
  },
  {
    name: "Hyundai Verna",
    type: "Luxury",
    pricePerDay: 2500,
    seats: 5,
    fuelType: "Petrol",
    imageUrl: "https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg",
    features: ["AC", "Automatic", "Sunroof", "Premium Features"]
  }
];

// Sample Indian customer reviews
const sampleReviews = [
  {
    reviewerName: "Rajesh Kumar",
    rating: 5,
    comment: "Excellent service! The car was in perfect condition and the booking process was very smooth. Highly recommend DriveEasy for anyone looking for reliable car rental in Mumbai.",
    verified: true
  },
  {
    reviewerName: "Priya Sharma",
    rating: 4,
    comment: "Great experience with DriveEasy. The Hyundai Creta I rented was clean and well-maintained. Customer support was helpful throughout my trip to Goa. Will definitely book again!",
    verified: true
  },
  {
    reviewerName: "Amit Patel",
    rating: 5,
    comment: "Outstanding service! Rented a Honda City for my business trip to Bangalore. The car was delivered on time and pickup was hassle-free. Professional and reliable service.",
    verified: true
  },
  {
    reviewerName: "Sneha Reddy",
    rating: 4,
    comment: "Very satisfied with the service. The Maruti Swift was perfect for our family vacation. Good fuel efficiency and comfortable ride. The rates are also very competitive.",
    verified: true
  },
  {
    reviewerName: "Vikram Singh",
    rating: 5,
    comment: "Fantastic experience! Rented a Mahindra Thar for a weekend trip to the hills. The car performed excellently on rough terrain. DriveEasy's customer service is top-notch!",
    verified: true
  }
];

const seedDatabase = async () => {
  try {
    console.log('🌱 Starting database seeding...');
    
    // Clear existing data
    await Car.deleteMany({});
    await Review.deleteMany({});
    console.log('🗑️  Cleared existing data');
    
    // Insert sample cars
    await Car.insertMany(sampleCars);
    console.log('🚗 Inserted 20 sample cars');
    
    // Insert sample reviews
    await Review.insertMany(sampleReviews);
    console.log('⭐ Inserted 5 sample reviews');
    
    console.log('✅ Database seeding completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Seeding error:', error.message);
    process.exit(1);
  }
};

// Connect to database and seed
connectDB().then(seedDatabase);