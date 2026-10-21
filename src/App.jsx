import { useState } from "react";
import { products } from "./products";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import Toast from "./components/Toast";

export default function App() {
  // --- STATE MANAGEMENT (App's memory) ---
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [notification, setNotification] = useState(null);

  // --- DERIVED DATA & FILTERS ---
  // Get unique categories for filter buttons from products list
  const categories = ["All", ...new Set(products.map((p) => p.category))];

  // Filter products based on what the user typed in search & category selected
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // --- CART ACTIONS & LOGIC ---
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        // If product already exists in cart, increase quantity
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      // Otherwise, add it with a starting quantity of 1
      return [...prevCart, { ...product, quantity: 1 }];
    });

    // Trigger toast notification popup
    setNotification(`Added "${product.title}" to cart!`);
    
    // Automatically hide notification after 3 seconds
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // Calculate live item counts and total price for the cart summary
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // --- COMPONENT RENDER ---
  return (
    <div style={{ fontFamily: "sans-serif", padding: "20px", maxWidth: "1200px", margin: "0 auto", position: "relative" }}>
      
      {/* Header with Title and Cart Toggle Button */}
      <Header 
        totalItems={totalItems} 
        totalPrice={totalPrice} 
        onToggleCart={() => setIsCartOpen(!isCartOpen)} 
      />

      {/* Floating Cart Dropdown Overlay */}
      <Cart 
        cart={cart} 
        onRemoveFromCart={removeFromCart} 
        totalPrice={totalPrice} 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
      />

      {/* Toast Notification Pop-up */}
      <Toast message={notification} />

      {/* Main Content Layout */}
      <div style={{ marginTop: "30px" }}>
        
        {/* Search Bar and Category Filters */}
        <div style={{ display: "flex", gap: "15px", marginBottom: "25px", flexWrap: "wrap", alignItems: "center" }}>
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ padding: "10px", width: "250px", borderRadius: "4px", border: "1px solid #ddd" }}
          />

          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: "8px 14px",
                  borderRadius: "20px",
                  border: "1px solid #000",
                  background: selectedCategory === cat ? "#000" : "#fff",
                  color: selectedCategory === cat ? "#fff" : "#000",
                  cursor: "pointer"
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "25px" }}>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
            ))
          ) : (
            <p>No products found matching your search.</p>
          )}
        </div>

      </div>
    </div>
  );
}