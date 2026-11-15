# Raw Node.js Server with TypeScript

A simple REST API built with raw Node.js and TypeScript, without using Express.js. This project focuses on understanding how HTTP servers, routing, controllers, request handling, and file-based data storage work internally.

## Features

- Built-in Node.js HTTP server using `http.createServer()`
- TypeScript with ES Modules
- RESTful API development
- Product CRUD operations
- Separate routes and controllers
- Custom request body parser
- Reusable JSON response handler
- JSON file-based data storage
- Environment variable configuration with dotenv
- Automatic server restart using tsx watch

## Technologies Used

- Node.js
- TypeScript
- HTTP Module
- File System (fs)
- Path Module
- dotenv
- tsx

## Project Structure

```text
src/
├── config/
│   └── index.ts
├── controllers/
│   └── product.controllers.ts
├── database/
│   └── db.json
├── routes/
│   └── routes.ts
├── service/
│   └── product.service.ts
├── types/
│   └── product.types.ts
├── utils/
│   ├── parseBody.ts
│   └── sendResponse.ts
└── server.ts

.env
.gitignore
package.json
tsconfig.json
```

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/mern-miraz/server-with-raw-node.js.git
```

### 2. Navigate to the project directory

```bash
cd server-with-raw-node.js
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env` file in the root directory:

```env
PORT=5000
```

### 5. Start the development server

```bash
npm run dev
```

The server will start at:

```text
http://localhost:5000
```

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/` | Root route |
| GET | `/products` | Get all products |
| GET | `/products/:id` | Get a single product |
| POST | `/products` | Create a product |
| PUT | `/products/:id` | Update a product |
| DELETE | `/products/:id` | Delete a product |

## Example Product

```json
{
  "id": 500,
  "name": "Laptop",
  "brand": "Apple",
  "price": 252000
}
```

For POST requests, the server generates the product ID automatically, so you only need to send:

```json
{
  "name": "Laptop",
  "brand": "Apple",
  "price": 252000
}
```

## Learning Objectives

This project helps me understand:

- How to create an HTTP server without Express.js.
- How HTTP methods and status codes work.
- How to handle incoming requests and outgoing responses.
- How to organize server-side code using routes, controllers, and services.
- How to read and write data using Node.js File System.
- How to parse JSON request bodies.
- How to build REST APIs using TypeScript.

## Author

**Mirazul Islam**

- GitHub: https://github.com/mern-miraz
- LinkedIn: https://www.linkedin.com/in/mern-miraz/
