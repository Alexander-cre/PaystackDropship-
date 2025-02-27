const products = [
  {
    "id": 1,
    "name": "Vintage Shirt",
    "price": 5000,
    "original_price": 1209,
    "quantity": 1,
    "ratings": 4.5,
    category: "men",
    "Image": "https://fromatoz.com.ng/wp-content/uploads/2022/07/528.jpg",
    sizes: ["S", "M", "L"],
    colors: ["blue", "green", "black"]
  },
  {
    "id": 2,
    "name": "Blue Denim Jeans",
    "price": 4200,
    "original_price": 4999,
    "quantity": 1,
    "ratings": 4.0,
    category: "men",
    "Image": "https://pictures.kartmax.in/live/sites/9s145MyZrWdIAwpU0JYS/product-images/killer_skinny_fir_light_blue_jeans_172924612280529_sk_lightindigo_1.jpg",
    sizes: ["S", "M", "L"],
    colors: ["blue", "green", "black"]
  },
  {
    "id": 3,
    "name": "Floral Maxi Dress",
    "price": 49.99,
    "original_price": 59.99,
    "quantity": 1,
    "ratings": 4.7,
    category: "women",
    "Image": "https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AN6428s.jpg?im=Resize,width=750",
    sizes: ["S", "M", "L"],
    colors: ["red", "yellow", "white"]
  },
  {
    "id": 4,
    "name": "Leather Jacket",
    "price": 12000,
    "original_price": 1999,
    "quantity": 1,
    "ratings": 4.6,
    category: "men",
    "Image": " https://m.media-amazon.com/images/I/81b1i-o-LhL._AC_SL1500_.jpg",
    sizes: ["M", "L", "XL"],
    colors: ["black", "brown"]
  },
  {
    "id": 5,
    "name": "High-Waisted Skirt",
    "price": 3449,
    "original_price": 4499,
    "quantity": 1,
    "ratings": 4.3,
    category: "women",
    "Image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNHt1OwMpAHdrHJ7KHz7MqvJ1QERaF_B1-Hg&s",
    sizes: ["S", "M", "L"],
    colors: ["black", "blue", "pink"]
  },
  {
    "id": 6,
    "name": "Casual Sneakers",
    "price": 5999,
    "original_price": 6999,
    "quantity": 1,
    "ratings": 4.4,
    category: "accessories",
    "Image": "https://fancysoles.com.ng/wp-content/uploads/2023/06/Screenshot_20230613-211635.jpg",
    sizes: ["7", "8", "9"],
    colors: ["white", "grey"]
  },
  {
    "id": 7,
    "name": "Makeup Brush Set",
    "price": 22999,
    "original_price": 39999,
    "quantity": 1,
    "ratings": 4.8,
    category: "makeup kits",
    "Image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfX0lKTCe0debOZG16_8FkcFVXbDWKyd_Kfw&s",
    sizes: ["N/A"],
    colors: ["pink", "black"]
  },
  {
    "id": 8,
    "name": "Stylish Sunglasses",
    "price": 19.99,
    "original_price": 29.99,
    "quantity": 1,
    "ratings": 4.5,
    category: "accessories",
    "Image": "https://m.media-amazon.com/images/I/81g1Z1g1Z1L._AC_UX679_.jpg",
    sizes: ["N/A"],
    colors: ["black", "brown"]
  },
  {
    "id": 9,
    "name": "Classic White T-Shirt",
    "price": 15.99,
    "original_price": 19.99,
    "quantity": 1,
    "ratings": 4.2,
    category: "men",
    "Image": "https://m.media-amazon.com/images/I/71g1Z1g1Z1L._AC_UX679_.jpg",
    sizes: ["S", "M", "L"],
    colors: ["white", "black"]
  },
  {
    "id": 10,
    "name": "Chic Blazer",
    "price": 79.99,
    "original_price": 99.99,
    "quantity": 1,
    "ratings": 4.5,
    category: "women",
    "Image": "https://m.media-amazon.com/images/I/81g1Z1g1Z1L._AC_UX679_.jpg",
    sizes: ["S", "M", "L"],
    colors: ["navy", "black"]
  },
  {
    "id": 11,
    "name": "Casual Shorts",
    "price": 24.99,
    "original_price": 34.99,
    "quantity": 1,
    "ratings": 4.3,
    category: "men",
    "Image": "https://m.media-amazon.com/images/I/81g1Z1g1Z1L._AC_UX679_.jpg",
    sizes: ["M", "L", "XL"],
    colors: ["khaki", "blue"]
  },
  {
    "id": 12,
    "name": "Elegant Evening Gown",
    "price": 89.99,
    "original_price": 109.99,
    "quantity": 1,
    "ratings": 4.8,
    category: "women",
    "Image": "https://m.media-amazon.com/images/I/81g1Z1g1Z1L._AC_UX679_.jpg",
    sizes: ["S", "M", "L"],
    colors: ["red", "black"]
  },
  {
    "id": 13,
    "name": "Running Shoes",
    "price": 69.99,
    "original_price": 89.99,
    "quantity": 1,
    "ratings": 4.6,
    category: "men",
    "Image": "https://m.media-amazon.com/images/I/81g1Z1g1Z1L._AC_UX679_.jpg",
    sizes: ["8", "9", "10"],
    colors: ["grey", "blue"]
  },
  {
    "id": 14,
    "name": "Crossbody Bag",
    "price": 39.99,
    "original_price": 49.99,
    "quantity": 1,
    "ratings": 4.4,
    category: "accessories",
    "Image": "https://m.media-amazon.com/images/I/81g1Z1g1Z1L._AC_UX679_.jpg",
    sizes: ["N/A"],
    colors: ["black", "brown"]
  },
  {
    "id": 15,
    "name": "Luxury Hand Cream",
    "price": 19.99,
    "original_price": 29.99,
    "quantity": 1,
    "ratings": 4.7,
    category: "makeup kits",
    "Image": "https://m.media-amazon.com/images/I/81g1Z1g1Z1L._AC_UX679_.jpg",
    sizes: ["N/A"],
    colors: ["white", "pink"]
  },
  {
    "id": 16,
    "name": "Stylish Hat",
    "price": 24.99,
    "original_price": 34.99,
    "quantity": 1,
    "ratings": 4.5,
    category: "accessories",
    "Image": "https://m.media-amazon.com/images/I/81g1Z1g1Z1L._AC_UX679_.jpg",
    sizes: ["N/A"],
    colors: ["black", "beige"]
  },
  {
    "id": 17,
    "name": "Denim Jacket",
    "price": 59.99,
    "original_price": 79.99,
    "quantity": 1,
    "ratings": 4.6,
    category: "men",
    "Image": "https://m.media-amazon.com/images/I/81g1Z1g1Z1L._AC_UX679_.jpg",
    sizes: ["M", "L", "XL"],
    colors: ["blue", "black"]
  },
  {
    "id": 18,
    "name": "Graphic Hoodie",
    "price": 49.99,
    "original_price": 59.99,
    "quantity": 1,
    "ratings": 4.4,
    category: "men",
    "Image": "https://m.media-amazon.com/images/I/81g1Z1g1Z1L._AC_UX679_.jpg",
    sizes: ["S", "M", "L"],
    colors: ["grey", "black"]
  },
  {
    "id": 19,
    "name": "Summer Dress",
    "price": 39.99,
    "original_price": 49.99,
    "quantity": 1,
    "ratings": 4.5,
    category: "women",
    "Image": "https://m.media-amazon.com/images/I/81g1Z1g1Z1L._AC_UX679_.jpg",
    sizes: ["S", "M", "L"],
    colors: ["pink", "yellow"]
  },
  {
    "id": 20,
    "name": "Sporty Backpack",
    "price": 34.99,
    "original_price": 44.99,
    "quantity": 1,
    "ratings": 4.3,
    category: "accessories",
    "Image": "https://m.media-amazon.com/images/I/81g1Z1g1Z1L._AC_UX679_.jpg",
    sizes: ["N/A"],
    colors: ["black", "red"]
  },
  {
    "id": 21,
    "name": "Nail Polish Set",
    "price": 24.99,
    "original_price": 34.99,
    "quantity": 1,
    "ratings": 4.6,
    category: "makeup kits",
    "Image": "https://m.media-amazon.com/images/I/81g1Z1g1Z1L._AC_UX679_.jpg",
    sizes: ["N/A"],
    colors: ["various"]
  },
  {
    "id": 22,
    "name": "Wool Scarf",
    "price": 29.99,
    "original_price": 39.99,
    "quantity": 1,
    "ratings": 4.5,
    category: "accessories",
    "Image": "https://m.media-amazon.com/images/I/81g1Z1g1Z1L._AC_UX679_.jpg",
    sizes: ["N/A"],
    colors: ["grey", "navy"]
  },
  {
    "id": 23,
    "name": "Leather Wallet",
    "price": 39.99,
    "original_price": 49.99,
    "quantity": 1,
    "ratings": 4.7,
    category: "accessories",
    "Image": "https://m.media-amazon.com/images/I/81g1Z1g1Z1L._AC_UX679_.jpg",
    sizes: ["N/A"],
    colors: ["black", "brown"]
  },
  {
    "id": 24,
    "name": "Fitness Tracker",
    "price": 99.99,
    "original_price": 129.99,
    "quantity": 1,
    "ratings": 4.8,
    category: "accessories",
    "Image": "https://m.media-amazon.com/images/I/81g1Z1g1Z1L._AC_UX679_.jpg",
    sizes: ["N/A"],
    colors: ["black", "blue"]
  }
];
export default products;


// Product access functions
// Product access functions
export const productService = {
  getAllProducts: () => [...products],
  getProductsByCategory: (category) => 
      products.filter(p => p.category.toLowerCase() === category.toLowerCase()), // Case insensitive comparison
  getProductById: (id) => products.find(p => p.id === id),
  getCategories: () => [...new Set(products.map(p => p.category))]
};
  
  
// console.log(productService.getCategories());
