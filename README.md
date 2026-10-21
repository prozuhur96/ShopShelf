# ShopShelf 🛍️

ShopShelf is a modern, responsive e-commerce web application built from scratch using **React**, **Vite**, and **JavaScript**. This project serves as a hands-on exploration of component-driven architecture and interactive state management in modern web development.

---

## 🚀 Features
* **Dynamic Product Catalog:** Display a grid of products with images, titles, prices, and categories.
* **Instant Search & Category Filtering:** Real-time filtering as users type queries or click category pills.
* **Interactive Shopping Cart:** Add items, manage quantities automatically, remove items, and view live totals.
* **Dropdown Cart Overlay:** A sleek, absolute-positioned popover menu to view cart contents without cluttering the main screen.
* **Toast Notifications:** Smooth temporary pop-up alerts confirming user actions (e.g., adding an item to the cart).

---

## 📁 Project Structure

```text
ShopShelf/
├── public/            # Static assets
├── src/
│   ├── components/    # Modular UI building blocks
│   │   ├── Cart.jsx   # Shopping cart dropdown overlay
│   │   ├── Header.jsx # Navigation header & cart toggle button
│   │   ├── ProductCard.jsx # Individual product display card
│   │   └── Toast.jsx  # Temporary notification alert popup
│   ├── App.jsx        # Main application controller & state manager
│   ├── main.jsx       # React entry point mounting to index.html
│   └── products.js    # Mock inventory data source
├── index.html         # Base HTML shell
├── package.json       # Project dependencies and scripts
└── README.md          # Project guide and documentation
```


## 🧠 Core React Concepts Used

### 1. Components & Modularity

- **What it is:** Breaking a user interface down into independent, isolated, and reusable pieces.
- **Why we use it:** Instead of cramming an entire website into one massive file, components like `Header.jsx`, `ProductCard.jsx`, `Cart.jsx`, and `Toast.jsx` keep code organized, readable, and easy to maintain.

### 2. Props (Passing Data Down)

- **What it is:** Short for "properties." Props are read-only data objects passed downward from a parent component (like `App.jsx`) to a child component.
- **Why we use it:** To share dynamic data and callback functions across different levels of your application hierarchy (e.g., passing `product` data and `onAddToCart` down to `ProductCard`).

### 3. State & `useState` (Component Memory)

- **What it is:** State acts as a component's **memory**. Regular JavaScript variables reset every time a function re-runs, but state variables persist across renders.
- **Why we use it:** When a state variable changes (e.g., typing in the search bar, adding an item to the cart, or opening the dropdown), React automatically re-renders the UI to reflect the new data instantly.

### 4. Modern JavaScript Array Methods

React relies heavily on modern functional JavaScript array methods to handle data dynamically:

- **`map()`:** Loops through an array and transforms each item into a UI element (used for rendering grids and lists).
- **`filter()`:** Returns a new array containing only items that match a specific condition (used for real-time search and category filtering).
- **`reduce()`:** Accumulates values across an array into a single result (used to calculate total cart quantity and total price).

### 5. Side Effects & Timers (`setTimeout`)

- **What it is:** Handling asynchronous behaviors or actions outside normal rendering cycles.
- **Why we use it:** In our toast notification system, `setTimeout` creates a timer that automatically clears the alert message after 3 seconds without requiring manual user dismissal.

---

## 🛠️ Getting Started & Installation

Follow these steps to run the project locally on your machine:

### 1. Clone or Open the Project

Clone the repository or open the project folder in your terminal.

### 2. Install Dependencies

Run the following command in your terminal:

```powershell
npm install
```

### 3. Start the Development Server

Run the following command:

```powershell
npm run dev
```

### 4. Open in Your Browser

Navigate to the local URL provided in your terminal, typically:

```text
http://localhost:5173
```

---

## 💡 Future Enhancements

- **LocalStorage Persistence:** Save cart items so they aren't lost when the page is refreshed.
- **Checkout Modal:** Implement a checkout form simulation.
- **Dark Mode:** Add a toggle for switching between light and dark themes.

---

# Author

By Zuhur ;)