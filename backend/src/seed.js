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
    name: "Toyota Innova Crysta",
    type: "MPV",
    pricePerDay: 3200,
    seats: 7,
    fuelType: "Diesel",
    imageUrl: "https://imgd.aeplcdn.com/664x374/n/cw/ec/100451/innova-crysta-exterior-right-front-three-quarter-4.jpeg?isig=0",
    features: ["AC", "Power Steering", "Central Locking", "ABS", "LED Headlights", "Alloy Wheels", "Premium Interior"]
  },
  {
    name: "Kia Seltos",
    type: "SUV",
    pricePerDay: 2800,
    seats: 5,
    fuelType: "Petrol",
    imageUrl: "https://imgd.aeplcdn.com/664x374/n/cw/ec/127067/seltos-exterior-right-front-three-quarter-5.jpeg?isig=0",
    features: ["AC", "LED Headlights", "Tiger Nose Grille", "Alloy Wheels", "Premium Interior", "Sunroof"]
  },
  {
    name: "Renault Triber",
    type: "MPV",
    pricePerDay: 2000,
    seats: 7,
    fuelType: "Petrol",
    imageUrl: "https://imgd.aeplcdn.com/664x374/n/cw/ec/47481/triber-exterior-right-front-three-quarter-3.jpeg?isig=0",
    features: ["AC", "Power Windows", "LED DRLs", "Roof Rails", "Dual-tone Design", "Compact SUV"]
  },
  {
    name: "Honda City",
    type: "Sedan",
    pricePerDay: 2500,
    seats: 5,
    fuelType: "Petrol",
    imageUrl: "https://imgd.aeplcdn.com/664x374/n/cw/ec/41180/city-exterior-right-front-three-quarter-5.jpeg?isig=0",
    features: ["AC", "LED Headlights", "Panoramic Sunroof", "Alloy Wheels", "Premium Interior", "Automatic"]
  },
  {
    name: "Tata Nexon",
    type: "SUV",
    pricePerDay: 2700,
    seats: 5,
    fuelType: "Petrol",
    imageUrl: "https://imgd.aeplcdn.com/664x374/n/cw/ec/47481/nexon-exterior-right-front-three-quarter-3.jpeg?isig=0",
    features: ["AC", "LED Headlights", "Electric Drive", "Alloy Wheels", "Zero Emissions", "Fast Charging"]
  },
  {
    name: "Maruti Suzuki Swift",
    type: "Hatchback",
    pricePerDay: 1800,
    seats: 5,
    fuelType: "Petrol",
    imageUrl: "https://imgd.aeplcdn.com/664x374/n/cw/ec/137109/swift-exterior-right-front-three-quarter-5.jpeg?isig=0",
    features: ["AC", "LED DRLs", "Floating Roof", "Alloy Wheels", "Compact Design", "Fuel Efficient"]
  },
  {
    name: "Mahindra XUV700",
    type: "SUV",
    pricePerDay: 3600,
    seats: 7,
    fuelType: "Diesel",
    imageUrl: "https://imgd.aeplcdn.com/664x374/n/cw/ec/127067/xuv700-exterior-right-front-three-quarter.jpeg?isig=0",
    features: ["AC", "LED Headlights", "Panoramic Sunroof", "Alloy Wheels", "Premium Interior", "ADAS Features"]
  },
  {
    name: "Hyundai Verna",
    type: "Sedan",
    pricePerDay: 2400,
    seats: 5,
    fuelType: "Petrol",
    imageUrl: "https://imgd.aeplcdn.com/664x374/n/cw/ec/41180/verna-exterior-right-front-three-quarter-5.jpeg?isig=0",
    features: ["AC", "LED Headlights", "Premium Interior", "Alloy Wheels", "Automatic", "Sunroof"]
  },
  {
    name: "Toyota Fortuner",
    type: "SUV",
    pricePerDay: 4000,
    seats: 7,
    fuelType: "Diesel",
    imageUrl: "https://imgd.aeplcdn.com/664x374/n/cw/ec/100451/fortuner-exterior-right-front-three-quarter-4.jpeg?isig=0",
    features: ["AC", "LED Headlights", "4WD", "Alloy Wheels", "Premium Interior", "High Ground Clearance"]
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
    console.log('🚗 Inserted 9 sample cars');
    
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