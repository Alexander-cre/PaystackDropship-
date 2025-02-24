const products = [
    { 
        "id": 1, 
        "name": "Electric blender Philips", 
        "price": 19.99, 
        "original_price": 29.99, 
        "quantity": 1,
         "ratings": 4.5,
         "category": "menproducts",
        "Image": "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/70/9240283/1.jpg?9502",  
        sizes: ["S", "M", "L"],
        colors: ["blue", "green", "black"]  
 },
    { 
      "id": 2, 
      "name": "Blue Denim Jeans", 
      "price": 39.99, 
      "original_price": 49.99, 
      "quantity": 1, 
      "ratings": 4.0, 
      "category": "menproducts",
      "Image": "https://via.placeholder.com/150?text=Blue+Denim+Jeans" ,
      sizes: ["S", "M", "L"],
      colors: ["blue", "green", "black"]  
      },
      { 
        "id": 3, 
        "name": "Blue  Jeans", 
        "price": 39.99, 
        "original_price": 49.99, 
        "quantity": 1, 
        "ratings": 4.0, 
        "category": "women",
        "Image": "https://via.placeholder.com/150?text=Blue+Denim+Jeans" ,
        sizes: ["S", "M", "L"],
        colors: ["blue", "green", "black"]  
        },
]

export default products;


// Product access functions
export const productService = {
  getAllProducts: () => [...products],
  getProductsByCategory: (category) => 
    products.filter(p => p.category === category),
  getProductById: (id) => products.find(p => p.id === id),
  getCategories: () => [...new Set(products.map(p => p.category))]
};
  
  
// console.log(productService.getCategories());