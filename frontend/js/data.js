/**
 * Car Rental Website Data
 * Contains all real car data with uploaded images
 */

// Real Indian Cars Data from uploaded images
const carsData = [
    {
        id: 1,
        name: "Toyota Innova Crysta",
        type: "SUV",
        pricePerDay: 3200,
        seats: 8,
        fuelType: "Diesel",
        imageUrl: "https://cdn.builder.io/api/v1/image/assets%2Fb5ae5427845c4d4499d758f74e6e9814%2F840c79b2604b4fbfa7b6cf961f0c24f5?format=webp&width=800",
        available: true,
        features: ["AC", "Power Steering", "7-Seater", "ABS", "Airbags", "GPS Navigation"]
    },
    {
        id: 2,
        name: "Honda City",
        type: "Sedan",
        pricePerDay: 2400,
        seats: 5,
        fuelType: "Petrol",
        imageUrl: "https://cdn.builder.io/api/v1/image/assets%2Fb5ae5427845c4d4499d758f74e6e9814%2F38b4f3325be0426b93c8558859478c85?format=webp&width=800",
        available: true,
        features: ["AC", "Power Windows", "CVT Automatic", "Sunroof", "Honda SENSING"]
    },
    {
        id: 3,
        name: "Kia Seltos",
        type: "SUV",
        pricePerDay: 2800,
        seats: 5,
        fuelType: "Petrol",
        imageUrl: "https://cdn.builder.io/api/v1/image/assets%2Fb5ae5427845c4d4499d758f74e6e9814%2F481dcea255994ea6accbbe1447d00efd?format=webp&width=800",
        available: true,
        features: ["AC", "Touchscreen Infotainment", "Connected Car Tech", "LED Headlights", "Ventilated Seats"]
    },
    {
        id: 4,
        name: "Mahindra Triber",
        type: "SUV",
        pricePerDay: 2000,
        seats: 7,
        fuelType: "Petrol",
        imageUrl: "https://cdn.builder.io/api/v1/image/assets%2Fb5ae5427845c4d4499d758f74e6e9814%2Faed56acb374b45f9bf6fb3f3cb07c82d?format=webp&width=800",
        available: true,
        features: ["AC", "7-Seater Configuration", "Modular Seating", "Ground Clearance", "Digital Cluster"]
    },
    {
        id: 5,
        name: "Hyundai Alcazar",
        type: "SUV",
        pricePerDay: 3500,
        seats: 7,
        fuelType: "Petrol",
        imageUrl: "https://cdn.builder.io/api/v1/image/assets%2Fb5ae5427845c4d4499d758f74e6e9814%2F7c8d24dd3388457bbea22f366fc6b798?format=webp&width=800",
        available: true,
        features: ["AC", "Captain Chairs", "Panoramic Sunroof", "BOSE Sound System", "BlueLink Connected Car"]
    },
    {
        id: 6,
        name: "Mahindra XUV700",
        type: "Luxury",
        pricePerDay: 4000,
        seats: 7,
        fuelType: "Diesel",
        imageUrl: "https://cdn.builder.io/api/v1/image/assets%2Fb5ae5427845c4d4499d758f74e6e9814%2F2a685ecc732349e7ab9f31e77df3f5e5?format=webp&width=800",
        available: true,
        features: ["4WD", "Twin Peaks LED Headlamps", "AdrenoX Infotainment", "Sky Roof", "Advanced Driver Assistance"]
    },
    {
        id: 7,
        name: "Maruti Suzuki Dzire",
        type: "Sedan",
        pricePerDay: 1800,
        seats: 5,
        fuelType: "Petrol",
        imageUrl: "https://cdn.builder.io/api/v1/image/assets%2Fb5ae5427845c4d4499d758f74e6e9814%2F2d010410ff6e4efe8942e9f53c3e1c27?format=webp&width=800",
        available: true,
        features: ["AC", "Power Steering", "Automatic Climate Control", "SmartPlay Infotainment", "CNG Option"]
    },
    {
        id: 8,
        name: "Maruti Suzuki Swift",
        type: "Hatchback",
        pricePerDay: 1600,
        seats: 5,
        fuelType: "Petrol",
        imageUrl: "https://cdn.builder.io/api/v1/image/assets%2Fb5ae5427845c4d4499d758f74e6e9814%2Fdb5ebed8920b4dd5a20ec22b811657ba?format=webp&width=800",
        available: true,
        features: ["AC", "Power Windows", "SmartPlay Studio", "Auto Gear Shift", "Dual Airbags"]
    },
    {
        id: 9,
        name: "Tata Harrier",
        type: "SUV",
        pricePerDay: 3300,
        seats: 5,
        fuelType: "Diesel",
        imageUrl: "https://cdn.builder.io/api/v1/image/assets%2Fb5ae5427845c4d4499d758f74e6e9814%2Ffd7a30e55e81433c81ee8d8fd2d13b02?format=webp&width=800",
        available: true,
        features: ["AC", "OMEGA Architecture", "8.8'' Touchscreen", "JBL Sound System", "Terrain Response Modes"]
    },
    {
        id: 10,
        name: "Tata Curvv",
        type: "SUV",
        pricePerDay: 2900,
        seats: 5,
        fuelType: "Petrol",
        imageUrl: "https://cdn.builder.io/api/v1/image/assets%2Fb5ae5427845c4d4499d758f74e6e9814%2Fcf2a333a748841a2993c98fdf68f102e?format=webp&width=800",
        available: true,
        features: ["AC", "Coupe SUV Design", "12.3'' Touchscreen", "Wireless Charging", "360° Camera"]
    }
];

// Sample Indian Customer Reviews
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