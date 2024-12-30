# Mobishala Backend Assignment: E-Commerce Cart with Payment Gateway Integration

This project is part of the Mobishala hiring assignment. It implements an e-commerce backend system with functionalities for managing a cart and integrating a payment gateway using Cashfree.

---

## Features

- **Cart Management**:
  - Add items to the cart.
  -
   Update item quantities in the cart.
  - Remove items from the cart.
  - Fetch cart details for a specific user.

- **Payment Integration**:
  - Initiate payments using the Cashfree Payment Gateway.
  - Handle payment success or failure through webhooks.

- **Error Handling**:
  - Robust error handling for invalid inputs, API errors, and payment failures.
  - Logging for debugging and tracking issues.

---

## Technologies Used

- **Backend Framework**: Node.js (Express)
- **Database**: MongoDB
- **Payment Gateway**: Cashfree
- **Tools**: Postman (API testing), Ngrok (Webhook testing)

---

## Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.
- MongoDB database set up locally or on a cloud service like [MongoDB Atlas](https://www.mongodb.com/atlas/database).
- [Cashfree](https://www.cashfree.com/) account for payment integration.
- Postman for API testing.

---

 Test Individual Endpoints
To test an endpoint manually, follow these steps:

Step 1: Create a New Request
Open Postman and click + to create a new tab.
Select the appropriate HTTP method (e.g., GET, POST, PUT, DELETE).
Step 2: Set the URL
Use the endpoint URL (e.g., http://localhost:3000/api/add-to-cart).
Step 3: Add Headers
If required, add headers such as:
Content-Type: application/json
Authorization: Bearer <your_token> (for secured routes).
Step 4: Add Request Body (if applicable)
For methods like POST or PUT, go to the Body tab.
Select raw and choose JSON from the dropdown.
Enter the JSON payload. For example:
json
Copy code
{
    "productId": "12345",
    "quantity": 2
}
Step 5: Send the Request
Click the Send button.
Postman will display the response, including:
Status Code (e.g., 200 OK, 400 Bad Request).
Response Body.
3. Common Scenarios
Testing Add to Cart API
Method: POST
URL: http://localhost:3000/api/add-to-cart
Headers:
Content-Type: application/json
Authorization: Bearer <your_token> (if authentication is required)
Body:
json
Copy code
{
    "productId": "12345",
    "quantity": 2
}
Testing Fetch Cart API
Method: GET
URL: http://localhost:3000/api/cart
Headers:
Authorization: Bearer <your_token> (if authentication is required)
Expected Response
For successful requests, expect responses like:

json
Copy code
{
    "message": "Operation successful",
    "data": {
        "cartId": "67890",
        "items": [
            {
                "productId": "12345",
                "quantity": 2,
                "price": 500
            }
       ],
        "totalPrice": 1000
    }
}
4. Running Predefined Collections
If you've imported a Postman Collection:

Go to Collections in the left sidebar.
Select the collection and click Run.
Configure variables (if any) and click Run to execute all tests.

