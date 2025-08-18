/**
 * Car Rental Website Data
 * Contains all sample data for cars and reviews (hardcoded for demo)
 */

// Sample Indian Cars Data (20 cars as requested)
const carsData = [
    {
        id: 1,
        name: "Maruti Swift Dzire",
        type: "Hatchback",
        pricePerDay: 1400,
        seats: 5,
        fuelType: "Petrol",
        imageUrl: "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=800",
        available: true,
        features: ["AC", "Power Steering", "Central Locking", "ABS"]
    },
    {
        id: 2,
        name: "Tata Indica",
        type: "Hatchback",
        pricePerDay: 1000,
        seats: 5,
        fuelType: "Diesel",
        imageUrl: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=800",
        available: true,
        features: ["AC", "Power Steering", "Music System"]
    },
    {
        id: 3,
        name: "Hyundai i10",
        type: "Hatchback",
        pricePerDay: 1200,
        seats: 5,
        fuelType: "Petrol",
        imageUrl: "https://images.pexels.com/photos/1319845/pexels-photo-1319845.jpeg?auto=compress&cs=tinysrgb&w=800",
        available: true,
        features: ["AC", "Power Windows", "Central Locking"]
    },
    {
        id: 4,
        name: "Maruti Alto 800",
        type: "Hatchback",
        pricePerDay: 900,
        seats: 4,
        fuelType: "Petrol",
        imageUrl: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=800",
        available: true,
        features: ["Basic AC", "Power Steering"]
    },
    {
        id: 5,
        name: "Hyundai Santro",
        type: "Hatchback",
        pricePerDay: 1100,
        seats: 5,
        fuelType: "Petrol",
        imageUrl: "https://images.pexels.com/photos/1319845/pexels-photo-1319845.jpeg?auto=compress&cs=tinysrgb&w=800",
        available: true,
        features: ["AC", "Power Steering", "Music System"]
    },
    {
        id: 6,
        name: "Tata Nano",
        type: "Hatchback",
        pricePerDay: 800,
        seats: 4,
        fuelType: "Petrol",
        imageUrl: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=800",
        available: true,
        features: ["Basic Features", "Compact Design"]
    },
    {
        id: 7,
        name: "Maruti Wagon R",
        type: "Hatchback",
        pricePerDay: 1300,
        seats: 5,
        fuelType: "CNG",
        imageUrl: "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=800",
        available: true,
        features: ["AC", "Power Steering", "Tall Boy Design"]
    },
    {
        id: 8,
        name: "Hyundai Accent",
        type: "SUV",
        pricePerDay: 1800,
        seats: 5,
        fuelType: "Petrol",
        imageUrl: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800",
        available: true,
        features: ["AC", "Power Windows", "Music System", "ABS"]
    },
    {
        id: 9,
        name: "Tata Indigo",
        type: "Sedan",
        pricePerDay: 1600,
        seats: 5,
        fuelType: "Diesel",
        imageUrl: "https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=800",
        available: true,
        features: ["AC", "Power Windows", "Central Locking"]
    },
    {
        id: 10,
        name: "Maruti Esteem",
        type: "Sedan",
        pricePerDay: 1500,
        seats: 5,
        fuelType: "Petrol",
        imageUrl: "https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=800",
        available: true,
        features: ["AC", "Power Steering", "Music System"]
    },
    {
        id: 11,
        name: "Mahindra Scorpio",
        type: "SUV",
        pricePerDay: 2800,
        seats: 7,
        fuelType: "Diesel",
        imageUrl: "https://images.pexels.com/photos/1335077/pexels-photo-1335077.jpeg?auto=compress&cs=tinysrgb&w=800",
        available: true,
        features: ["4WD", "AC", "Power Steering", "High Ground Clearance"]
    },
    {
        id: 12,
        name: "Tata Sumo",
        type: "SUV",
        pricePerDay: 2200,
        seats: 9,
        fuelType: "Diesel",
        imageUrl: "https://images.pexels.com/photos/1335077/pexels-photo-1335077.jpeg?auto=compress&cs=tinysrgb&w=800",
        available: true,
        features: ["AC", "High Seating", "Spacious Interior"]
    },
    {
        id: 13,
        name: "Maruti Omni",
        type: "SUV",
        pricePerDay: 1400,
        seats: 8,
        fuelType: "Petrol",
        imageUrl: "https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?auto=compress&cs=tinysrgb&w=800",
        available: true,
        features: ["AC", "Sliding Doors", "Commercial Use"]
    },
    {
        id: 14,
        name: "Hyundai Getz",
        type: "Hatchback",
        pricePerDay: 1300,
        seats: 5,
        fuelType: "Petrol",
        imageUrl: "https://images.pexels.com/photos/1319845/pexels-photo-1319845.jpeg?auto=compress&cs=tinysrgb&w=800",
        available: true,
        features: ["AC", "Power Windows", "ABS", "Airbags"]
    },
    {
        id: 15,
        name: "Tata Safari",
        type: "Luxury",
        pricePerDay: 3500,
        seats: 7,
        fuelType: "Diesel",
        imageUrl: "https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=800",
        available: true,
        features: ["4WD", "Leather Seats", "Premium Interior", "AC"]
    },
    {
        id: 16,
        name: "Mahindra Bolero",
        type: "SUV",
        pricePerDay: 2000,
        seats: 7,
        fuelType: "Diesel",
        imageUrl: "https://images.pexels.com/photos/1335077/pexels-photo-1335077.jpeg?auto=compress&cs=tinysrgb&w=800",
        available: true,
        features: ["AC", "High Ground Clearance", "Rugged Build"]
    },
    {
        id: 17,
        name: "Honda Civic",
        type: "Luxury",
        pricePerDay: 2800,
        seats: 5,
        fuelType: "Petrol",
        imageUrl: "https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=800",
        available: true,
        features: ["AC", "Automatic", "Premium Interior", "Sunroof"]
    },
    {
        id: 18,
        name: "Maruti Zen",
        type: "Hatchback",
        pricePerDay: 1100,
        seats: 5,
        fuelType: "Petrol",
        imageUrl: "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=800",
        available: true,
        features: ["AC", "Power Steering", "Music System"]
    },
    {
        id: 19,
        name: "Tata Venture",
        type: "SUV",
        pricePerDay: 1800,
        seats: 7,
        fuelType: "Diesel",
        imageUrl: "https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?auto=compress&cs=tinysrgb&w=800",
        available: true,
        features: ["AC", "Spacious", "Commercial Vehicle"]
    },
    {
        id: 20,
        name: "Hyundai Verna",
        type: "Luxury",
        pricePerDay: 2500,
        seats: 5,
        fuelType: "Petrol",
        imageUrl: "https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=800",
        available: true,
        features: ["AC", "Automatic", "Sunroof", "Premium Features"]
    }
];

// Sample Indian Customer Reviews (5 reviews as requested)
const reviewsData = [
    {
        id: 1,
        reviewerName: "Rajesh Kumar",
        rating: 5,
        comment: "Excellent service! The Hyundai Creta I rented was in perfect condition and the booking process was very smooth. DriveEasy's customer support team was available 24/7 and helped me throughout my trip from Mumbai to Goa. The car had all modern amenities and GPS navigation which made my journey comfortable. Highly recommend DriveEasy for anyone looking for reliable car rental services in India. Will definitely book again for my next trip!",
        date: "2024-01-15"
    },
    {
        id: 2,
        reviewerName: "Priya Sharma",
        rating: 4,
        comment: "Great experience with DriveEasy! I rented a Honda City for my business trip to Bangalore and it exceeded my expectations. The car was clean, well-maintained, and fuel-efficient. The pickup and drop-off process was hassle-free. The only minor issue was a slight delay in delivery, but the customer service team compensated well for it. The pricing is very competitive compared to other rental services. Overall, a very satisfying experience!",
        date: "2024-01-10"
    },
    {
        id: 3,
        reviewerName: "Amit Patel",
        rating: 5,
        comment: "Outstanding service from DriveEasy! Rented a Mahindra Thar for a weekend adventure trip to Ladakh with friends. The vehicle was in excellent condition and performed superbly on rough terrains and high altitudes. The 4WD feature was particularly useful in challenging road conditions. The staff was professional and provided detailed instructions about the vehicle features. Home delivery and pickup service was punctual. Truly impressed with the quality of service!",
        date: "2024-01-05"
    },
    {
        id: 4,
        reviewerName: "Sneha Reddy",
        rating: 4,
        comment: "Very satisfied with DriveEasy's service! Rented a Maruti Suzuki Swift for our family vacation to Kerala. The car was perfect for our needs - comfortable, spacious, and great fuel economy. We drove over 2000km during our 10-day trip and the car performed flawlessly. The booking process through their website was user-friendly. The car came with comprehensive insurance which gave us peace of mind. Great value for money and excellent customer support!",
        date: "2023-12-28"
    },
    {
        id: 5,
        reviewerName: "Vikram Singh",
        rating: 5,
        comment: "Fantastic experience with DriveEasy! I needed a luxury car for my wedding functions and rented a BMW 3 Series. The car was spotless and looked stunning. All the premium features were working perfectly - leather seats, premium sound system, and automatic transmission. The chauffeur service was also professional and courteous. DriveEasy made my special day even more memorable. The rates are reasonable for luxury vehicles. Highly recommended for special occasions!",
        date: "2023-12-20"
    }
];

// Export data for use in app.js
window.carsData = carsData;
window.reviewsData = reviewsData;