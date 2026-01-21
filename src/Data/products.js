// src/data/products.js
export const allProducts = [
  // --- HOME AND OUTDOOR (IDs 1-8) ---
  { id: 1, title: "Soft Chairs", price: 25, img: "/sofa.png", category: "home", desc: "Premium soft-touch fabric chair, perfect for modern living rooms." },
  { id: 2, title: "Kitchen Mixer", price: 75.99, img: "/scope.png", category: "home", desc: "High-speed mixer with stainless steel blades for all your cooking needs." },
  { id: 3, title: "Sofa and Chairs", price: 45.50, img: "/goldan.png", category: "home", desc: "Complete seating set with golden accents and durable upholstery." },
  { id: 4, title: "Blenders", price: 120, img: "/juice.png", category: "home", desc: "Professional grade blender for smoothies and juices." },
  { id: 5, title: "Kitchen Dishes", price: 350, img: "/splash.png", category: "home", desc: "Elegant 24-piece ceramic dinner set for luxury dining." },
  { id: 6, title: "Home Appliance", price: 60, img: "/purse.jpg", category: "home", desc: "Versatile home utility tool designed for efficiency." },
  { id: 7, title: "Matka", price: 200, img: "/matka.png", category: "home", desc: "Traditional clay cooling pot, handcrafted for natural water storage." },
  { id: 8, title: "Plant", price: 150, img: "/plant.png", category: "home", desc: "Low-maintenance indoor green plant to freshen your air." },

  // --- ELECTRONICS (IDs 9-16) ---
  { id: 9, title: "Smart Watches", price: 25, img: "/watch.png", category: "electronics", desc: "Fitness tracker with heart rate monitor and sync capabilities." },
  { id: 10, title: "Cameras", price: 75.99, img: "/camera.png", category: "electronics", desc: "Capture memories in 4K with this compact digital camera." },
  { id: 11, title: "Headphones", price: 45.50, img: "/wheadphone.png", category: "electronics", desc: "Noise-cancelling wireless headphones with 20-hour battery life." },
  { id: 12, title: "Electric Kettle", price: 120, img: "/flask.png", category: "electronics", desc: "Fast-boiling electric kettle with automatic shut-off safety." },
  { id: 13, title: "Gaming Sets", price: 350, img: "/headphone.png", category: "electronics", desc: "Pro-gamer bundle including headset and high-precision mic." },
  { id: 14, title: "Laptops", price: 60, img: "/latop.png", category: "electronics", desc: "Lightweight work laptop with SSD storage and HD display." },
  { id: 15, title: "Smartphones", price: 200, img: "/moblile2.png", category: "electronics", desc: "Latest Gen smartphone with triple-lens camera and 5G." },
  { id: 16, title: "Tablets", price: 150, img: "/mobile3.png", category: "electronics", desc: "High-resolution tablet perfect for digital drawing and streaming." },

// --- RECOMMENDED ITEMS (IDs 17-26) ---
  { 
    id: 17, 
    title: "T-shirts with multiple colors, for men", 
    price: 10.30, 
    img: "/T-Shirt.png", 
    category: "recommended",
    desc: "Comfortable 100% cotton t-shirt available in various colors. Perfect for casual summer wear."
  },
  { 
    id: 18, 
    title: "Jeans shorts for men blue color", 
    price: 10.30, 
    img: "/jean-shirt.jpg", 
    category: "recommended",
    desc: "Classic blue denim shorts with a relaxed fit and durable stitching."
  },
  { 
    id: 19, 
    title: "Brown winter coat medium size", 
    price: 12.50, 
    img: "/w-coat.png", 
    category: "recommended",
    desc: "Stylish brown winter coat designed to keep you warm in extreme cold. Medium size with wool lining."
  },
  { 
    id: 20, 
    title: "Jeans bag for travel for men", 
    price: 34.00, 
    img: "/jeans-wallet.png", 
    category: "recommended",
    desc: "Rugged denim travel bag with multiple compartments for organized storage."
  },
  { 
    id: 21, 
    title: "Leather wallet", 
    price: 99.00, 
    img: "/leather-wallet.png", 
    category: "recommended",
    desc: "Genuine leather wallet with RFID protection and a slim design."
  },
  { 
    id: 22, 
    title: "Canon camera black, 100x zoom", 
    price: 9.99, 
    img: "/wheadphone.png", 
    category: "recommended",
    desc: "Professional black camera (mockup) featuring 100x digital zoom and 4K recording."
  },
  { 
    id: 23, 
    title: "Headset for gaming with mic", 
    price: 8.99, 
    img: "/matka.png", 
    category: "recommended",
    desc: "Surround sound gaming headset with a noise-canceling microphone and RGB lighting."
  },
  { 
    id: 24, 
    title: "Smartwatch silver color modern", 
    price: 10.30, 
    img: "/flask.png", 
    category: "recommended",
    desc: "Modern silver smartwatch with heart rate tracking and smartphone notifications."
  },
  { 
    id: 25, 
    title: "Blue wallet for men leather material", 
    price: 10.30, 
    img: "/jeans-wallet.png", 
    category: "recommended",
    desc: "Deep blue leather wallet with a premium finish and multiple card slots."
  },
  { 
    id: 26, 
    title: "Jeans bag for travel for men (Large)", 
    price: 80.95, 
    img: "/leather-wallet.png", 
    category: "recommended",
    desc: "High-capacity travel bag made from heavy-duty denim for long-distance trips."
  },

  // src/Data/products.js
// Add these to the existing array
  { 
    id: 27, 
    title: "Smart watches", 
    price: 159.00, 
    img: "/watch.png", 
    category: "deals", 
    discount: "-25%", 
    desc: "Next-gen smartwatch with health tracking and 5-day battery life." 
  },
  { 
    id: 28, 
    title: "Laptops", 
    price: 899.00, 
    img: "/latop.png", 
    category: "deals", 
    discount: "-25%", 
    desc: "Powerful business laptop with 16GB RAM and sleek aluminum finish." 
  },
  { 
    id: 29, 
    title: "Go pro Cameras", 
    price: 299.00, 
    img: "/camera.png", 
    category: "deals", 
    discount: "-25%", 
    desc: "Action camera for extreme sports with 4K stabilization." 
  },
  { 
    id: 30, 
    title: "Headphones", 
    price: 199.00, 
    img: "/headphone.png", 
    category: "deals", 
    discount: "-25%", 
    desc: "Studio-quality wireless headphones with active noise cancellation." 
  },
  { 
    id: 31, 
    title: "Canon Cameras", 
    price: 549.00, 
    img: "/mobile.png", 
    category: "deals", 
    discount: "-25%", 
    desc: "Professional DSLR camera for high-resolution photography." 
  }
];