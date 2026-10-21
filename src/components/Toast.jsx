export default function Toast({ message }) {
  if (!message) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: "25px",
        right: "25px",
        background: "#222",
        color: "#fff",
        padding: "12px 20px",
        borderRadius: "8px",
        boxShadow: "0 6px 16px rgba(0,0,0,0.2)",
        zIndex: 2000,
        fontSize: "14px",
        fontWeight: "500",
        display: "flex",
        alignItems: "center",
        gap: "8px"
      }}
    >
      <span>✨</span> {message}
    </div>
  );
}