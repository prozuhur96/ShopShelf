export default function Header({ totalItems, totalPrice, onToggleCart }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #ddd", paddingBottom: "15px", position: "relative" }}>
      <div>
        <h1 style={{ margin: "0" }}>ShopShelf 🛍️</h1>
        <p style={{ margin: "5px 0 0 0", color: "#666" }}>Your modern online store</p>
      </div>

      {/* Clickable Cart Button */}
      <button
        onClick={onToggleCart}
        style={{
          background: "#f5f5f5",
          border: "1px solid #ddd",
          padding: "10px 18px",
          borderRadius: "8px",
          fontWeight: "bold",
          cursor: "pointer",
          display: "flex",
          alignItem: "center",
          gap: "8px",
          fontSize: "15px"
        }}
      >
        🛒 Cart ({totalItems}) - ${totalPrice.toFixed(2)}
      </button>
    </div>
  );
}