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
    name: "Maruti Suzuki Swift",
    type: "Hatchback",
    pricePerDay: 1500,
    seats: 5,
    fuelType: "Petrol",
    imageUrl: "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg",
    features: ["AC", "Music System", "Power Steering"]
  },
  {
    name: "Hyundai Creta",
    type: "SUV",
    pricePerDay: 2500,
    seats: 5,
    fuelType: "Diesel",
    imageUrl: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg",
    features: ["AC", "GPS", "Sunroof", "Reverse Camera"]
  },
  {
    name: "Honda City",
    type: "Sedan",
    pricePerDay: 2000,
    seats: 5,
    fuelType: "Petrol",
    imageUrl: "https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg",
    features: ["AC", "Music System", "Power Windows", "ABS"]
  },
  {
    name: "Tata Nexon EV",
    type: "Electric",
    pricePerDay: 2800,
    seats: 5,
    fuelType: "Electric",
    imageUrl: "https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg",
    features: ["Fast Charging", "AC", "Digital Cluster", "Regenerative Braking"]
  },
  {
    name: "Mahindra Thar",
    type: "SUV",
    pricePerDay: 3200,
    seats: 4,
    fuelType: "Diesel",
    imageUrl: "https://images.pexels.com/photos/1335077/pexels-photo-1335077.jpeg",
    features: ["4WD", "AC", "Hard Top", "Hill Hold Control"]
  },
  {
    name: "Maruti Suzuki Alto K10",
    type: "Hatchback",
    pricePerDay: 1200,
    seats: 5,
    fuelType: "CNG",
    imageUrl: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg",
    features: ["AC", "Power Steering", "Central Locking"]
  },
  {
    name: "Toyota Innova Crysta",
    type: "SUV",
    pricePerDay: 3500,
    seats: 8,
    fuelType: "Diesel",
    imageUrl: "https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg",
    features: ["AC", "GPS", "Captain Seats", "Automatic"]
  },
  {
    name: "BMW 3 Series",
    type: "Luxury",
    pricePerDay: 6500,
    seats: 5,
    fuelType: "Petrol",
    imageUrl: "https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg",
    features: ["Leather Seats", "Sunroof", "Premium Sound", "Automatic"]
  },
  {
    name: "Hyundai i20",
    type: "Hatchback",
    pricePerDay: 1800,
    seats: 5,
    fuelType: "Petrol",
    imageUrl: "https://images.pexels.com/photos/1319845/pexels-photo-1319845.jpeg",
    features: ["AC", "Touchscreen", "Reverse Camera", "Wireless Charging"]
  },
  {
    name: "Kia Sonet",
    type: "SUV",
    pricePerDay: 2200,
    seats: 5,
    fuelType: "Petrol",
    imageUrl: "https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg",
    features: ["AC", "Sunroof", "Connected Car Tech", "LED Headlights"]
  },
  {
    name: "Maruti Suzuki Dzire",
    type: "Sedan",
    pricePerDay: 1600,
    seats: 5,
    fuelType: "CNG",
    imageUrl: "https://images.pexels.com/photos/1335074/pexels-photo-1335074.jpeg",
    features: ["AC", "Power Windows", "ABS", "Dual Airbags"]
  },
  {
    name: "Tata Harrier",
    type: "SUV",
    pricePerDay: 3000,
    seats: 5,
    fuelType: "Diesel",
    imageUrl: "https://images.pexels.com/photos/2506947/pexels-photo-2506947.jpeg",
    features: ["Panoramic Sunroof", "JBL Sound", "Terrain Modes", "AC"]
  },
  {
    name: "Honda Amaze",
    type: "Sedan",
    pricePerDay: 1700,
    seats: 5,
    fuelType: "Petrol",
    imageUrl: "https://images.pexels.com/photos/1592620/pexels-photo-1592620.jpeg",
    features: ["AC", "Touchscreen", "CVT", "Honda SENSING"]
  },
  {
    name: "MG Hector",
    type: "SUV",
    pricePerDay: 2900,
    seats: 5,
    fuelType: "Petrol",
    imageUrl: "https://images.pexels.com/photos/1429775/pexels-photo-1429775.jpeg",
    features: ["Panoramic Sunroof", "AI Assistant", "Connected Car", "Premium Interior"]
  },
  {
    name: "Hyundai Verna",
    type: "Sedan",
    pricePerDay: 2100,
    seats: 5,
    fuelType: "Petrol",
    imageUrl: "https://images.pexels.com/photos/1104014/pexels-photo-1104014.jpeg",
    features: ["Sunroof", "Wireless Charging", "BlueLink", "Premium Sound"]
  },
  {
    name: "Maruti Suzuki Ertiga",
    type: "SUV",
    pricePerDay: 2400,
    seats: 7,
    fuelType: "CNG",
    imageUrl: "https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg",
    features: ["AC", "Captain Seats", "Smart Play", "ESP"]
  },
  {
    name: "Audi A4",
    type: "Luxury",
    pricePerDay: 7200,
    seats: 5,
    fuelType: "Petrol",
    imageUrl: "https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg",
    features: ["Leather Interior", "Virtual Cockpit", "Matrix LED", "Quattro AWD"]
  },
  {
    name: "Ford EcoSport",
    type: "SUV",
    pricePerDay: 2000,
    seats: 5,
    fuelType: "Petrol",
    imageUrl: "https://images.pexels.com/photos/1335077/pexels-photo-1335077.jpeg",
    features: ["AC", "SYNC", "Hill Launch Assist", "Emergency Assist"]
  },
  {
    name: "Mahindra XUV700",
    type: "SUV",
    pricePerDay: 3800,
    seats: 7,
    fuelType: "Petrol",
    imageUrl: "https://images.pexels.com/photos/3156482/pexels-photo-3156482.jpeg",
    features: ["AdrenoX", "Sky Roof", "ADAS", "Sony 3D Sound"]
  },
  {
    name: "Mercedes-Benz C-Class",
    type: "Luxury",
    pricePerDay: 8500,
    seats: 5,
    fuelType: "Petrol",
    imageUrl: "https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg",
    features: ["MBUX", "Burmester Sound", "Air Suspension", "AMG Line"]
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