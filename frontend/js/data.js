/**
 * Car Rental Website Data
 * Contains all sample data for cars and reviews (hardcoded for demo)
 */

// Sample Indian Cars Data (9 cars as specified)
// TODO: Update car images and details as needed
const carsData = [
    {
        id: 1,
        name: "Toyota Innova Crysta",
        type: "MPV",
        pricePerDay: 3200,
        seats: 7,
        fuelType: "Diesel",
        imageUrl: "https://imgd.aeplcdn.com/664x374/n/cw/ec/100451/innova-crysta-exterior-right-front-three-quarter-4.jpeg?isig=0",
        available: true,
        features: ["AC", "Power Steering", "Central Locking", "ABS", "LED Headlights", "Alloy Wheels", "Premium Interior"]
    },
    {
        id: 2,
        name: "Kia Seltos",
        type: "SUV",
        pricePerDay: 2800,
        seats: 5,
        fuelType: "Petrol",
        imageUrl: "https://imgd.aeplcdn.com/664x374/n/cw/ec/127067/seltos-exterior-right-front-three-quarter-5.jpeg?isig=0",
        available: true,
        features: ["AC", "LED Headlights", "Tiger Nose Grille", "Alloy Wheels", "Premium Interior", "Sunroof"]
    },
    {
        id: 3,
        name: "Renault Triber",
        type: "MPV",
        pricePerDay: 2000,
        seats: 7,
        fuelType: "Petrol",
        imageUrl: "https://imgd.aeplcdn.com/664x374/n/cw/ec/47481/triber-exterior-right-front-three-quarter-3.jpeg?isig=0",
        available: true,
        features: ["AC", "Power Windows", "LED DRLs", "Roof Rails", "Dual-tone Design", "Compact SUV"]
    },
    {
        id: 4,
        name: "Honda City",
        type: "Sedan",
        pricePerDay: 2500,
        seats: 5,
        fuelType: "Petrol",
        imageUrl: "https://imgd.aeplcdn.com/664x374/n/cw/ec/41180/city-exterior-right-front-three-quarter-5.jpeg?isig=0",
        available: true,
        features: ["AC", "LED Headlights", "Panoramic Sunroof", "Alloy Wheels", "Premium Interior", "Automatic"]
    },
    {
        id: 5,
        name: "Tata Nexon",
        type: "SUV",
        pricePerDay: 2700,
        seats: 5,
        fuelType: "Petrol",
        imageUrl: "https://imgd.aeplcdn.com/664x374/n/cw/ec/47481/nexon-exterior-right-front-three-quarter-3.jpeg?isig=0",
        available: true,
        features: ["AC", "LED Headlights", "Electric Drive", "Alloy Wheels", "Zero Emissions", "Fast Charging"]
    },
    {
        id: 6,
        name: "Maruti Suzuki Swift",
        type: "Hatchback",
        pricePerDay: 1800,
        seats: 5,
        fuelType: "Petrol",
        imageUrl: "https://imgd.aeplcdn.com/664x374/n/cw/ec/137109/swift-exterior-right-front-three-quarter-5.jpeg?isig=0",
        available: true,
        features: ["AC", "LED DRLs", "Floating Roof", "Alloy Wheels", "Compact Design", "Fuel Efficient"]
    },
    {
        id: 7,
        name: "Mahindra XUV700",
        type: "SUV",
        pricePerDay: 3600,
        seats: 7,
        fuelType: "Diesel",
        imageUrl: "https://imgd.aeplcdn.com/664x374/n/cw/ec/127067/xuv700-exterior-right-front-three-quarter.jpeg?isig=0",
        available: true,
        features: ["AC", "LED Headlights", "Panoramic Sunroof", "Alloy Wheels", "Premium Interior", "ADAS Features"]
    },
    {
        id: 8,
        name: "Hyundai Verna",
        type: "Sedan",
        pricePerDay: 2400,
        seats: 5,
        fuelType: "Petrol",
        imageUrl: "https://imgd.aeplcdn.com/664x374/n/cw/ec/41180/verna-exterior-right-front-three-quarter-5.jpeg?isig=0",
        available: true,
        features: ["AC", "LED Headlights", "Premium Interior", "Alloy Wheels", "Automatic", "Sunroof"]
    },
    {
        id: 9,
        name: "Toyota Fortuner",
        type: "SUV",
        pricePerDay: 4000,
        seats: 7,
        fuelType: "Diesel",
        imageUrl: "https://imgd.aeplcdn.com/664x374/n/cw/ec/100451/fortuner-exterior-right-front-three-quarter-4.jpeg?isig=0",
        available: true,
        features: ["AC", "LED Headlights", "4WD", "Alloy Wheels", "Premium Interior", "High Ground Clearance"]
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