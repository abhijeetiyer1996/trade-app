# Trading Order Book System 🏦📊

A **Node.js**-based **Trading Order Book System** that supports **buy and sell limit orders**, trade execution, and real-time order book management.

## 🚀 Features

- **Asset Management:** Create, update, delete, and fetch assets.
- **Order Management:** Place buy/sell orders with price limits.
- **Order Book:** View top bids (buy orders) and asks (sell orders).
- **Trade Execution:** Matches buy/sell orders based on price-time priority.
- **Trade History:** Stores executed trade records.

---

## 🏗️ Folder Structure

```
src/
├── controllers/       # Business logic for APIs
│   ├── order.controller.js
│   ├── orderBook.controller.js
│   ├── trade.controller.js
├── models/           # Data models (classes)
│   ├── Order.model.js
├── routes/           # API endpoints
│   ├── orders.route.js
│   ├── orderBook.route.js
│   ├── trade.route.js
├── services/         # Business logic services
│   ├── order.service.js
│   ├── orderBook.service.js
│   ├── trade.service.js
├── index.js          # Main entry point
├── .env              # Environment variables
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```sh
git clone https://github.com/yourusername/trading-order-book.git
cd trading-order-book
```

### 2️⃣ Install dependencies

```sh
npm install
```

### 3️⃣ Configure environment variables

Create a `.env` file and set the port:

```
PORT=3000
```

### 4️⃣ Start the server

```sh
npm start
```

The server will run at:
🔗 **http://localhost:3000/api**

---

## 🔥 API Endpoints

### 📌 **1. Asset Management**

| Method | Endpoint               | Description                 |
|--------|------------------------|-----------------------------|
| `POST` | `/api/assets`          | Create a new asset          |
| `GET`  | `/api/assets`          | Get all assets              |
| `GET`  | `/api/assets/:symbol`  | Get asset details by symbol |
| `PUT`  | `/api/assets/:id`      | Update an asset by ID       |
| `DELETE` | `/api/assets/:id`    | Soft delete an asset        |

---

### 📌 **2. Order Management**

| Method | Endpoint           | Description             |
|--------|--------------------|-------------------------|
| `POST` | `/api/orders`      | Place a buy/sell order  |
| `GET`  | `/api/orders`      | Get all orders          |
| `DELETE` | `/api/orders/:id` | Cancel an order         |

---

### 📌 **3. Order Book**

| Method | Endpoint             | Description                  |
|--------|----------------------|------------------------------|
| `GET`  | `/api/orderbook/bids` | Get top buy orders (bids)   |
| `GET`  | `/api/orderbook/asks` | Get top sell orders (asks)  |

---

### 📌 **4. Trade Execution**

| Method | Endpoint             | Description                 |
|--------|----------------------|-----------------------------|
| `POST` | `/api/trades/execute` | Execute trade matching      |
| `GET`  | `/api/trades/history` | Get executed trade history  |

---

## 🛠️ How It Works

1. **Users create assets** (e.g., `AAPL` for Apple Inc.).
2. **Users place buy and sell limit orders** with a specified price and quantity.
3. **Orders are stored in the order book** and sorted based on price-time priority.
4. **The matching engine executes trades** when a buy order matches a sell order.
5. **Trade history records executed transactions.**

---

## POSTMAN COLLECTION
[trading app.postman_collection.json](https://github.com/user-attachments/files/19174387/trading.app.postman_collection.json)


## 📌 Example Trade Flow

### **Given Orders:**
#### ✅ Buy Orders
- **Buy 10 @ $150**
- **Buy 5 @ $155**

#### ❌ Sell Orders
- **Sell 8 @ $145**
- **Sell 7 @ $150**

### **Execution Steps:**
1. **Buy 10 @ $150** matches **Sell 8 @ $145**  
   ✅ Trade: `8 units @ $145`
2. **Remaining Buy 2 @ $150** matches **Sell 7 @ $150**  
   ✅ Trade: `2 units @ $150`
3. **Buy 5 @ $155** matches remaining **Sell 5 @ $150**  
   ✅ Trade: `5 units @ $150`

### **Final Trade History:**
```json
[
    { "asset": "AAPL", "price": 145, "quantity": 8 },
    { "asset": "AAPL", "price": 150, "quantity": 2 },
    { "asset": "AAPL", "price": 150, "quantity": 5 }
]
```

---

## 🏗️ Future Improvements

- ✅ Add database storage (MongoDB/PostgreSQL) instead of in-memory storage.
- ✅ Implement **market orders** (instant trade at the best available price).
- ✅ Add **WebSockets** for real-time order book updates.

---

## 📜 License

This project is **MIT licensed**. You are free to use, modify, and distribute it.

---

## ✨ Credits

Developed with ❤️ by **[Your Name]**  
🔗 GitHub: [yourgithubprofile](https://github.com/yourusername)

