export default function Cart({ cart, onRemoveFromCart, totalPrice, isOpen, onClose }) {
  if (!isOpen) return null; // Don't render anything if it's closed

  return (
    <div
      style={{
        position: "absolute",
        right: "20px",
        top: "80px",
        width: "320px",
        background: "#fff",
        boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
        borderRadius: "10px",
        border: "1px solid #ddd",
        padding: "20px",
        zIndex: 1000
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "15px" }}>
        <h2 style={{ margin: "0", fontSize: "18px" }}>Your Cart</h2>
        <button
          onClick={onClose}
          style={{ background: "none", border: "none", fontSize: "16px", cursor: "pointer", fontWeight: "bold" }}
        >
          ✕
        </button>
      </div>

      {cart.length === 0 ? (
        <p style={{ color: "#666", textAlign: "center", margin: "20px 0" }}>Your cart is empty.</p>
      ) : (
        <div>
          <div style={{ maxHeight: "250px", overflowY: "auto", marginBottom: "15px" }}>
            {cart.map((item) => (
              <div key={item.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px", borderBottom: "1px solid #eee", paddingBottom: "8px" }}>
                <div>
                  <p style={{ margin: "0", fontSize: "14px", fontWeight: "bold" }}>{item.title}</p>
                  <p style={{ margin: "2px 0 0 0", fontSize: "12px", color: "#666" }}>
                    ${item.price.toFixed(2)} × {item.quantity}
                  </p>
                </div>
                <button
                  onClick={() => onRemoveFromCart(item.id)}
                  style={{ background: "#ff4d4d", color: "#fff", border: "none", padding: "4px 8px", borderRadius: "4px", cursor: "pointer", fontSize: "12px" }}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div style={{ borderTop: "2px solid #eee", paddingTop: "10px" }}>
            <p style={{ display: "flex", justifyContent: "space-between", fontWeight: "bold", fontSize: "16px" }}>
              <span>Total:</span>
              <span>${totalPrice.toFixed(2)}</span>
            </p>
            <button
              onClick={() => alert("Checkout feature coming soon!")}
              style={{ width: "100%", background: "#28a745", color: "#fff", border: "none", padding: "12px", borderRadius: "4px", cursor: "pointer", fontWeight: "bold", marginTop: "10px" }}
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}