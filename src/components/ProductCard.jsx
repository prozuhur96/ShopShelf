export default function ProductCard({ product, onAddToCart }) {
  return (
    <div style={{ border: "1px solid #ddd", borderRadius: "8px", padding: "15px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
      <img src={product.image} alt={product.title} style={{ width: "100%", height: "160px", objectFit: "cover", borderRadius: "6px" }} />
      <div>
        <h3 style={{ fontSize: "15px", margin: "10px 0 5px 0" }}>{product.title}</h3>
        <p style={{ color: "#666", fontSize: "14px", margin: "0 0 10px 0" }}>${product.price.toFixed(2)}</p>
      </div>
      <button
        onClick={() => onAddToCart(product)}
        style={{ background: "#000", color: "#fff", border: "none", padding: "10px", borderRadius: "4px", cursor: "pointer", fontWeight: "bold" }}
      >
        Add to Cart
      </button>
    </div>
  );
}