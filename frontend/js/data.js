/**
 * Car Rental Website Data
 * Contains all sample data for cars and reviews (hardcoded for demo)
 */

// Sample Indian Cars Data (20 cars as requested)
const carsData = [
    {
        id: 1,
        name: "Maruti Suzuki Swift",
        type: "Hatchback",
        pricePerDay: 1500,
        seats: 5,
        fuelType: "Petrol",
        imageUrl: "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=800",
        available: true,
        features: ["AC", "Music System", "Power Steering", "Central Locking"]
    },
    {
        id: 2,
        name: "Hyundai Creta",
        type: "SUV",
        pricePerDay: 2500,
        seats: 5,
        fuelType: "Diesel",
        imageUrl: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800",
        available: true,
        features: ["AC", "GPS Navigation", "Sunroof", "Reverse Camera"]
    },
    {
        id: 3,
        name: "Honda City",
        type: "Sedan",
        pricePerDay: 2000,
        seats: 5,
        fuelType: "Petrol",
        imageUrl: "https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=800",
        available: true,
        features: ["AC", "Music System", "Power Windows", "ABS"]
    },
    {
        id: 4,
        name: "Tata Nexon EV",
        type: "Electric",
        pricePerDay: 2800,
        seats: 5,
        fuelType: "Electric",
        imageUrl: "https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=800",
        available: true,
        features: ["Fast Charging", "AC", "Digital Cluster", "Regenerative Braking"]
    },
    {
        id: 5,
        name: "Mahindra Thar",
        type: "SUV",
        pricePerDay: 3200,
        seats: 4,
        fuelType: "Diesel",
        imageUrl: "https://images.pexels.com/photos/1335077/pexels-photo-1335077.jpeg?auto=compress&cs=tinysrgb&w=800",
        available: true,
        features: ["4WD", "AC", "Hard Top", "Hill Hold Control"]
    },
    {
        id: 6,
        name: "Maruti Suzuki Alto K10",
        type: "Hatchback",
        pricePerDay: 1200,
        seats: 5,
        fuelType: "CNG",
        imageUrl: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=800",
        available: true,
        features: ["AC", "Power Steering", "Central Locking", "Fuel Efficient"]
    },
    {
        id: 7,
        name: "Toyota Innova Crysta",
        type: "SUV",
        pricePerDay: 3500,
        seats: 8,
        fuelType: "Diesel",
        imageUrl: "https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800",
        available: true,
        features: ["AC", "GPS Navigation", "Captain Seats", "Automatic Transmission"]
    },
    {
        id: 8,
        name: "BMW 3 Series",
        type: "Luxury",
        pricePerDay: 6500,
        seats: 5,
        fuelType: "Petrol",
        imageUrl: "https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=800",
        available: true,
        features: ["Leather Seats", "Sunroof", "Premium Sound System", "Automatic"]
    },
    {
        id: 9,
        name: "Hyundai i20",
        type: "Hatchback",
        pricePerDay: 1800,
        seats: 5,
        fuelType: "Petrol",
        imageUrl: "https://images.pexels.com/photos/1319845/pexels-photo-1319845.jpeg?auto=compress&cs=tinysrgb&w=800",
        available: true,
        features: ["AC", "Touchscreen Infotainment", "Reverse Camera", "Wireless Charging"]
    },
    {
        id: 10,
        name: "Kia Sonet",
        type: "SUV",
        pricePerDay: 2200,
        seats: 5,
        fuelType: "Petrol",
        imageUrl: "https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800",
        available: true,
        features: ["AC", "Sunroof", "Connected Car Technology", "LED Headlights"]
    },
    {
        id: 11,
        name: "Maruti Suzuki Dzire",
        type: "Sedan",
        pricePerDay: 1600,
        seats: 5,
        fuelType: "CNG",
        imageUrl: "https://images.pexels.com/photos/1335074/pexels-photo-1335074.jpeg?auto=compress&cs=tinysrgb&w=800",
        available: true,
        features: ["AC", "Power Windows", "ABS", "Dual Airbags"]
    },
    {
        id: 12,
        name: "Tata Harrier",
        type: "SUV",
        pricePerDay: 3000,
        seats: 5,
        fuelType: "Diesel",
        imageUrl: "https://images.pexels.com/photos/2506947/pexels-photo-2506947.jpeg?auto=compress&cs=tinysrgb&w=800",
        available: true,
        features: ["Panoramic Sunroof", "JBL Sound System", "Terrain Response Modes", "AC"]
    },
    {
        id: 13,
        name: "Honda Amaze",
        type: "Sedan",
        pricePerDay: 1700,
        seats: 5,
        fuelType: "Petrol",
        imageUrl: "https://images.pexels.com/photos/1592620/pexels-photo-1592620.jpeg?auto=compress&cs=tinysrgb&w=800",
        available: true,
        features: ["AC", "Touchscreen Display", "CVT Automatic", "Honda SENSING"]
    },
    {
        id: 14,
        name: "MG Hector",
        type: "SUV",
        pricePerDay: 2900,
        seats: 5,
        fuelType: "Petrol",
        imageUrl: "https://images.pexels.com/photos/1429775/pexels-photo-1429775.jpeg?auto=compress&cs=tinysrgb&w=800",
        available: true,
        features: ["Panoramic Sunroof", "AI Personal Assistant", "Connected Car Features", "Premium Interior"]
    },
    {
        id: 15,
        name: "Hyundai Verna",
        type: "Sedan",
        pricePerDay: 2100,
        seats: 5,
        fuelType: "Petrol",
        imageUrl: "https://images.pexels.com/photos/1104014/pexels-photo-1104014.jpeg?auto=compress&cs=tinysrgb&w=800",
        available: true,
        features: ["Sunroof", "Wireless Charging", "BlueLink Connectivity", "Premium Sound System"]
    },
    {
        id: 16,
        name: "Maruti Suzuki Ertiga",
        type: "SUV",
        pricePerDay: 2400,
        seats: 7,
        fuelType: "CNG",
        imageUrl: "https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?auto=compress&cs=tinysrgb&w=800",
        available: true,
        features: ["AC", "Captain Seats", "SmartPlay Infotainment", "Electronic Stability Program"]
    },
    {
        id: 17,
        name: "Audi A4",
        type: "Luxury",
        pricePerDay: 7200,
        seats: 5,
        fuelType: "Petrol",
        imageUrl: "https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=800",
        available: true,
        features: ["Leather Interior", "Virtual Cockpit", "Matrix LED Headlights", "Quattro All-Wheel Drive"]
    },
    {
        id: 18,
        name: "Ford EcoSport",
        type: "SUV",
        pricePerDay: 2000,
        seats: 5,
        fuelType: "Petrol",
        imageUrl: "https://images.pexels.com/photos/1335077/pexels-photo-1335077.jpeg?auto=compress&cs=tinysrgb&w=800",
        available: true,
        features: ["AC", "SYNC Infotainment", "Hill Launch Assist", "Emergency Assistance"]
    },
    {
        id: 19,
        name: "Mahindra XUV700",
        type: "SUV",
        pricePerDay: 3800,
        seats: 7,
        fuelType: "Petrol",
        imageUrl: "https://images.pexels.com/photos/3156482/pexels-photo-3156482.jpeg?auto=compress&cs=tinysrgb&w=800",
        available: true,
        features: ["AdrenoX Infotainment", "Skyroof", "Advanced Driver Assistance", "Sony 3D Sound System"]
    },
    {
        id: 20,
        name: "Mercedes-Benz C-Class",
        type: "Luxury",
        pricePerDay: 8500,
        seats: 5,
        fuelType: "Petrol",
        imageUrl: "https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=800",
        available: true,
        features: ["MBUX Infotainment", "Burmester Sound System", "Air Body Control", "AMG Line Package"]
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