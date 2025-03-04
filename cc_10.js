//Task 1-Creating an Employee Class
class Product {
    constructor(name, id, price, stock) {
      this.name = name;
      this.id = id;
      this.price=price;
      this.stock=stock;
    }// Creating a class for product and their properties
  
    getDetails() {
      return(`Product:${this.name}, ID: ${this.id}, Price: ${this.price}, Stock:${this.stock}`);
    }// Including a "getDetails()" method for stock's properties

    updateStock(quantity)  {
    return this.stock -= quantity;
  }// modifying the stock level
};
const prod1 = new Product("Laptop", 101, 1200, 10);
console.log(prod1.getDetails()); 
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 10"

prod1.updateStock(3);
console.log(prod1.getDetails()); 
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 7"

//Task 2-Creating an Order Class
class Order {
  constructor(orderID, product, quantity) {
    this.orderID = orderID;
    this.product = product;
    this.quantity = quantity;
    this.totalPriceIs = this.product.price*this.quantity
    this.product.updateStock(this.quantity)
  }// Creating a class for order and their properties
   getOrderDetails() {
    return(`OrderID:${this.orderID}, Product: ${this.product},  Quantity: ${this.quantity}, Total Price:${this.totalPriceIs}`);
  
  };// Including a "getOrderDetails()" method for stock's properties
};


const order1 = new Order(501, prod1, 2);
console.log(order1.getOrderDetails());
// Expected output: "Order ID: 501, Product: Laptop, Quantity: 2, Total Price: $2400"


console.log(prod1.getDetails());
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 5" (Stock reduced)

//Task 3-Creating an Inventory Class
class Inventory {
  constructor() {
    this.products = [];
    this.orders = [];
};
   addProduct(product) {
    this.products.push(product);
}
listProducts() {
  this.products.forEach(product => console.log(product.getDetails()));//Logging details for task 3
 


}
//Task 4- Implementing a Payroll System
placeOrder(orderId, product, quantity) {
  if( product.stock >= quantity) {
    let order = new Order(orderId, product, quantity);
    this.orders.push(order);
  } else {
    console.log("Not sufficient")
  }
 
 
 }
 listOrders() {
  this.orders.forEach(order => {
    console.log(order.getOrderDetails());//logging details for task 4
   });
 
 
  }
 }


 const inventory = new Inventory();
 inventory.addProduct(prod1);
 inventory.listProducts();
 //Task 3
 // Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 5"
 
 
 //Task 4
 inventory.placeOrder(601, prod1, 2);
 inventory.listOrders();
 // Expected output: "Order ID: 601, Product: Laptop, Quantity: 2, Total Price: $2400"
 console.log(prod1.getDetails());
 // Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 3"
