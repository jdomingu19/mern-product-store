# MERN Product Store 🛒

A modern **full-stack MERN application** built to manage products through a clean and responsive interface.

The application provides a complete **CRUD workflow** for products, allowing users to create, browse, update, and delete items in real time. It integrates **MongoDB**, **Express**, **React**, **Node.js**, **Zustand**, and **Chakra UI** to deliver a modern developer and user experience.

<img width="1281" height="644" alt="image" src="https://github.com/user-attachments/assets/345a436c-86b3-42d2-a562-cb0c6ecd4fe5" />


## Tech Stack ⚙️

![Static Badge](https://img.shields.io/badge/react-18+-1C2024?style=for-the-badge&logo=react&logoColor=white&labelColor=101010)
![Static Badge](https://img.shields.io/badge/react_router-6+-1C2024?style=for-the-badge&logo=reactrouter&logoColor=white&labelColor=101010)
![Static Badge](https://img.shields.io/badge/chakra_ui-2+-1C2024?style=for-the-badge&logo=chakraui&logoColor=white&labelColor=101010)
![Static Badge](https://img.shields.io/badge/zustand-4+-1C2024?style=for-the-badge&labelColor=101010)
![Static Badge](https://img.shields.io/badge/vite-5+-1C2024?style=for-the-badge&logo=vite&logoColor=white&labelColor=101010)
![Static Badge](https://img.shields.io/badge/node.js-20+-1C2024?style=for-the-badge&logo=node.js&logoColor=white&labelColor=101010)
![Static Badge](https://img.shields.io/badge/express.js-4+-1C2024?style=for-the-badge&logo=express&logoColor=white&labelColor=101010)
![Static Badge](https://img.shields.io/badge/mongodb-1C2024?style=for-the-badge&logo=mongodb&logoColor=white&labelColor=101010)
![Static Badge](https://img.shields.io/badge/mongoose-8+-1C2024?style=for-the-badge&logo=mongoose&logoColor=white&labelColor=101010)
![Static Badge](https://img.shields.io/badge/cross_env-7+-1C2024?style=for-the-badge&labelColor=101010)

## Features 🎯

- **Create products** with name, price, and image URL.
- **Browse products** stored in MongoDB.
- **Update products** using an interactive modal.
- **Delete products** with instant UI updates.
- **Global state management** powered by Zustand.
- **Toast notifications** for success and error feedback.
- **Responsive UI** built with Chakra UI.
- **RESTful API** developed with Express and MongoDB.
- **Production-ready deployment configuration** with a unified frontend/backend server.
- **Cross-platform compatibility** using cross-env for Linux, macOS, and Windows environments.

## Installation & Setup 🚀

Clone the repository:

```bash
git clone https://github.com/jdomingu19/mern-product-store.git

cd mern-product-store
```

### Backend Setup ⚡

Install backend dependencies:

```bash
npm install
```

Or manually:

```bash
npm init -y
```

```bash
npm install express@4.19.2
```

```bash
npm install mongoose dotenv
```

```bash
npm install nodemon -D
```

```bash
npm install cross-env
```

Create a `.env` file in the project root:

```env
PORT=5000

MONGODB_URI=your_mongodb_connection_string
```

Run the backend in development mode:

```bash
npm run dev
```

### Frontend Setup 🎨

Move to the frontend directory:

```bash
cd frontend
```

Create the React application with Vite:

```bash
npm create vite@latest .
```

Install Chakra UI:

```bash
npm i @chakra-ui/react@2 @emotion/react @emotion/styled framer-motion
```

Install React Router:

```bash
npm i react-router-dom
```

Install icon libraries:

```bash
npm i react-icons
```

```bash
npm i @chakra-ui/icons
```

Install Zustand:

```bash
npm i zustand
```

Start the frontend:

```bash
npm run dev
```

## Production Build 📦

Build the complete application:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

The React application will be served directly by the Express server using a single URL.

## API Endpoints 🌐

### Products

#### Get All Products

```http
GET /api/products
```

#### Create Product

```http
POST /api/products
```

Request body:

```json
{
  "name": "Mechanical Keyboard",
  "price": 120,
  "image": "https://example.com/keyboard.jpg"
}
```

#### Update Product

```http
PUT /api/products/:id
```

#### Delete Product

```http
DELETE /api/products/:id
```

## Project Structure 📂

```text
mern-product-store/
├── backend/
│   ├── config/
│   │   └── database.js
│   ├── controllers/
│   │   └── product.controller.js
│   ├── models/
│   │   └── product.model.js
│   ├── routes/
│   │   └── product.route.js
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   └── ProductCard.jsx
│   │   ├── pages/
│   │   │   ├── HomePage.jsx
│   │   │   └── CreatePage.jsx
│   │   ├── store/
│   │   │   └── product.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── vite.config.js
│
├── .env
├── package.json
└── README.md
```

## Learning Objectives 🎓

This project was built to practice and reinforce:

- Full-stack application development with MERN.
- REST API design using Express.
- MongoDB data modeling with Mongoose.
- React component architecture.
- Global state management with Zustand.
- Chakra UI component libraries and theming.
- Production deployment workflows.
- Client/server integration and proxy configuration.

## Contributing 🤝

Contributions are welcome!

Feel free to open an issue or submit a pull request with improvements, bug fixes, refactorings, or new features.

## License ⚖️

This project is distributed under the MIT License.

See the [LICENSE](LICENSE) file for more information.

> Built with ♥ by Jesús Domínguez [@jdomingu19](https://github.com/jdomingu19/)
