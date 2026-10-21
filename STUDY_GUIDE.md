# ShopShelf React Study Guide 📚
*A comprehensive breakdown of the core concepts, architecture, and React features used to build the ShopShelf e-commerce application.*

---


# 📚 Table of Contents

- [Introduction](#-shopshelf-react-study-guide-)
- [Section 1: The React Foundation & Component Architecture](#section-1-the-react-foundation--component-architecture)
  - [1. What is React?](#1-what-is-react)
  - [2. Component-Based Design](#2-component-based-design)
  - [3. What are Props?](#3-what-are-props-passing-data-down)
- [Section 2: State Management & the Power of useState](#section-2-state-management--the-power-of-usestate)
  - [What is State?](#what-is-state)
  - [Understanding the useState Hooks](#what-is-state)
- [Section 3: JavaScript Array Methods in Action](#section-3-javascript-array-methods-in-action)
  - [map()](#section-3-javascript-array-methods-in-action)
  - [filter()](#section-3-javascript-array-methods-in-action)
  - [reduce()](#section-3-javascript-array-methods-in-action)
  - [Set](#section-3-javascript-array-methods-in-action)
- [Section 4: Event Handling & User Experience (UX)](#section-4-event-handling--user-experience-ux)
  - [1. Handling User Actions](#1-handling-user-actions)
  - [2. Side Effects & Timers (setTimeout)](#2-side-effects--timers-settimeout)

---

## Section 1: The React Foundation & Component Architecture

### 1. What is React?
React is a JavaScript library for building user interfaces. Instead of writing traditional HTML pages that reload entirely when data changes, React allows you to build **interactive components** that update instantly in the browser when state changes.

### 2. Component-Based Design
Think of a React app like building with LEGO bricks. Instead of cramming your entire website into one giant file, you break it down into smaller, isolated pieces (components):
* **`App.jsx`**: The master coordinator (parent component) that holds the application state and layout structure.
* **`Header.jsx`**: A child component responsible for the store title and the clickable cart summary button.
* **`ProductCard.jsx`**: A reusable child component that displays a single product's image, title, price, and "Add to Cart" button.
* **`Cart.jsx`**: A child component that renders the floating dropdown overlay showing selected items and checkout options.
* **`Toast.jsx`**: A pop-up notification component that alerts the user when an action is taken.

### 3. What are "Props"? (Passing Data Down)
**Props** (short for properties) are how data flows **downward** from a parent component to a child component. 
* *Example in our project:* `App.jsx` passes individual product details down to `ProductCard` using `<ProductCard product={product} onAddToCart={addToCart} />`. The child component receives these props and uses them to render the product's image and handle click events.

---

## Section 2: State Management & The Power of `useState`

### What is State?
State is a component’s **memory**. Unlike regular variables—which reset every time a function runs—state variables persist across renders. When a state variable changes, React automatically re-renders the UI to reflect the new data.

In `App.jsx`, we use several `useState` hooks:
1. **`const [searchQuery, setSearchQuery] = useState("")`**
   * Tracks what the user types into the search input box in real-time.
2. **`const [selectedCategory, setSelectedCategory] = useState("All")`**
   * Tracks which category filter pill is currently active.
3. **`const [cart, setCart] = useState([])`**
   * Tracks an array of items added to the shopping cart, including their quantities.
4. **`const [isCartOpen, setIsCartOpen] = useState(false)`**
   * A boolean (`true` or `false`) that controls whether the floating cart dropdown overlay is visible.
5. **`const [notification, setNotification] = useState(null)`**
   * Manages the text and visibility of the toast alert popup when items are added to the cart.

---

## Section 3: JavaScript Array Methods in Action

Modern JavaScript array methods power the dynamic filtering and calculations of our app:

1. **`map()`**
   * Loops through an array and transforms each item into JSX elements. We use it to render product grids, category buttons, and cart items dynamically.
2. **`filter()`**
   * Evaluates conditions to return a new subset of an array. We use it to filter products based on the search query and selected category, as well as to remove items from the cart.
3. **`reduce()`**
   * Accumulates values across an array into a single result. 
   * *Example:* We use `reduce()` on the `cart` array to calculate the total number of items and the running total price.
4. **`Set`**
   * Used to extract unique categories from our product list (`[...new Set(products.map(p => p.category))]`) so our filter buttons never duplicate categories.

---

## Section 4: Event Handling & User Experience (UX)

### 1. Handling User Actions
React uses event listeners like `onClick` and `onChange` to capture user interactions:
* `onChange={(e) => setSearchQuery(e.target.value)}`: Captures keystrokes in the search bar and updates the state instantly.
* `onClick={() => addToCart(product)}`: Triggers the shopping cart update when a user clicks a product button.

### 2. Side Effects & Timers (`setTimeout`)
In our toast notification system, we use JavaScript's built-in `setTimeout` function to automatically clear the notification state after 3 seconds, giving users a smooth, modern UI feedback loop without needing to manually close the alert.